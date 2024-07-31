<template>

<main> 

  <h1>Over mij</h1>

  <article>
    <p>Mijn naam is <strong> Sindy de Jong</strong>. </p>
    <p>
      Ik ben een multi-media designer met een liefde voor front-end development en interactie
      design. Kom meer over mij te weten!
    </p>

    <p>
      Ik ben een tweedejaars Communicatie & Multimedia Design Bachelor student op de Hogeschool van
      Amsterdam.
    </p>


    <img src="/assets/images/propedeuse.webp">

    <p>  In 2022 heb ik mijn CMD Propedeuse Cum-Laude behaald! </p>

  </article>

<article>
<h2> Design richting </h2>

    <p> Ik hou ervan om continu te leren en te verbeteren. 

Ontwerpen gaat voor mij hand in hand met samenwerken, inventiviteit en natuurlijk plezier. </p>


<p> 

Hi-Fi prototypes creëren in Adobe 
XD met een focus op interactie
design en deze omzetten naar
werkende sites, met HTML/CSS/JS,
vind ik erg leuk om te doen!

</p>

</article>

</main>

</template>

<style lang="scss" scoped>

article {
    margin-top: 1em;
  }

  article > p {
    margin: 1em 0em 1em 0em;
  }

@media screen and (min-width: 1000px) {
  h1 {
    position: absolute;
    display: block;
  }

  img {
    height: 24vw;
  }


  article {
margin: 3em 1em 1em 0em;
  
  
  &:nth-of-type(2) {
    order: 2;
  }
  }
}


</style>
