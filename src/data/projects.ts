export interface Project {
  name: string
  image: string
  video?: string
  video2?: string
  title: string
  subtitle: string
  hoofdzaak: string
  vak: string
  duur: string
  datum: string
  skills: string[]
  opdracht: string
  eindproduct: string
  eindproduct_link?: string
}

export const projects: Project[] = [
  {
    name: 'red_hot_chili_peppers',
    image: './assets/images/rhcp.webp',
    video: '',
    title: 'Red Hot Chili Peppers: Screenreader friendly',
    subtitle: 'FRONT-END',
    hoofdzaak: 'Front-end development, toegankelijkheid en responsiveness',
    vak: 'Front-end development',
    duur: '6 weken',
    datum: '15 december 2023',
    skills: ['HTML', 'CSS', 'Javascript'],
    opdracht: ` Kies een bestaande website en codeer hiervan minimaal 2 pagina's na voor mobiel. Gebruik hiervoor nette HTML, CSS en Javascript. Verbeter de toegankleijkheid van de website. 
    <section> 
   Verdere criteria waren: 
<ul>
<li> Diverse content </li>
<li> Voeg minimaal 1 micro-interactie toe </li>
<li> Toegankelijkheid: screenreader friendly </li>
<li> Professionele vormgeving: huisstijl & custom properties </li>
</ul>
    </section> 
Daarna konden wij kiezen om extra aandacht aan de surface laag te besteden of om de site helemaal responsive te maken. `,

    eindproduct: ` Als website heb ik de website van de Red Hot Chili Peppers (redhotchilipeppers.com) gekozen. Dit is een van mijn favoriete bands en hun website zag er interessant uit, maar het was al snel duidelijk dat er ook veel aan te verbeteren viel.
     
    <section>
    Mijn eindproduct is een volledig responsive uitwerking van de homepagina, tourpagina en een verkooppagina van een merchitem, waarbij er is gedacht aan de toegankelijkheid. 
    
    <ul>
    <li>  De pagina's zijn screenreader-friendly, responsive en reduced motion-friendly. </li>
    <li>  Alle items zijn focussable en bevatten een beschrijvende alt of title. </li>
    <li>  Ook heb ik animaties toegevoegd.  </li>
    <li>  Op de merchpagina is een werkende quantity-selector die is gekoppeld aan een micro-animatie in het winkelwagen icoon. </li>
    <ul>
    <section>`,

    eindproduct_link: 'https://sindydejong.github.io/FED/'
  },
  {
    name: 'magic_8ball',
    image: './assets/images/8ball.webp',
    video: 'https://www.youtube-nocookie.com/embed/p1J3UeUW74w?si=Rty6eYxkpXvkMucj',
    title: 'Magic 8-Ball: interactieve applicatie',
    subtitle: 'JAVASCRIPT',
    hoofdzaak: 'Front-end development, interactie design',
    vak: 'Inleiding programmeren',
    duur: '6 weken',
    datum: '4 juni 2022',
    skills: ['Javascript', 'CSS', 'HTML', 'Adobe Illustrator'],
    opdracht:
      'Een zelfgemaakte interactieve Javascript applicatie ontwikkelt zonder het gebruik van libraries of frameworks. Het bevat verschillende type interactiemethoden en een complexe serie aan input en output tussen de gebruiker en de computer. Tijdens een mondeling moest ik de werking goed kunnen uitleggen.',
    eindproduct:
      'Mijn concept heet de Magic 8-Ball. Dit is een interactieve applicatie waarbij de gebruiker kan kiezen of de bal een random antwoord geeft of een random getal. Als er wordt gekozen voor een getal dan kan de gebruiker het bereik van de cijfers aangeven, zoals een getal tussen de 0 en 99. Het kost mana om de bal te gebruiken. Je kunt de mana opladen door op een maantje te klikken. ',
    eindproduct_link: 'https://sindydejong.github.io/Magicball/'
  },
  {
    name: 'jamties',
    image: './assets/images/jamties.webp',
    video: 'https://www.youtube-nocookie.com/embed/hzGr8m0BfvA?si=ZYdhdQEDsgymztoW"',
    video2: 'https://www.youtube-nocookie.com/embed/A61T92TfQ68?si=-vf6280KcGcaf2O8',
    title: 'JamTies: Muziekaal interactief spel',
    subtitle: 'DESIGN',
    hoofdzaak: 'De wereld verbeteren door mensen met elkaar te verbinden met behulp van muziek',
    vak: 'Passie project',
    duur: '3 weken',
    datum: '30 juni 2022',
    skills: ['Adobe XD', 'Adobe Illustrator', 'New product development', 'Fysiek prorotype maken', 'Interactie design'],
    opdracht: 'Voor dit project moest ik gedurende 3 weken met een groepje aan de slag gaan om een digitaal en/of fysiek product te ontwikkelen die bijdraagt aan een betere wereld. Wij werden op basis van onze gezamenlijke passie, muziek, bij elkaar in de klas gezet en mochten zelf trios vormen.  ',
    eindproduct: 'JamTies is een interactief muzikaal kletsspel dat spelers aanmoedigt om hun interesses en gevoelens te delen. Voor nu is JamTies gericht om op een festivalsetting gespeeld te worden. Denk hierbij aan festivalgangers die tussen optredens door tijd hebben voor leuke activiteiten en spelletjes.',
    eindproduct_link: '',
  }
]
