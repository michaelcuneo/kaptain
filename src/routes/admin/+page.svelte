<script>
  import QRCode from '@castlenine/svelte-qrcode';
</script>

<div class="qr">
  <QRCode data="https://youtu.be/dQw4w9WgXcQ" />
</div>

<style>
  .qr { 
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>