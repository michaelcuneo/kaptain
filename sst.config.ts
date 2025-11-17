// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'kaptain',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			protect: ['production'].includes(input?.stage),
			home: 'aws'
		};
	},
	async run() {
		const { domain } = await import('./helpers/domain.js');

		const userTable = new sst.aws.Dynamo('RaUsertable', {
			fields: {
				id: 'string',
				email: 'string'
			},
			primaryIndex: { hashKey: 'email' },
			globalIndexes: {
				idIndex: { hashKey: 'id' }
			}
		});

		const emailer = new sst.aws.Email('RaEmailer', {
			sender: domain({}),
			dmarc: 'v=DMARC1; p=quarantine; adkim=s; aspf=s;'
		});

		const api = new sst.aws.ApiGatewayV2('RaApi', {
			link: [userTable]
		});

		api.route('GET /users/list', './api/users.listUsers');
		api.route('GET /user/get/{email}', './api/users.getUser');
		api.route('POST /user/create', './api/users.createUser');
		api.route('PUT /user/update', './api/users.updateUser');
		api.route('DELETE /user/delete', './api/users.deleteUser');

		const auth = new sst.aws.Auth('RaAuth', {
			issuer: {
				handler: 'auth/auth.handler',
				link: [api, emailer]
			}
		});

		new sst.aws.SvelteKit('RaProductions', {
			domain: {
				name: 'raproductions.com.au'
			},
			link: [auth, api, emailer]
		});

		return {
			tables: userTable.name
		};
	}
});
