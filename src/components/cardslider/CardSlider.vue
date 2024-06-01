<template>
    <div class="container mb-12 w-full mt-16">
      <div class="moving-element flex justify-between">
        <li class="flex justify-between group gap-[200px] list-none bg-[#0d0d12]">
            <ul class="w-[260px]">
        <Card 
          href="https://instagram.com/ethkopa"
          title="Daniel Kopa"
          role="Ceo Of Aperium"
          body="Working years on it!"
          image="https://cdn.discordapp.com/avatars/886919873693888523/dd42182192cc6678ad6a5f4495a03920.webp?size=128"
        /></ul>
            <ul class="w-[260px]">
        <Card 
          href="https://github.com/Butwm"
          title="Butwm"
          role="Marketing Developer"
          body="Devoloper For Aperium"
          image="https://cdn.discordapp.com/avatars/795996972758204426/1fedd8ab05818df52c73fc621bb8f816?size=1024"
        /> </ul>
            <ul class="w-[260px]">
        <Card 
          href="#"
          title="Michal Kubiena"
          role="CEO/CMO"
          body="So excited for this!"
          image=""
        /></ul>
        <ul class="w-[260px]">
        <Card 
          href="#"
          title="LOOKING FOR SFC EXPERT"
          role=""
          body=""
          image=""
        />
        </ul>     
        </li>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '../cardslider/Card.vue';
  
  export default {
    components: {
      Card,
    },
  };
  </script>
  
  <style>
  .container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .moving-element {
    position: absolute;
    top: 0; 
    left: 0; 
    width: max-content;
    height: 50px;
    background-color: rgb(126, 126, 231);
    animation: moveRightToLeft 25s linear infinite;
    display: flex;
    animation-delay: -0s; /* Delay the start of the animation to allow time for initial scrolling */
  }
  
  @keyframes moveRightToLeft {
    0% {
      transform: translateX(100%); 
    }
    100% {
      transform: translateX(-100%); 
    }
  }
  </style>
  