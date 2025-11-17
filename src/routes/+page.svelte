<script lang="ts">
  import type { PageData } from "./$types";
  
  let { data }: { data: PageData } = $props();

  $inspect(data);
</script>
<div class="main">
  <div class="typewriter-chaos"></div>

  <div class="coming-soon">
    Coming Soon<br>
  </div>
  <div class="in-your-hand">
    In your hand<br>
  </div>
  <div class="or-on-screen">
    Or in front of your face.
  </div>
</div>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
/* --------------------------
   TYPEWRITER BASE
--------------------------------*/
.typewriter-chaos {
  font-family: 'Bank Gothic Medium';
  font-size: 2.2rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid var(--color-black);
  padding-right: 6px;
  animation: blink 0.6s steps(1, end) infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}

/* Use ONE animation (cleanest) */
.typewriter-chaos::before {
  content:"";
  animation: chaos 24s steps(1, end) forwards;
}

/* -------------------------------------------
   CLEAN CHAOTIC TYPING WITH RANDOM PAUSES
   (no glitches, no bad characters)
-------------------------------------------*/
@keyframes chaos {

  /* START */
  0%   { content:""; }

  /* ---- TYPE "Really Annoying Pro" ---- */
  3%   { content:"R"; }
  6%   { content:"Re"; }
  9%   { content:"Rea"; }
  12%  { content:"Real"; }
  16%  { content:"Reall"; }       /* pause */
  19%  { content:"Really"; }
  23%  { content:"Really "; }     /* pause */
  26%  { content:"Really A"; }
  29%  { content:"Really An"; }
  33%  { content:"Really Ann"; }  /* pause */
  36%  { content:"Really Anno"; }
  39%  { content:"Really Annoy"; }
  43%  { content:"Really Annoyi"; } /* pause */
  46%  { content:"Really Annoyin"; }
  49%  { content:"Really Annoying"; }
  53%  { content:"Really Annoying "; }
  56%  { content:"Really Annoying P"; }
  59%  { content:"Really Annoying Pr"; }
  62%  { content:"Really Annoying Pro"; }

  /* ---- DELETE everything ---- */
  64%  { content:"Really Annoying Pr"; }
  66%  { content:"Really Annoying P"; }
  68%  { content:"Really Annoying"; }
  70%  { content:"Really Annoyin"; }
  72%  { content:"Really Annoyi"; }
  74%  { content:"Really Annoy"; }
  76%  { content:"Really Anno"; }
  78%  { content:"Really Ann"; }
  80%  { content:"Really An"; }
  82%  { content:"Really A"; }
  84%  { content:"Really"; }
  86%  { content:"Real"; }
  87.5%{ content:"Rea"; }
  89%  { content:"Re"; }
  90.5%{ content:"R"; }
  92%  { content:"R"; }

  /* ---- TYPE "R. A." ---- */
  93%  { content:"R"; }
  94.5%{ content:"R"; }         /* pause */
  95.5%{ content:"R "; }
  96.5%{ content:"R A"; }
  97.5%{ content:"R A"; }      /* full stop */

  /* ---- SLOW TEDIOUS FINAL: "Productions" ---- */
  98%   { content:"R A P"; }
  98.5% { content:"R A Pr"; }
  99%   { content:"R A Pro"; }
  99.3% { content:"R A Prod"; }
  99.5% { content:"R A Produ"; }
  99.65%{ content:"R A Produc"; }
  99.75%{ content:"R A Product"; }
  99.85%{ content:"R A Producti"; }
  99.93%{ content:"R A Productio"; }
  100% { content:"R A Productions"; }
}

/* ---------------------------------
   FADE IN “COMING SOON”
----------------------------------*/
.coming-soon {
  font-family: 'Bank Gothic Medium';
  font-size: 1.6rem;
  z-index: -1;
  opacity: 0;
  margin-top: 1rem;
  animation: fadeInMsg 3s ease forwards;
  animation-delay: 24s; /* synced to typing duration */
}

.in-your-hand {
  font-family: 'Bank Gothic';
  font-size: 1.2rem;
  z-index: -1;
  opacity: 0;
  margin-top: 1rem;
  animation: fadeInMsg 3s ease forwards;
  animation-delay: 27s;
}

.or-on-screen {
  font-family: 'Bank Gothic';
  font-size: 1.2rem;
  z-index: -1;
  opacity: 0;
  margin-top: 1rem;
  animation: fadeInMsg 3s ease forwards;
  animation-delay: 28s;
}

@keyframes fadeInMsg {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
