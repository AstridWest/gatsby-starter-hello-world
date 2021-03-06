Reasons to use it!

- Generating statically generated HTML and then giving client-side React to do whatever it needs to do.
- Providing building blocks instead of making a new component for each project.
- Gør det at lave en side sjovere ved at gøre det enkelt og let med de inbyggede features
- 

Step by step guide to Gatsby

*** Opstart ***

 - Åben en terminal på din pc og installer gatsby globalt ved at skrive: npm install -g gatsby-cli

 - Lav en ny mappe til dit gatsby projekt ved at skrive: npx gatsby new gatsby-project https://github.com/gatsbyjs/gatsby-starter-hello-world og find derefter vejen ned i mappen

 - Skriv derefter code . og dit projekt skulle gerne starte op i vscode også er du klar til at kode.

 - For at kunne se hvad du laver i en browser, start en terminal op og skriv: gatsby develop det skal skrives hver gang du starter din localhost, når du bruger gatsby vil din localhost ligge på localhost8000

*** Sider og Routes ***

 - For at lave en ny side, lav en ny fil i pages mappen og kald den f.eks about. Det kan være en god ide at installere en exstension, ved navn ES7 React/Redux/GraphQL/React-Native snippets. Med det installeret skal man bare skrive rfc også skulle det gerne se sådan ud: 
import React from 'react'

export default function about() {
    return (
        <div>
            
        </div>
    )
}
også er din nye side klar.

 - Tilføj en h1 med noget text så du kan se hvilken side du er på ved næste trin.

 - Det gode ved gatsby er at man ikke skal igang med en masse router, det kan den selv finde ruterne, så hvis man oppe ved localhost8000 skriver localhost8000/about så finder den helt selv hen til siden uden ydeligere kode man skal sidde og skrive.

 - Når nu gatsby er lavet med egen router på den måde, så vil din index altid være din "home", eller din baseroute. Men hvis man nu vil lave noget som ser sådan her ud localhost8000/projects/test vil du kunne lave en mappe i din pages mappe der hedder projects, den vil være din subroute og sådan laver man subdirectories. Hvis man laver en index inde i den mappe vil det så være projects "home" side.

 - I tilfældet at nogen på vores hjemmeside prøver at finde noget der ikke eksistere kommer en 404 op, den side kan vi lave til vores egen på følgene måde. Inde i pages mappen, lav en 404.js og skriv rfc, enter og voila du er klar til at designe din egen ups side med links tilbage til siden.


 *** Lad os lave en navbar så vi let kan komme rundt på siden ***

 - Som man kender det fra react skal der nu laves en components mappe, den skal ligge i src mappen og det er der man f.eks ligger sin navbar.

 - så nede i den nye componentsmappe, lav en ny fil der hedder Navbar.js eller Navigation.js efter hvad man foretrækker.

 - Det kan selv sættes op men her er min kode hvis man er usikker på hvordan det kan se ud:
import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Web Warrior</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">How to get started with Gatsby</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

 - Her har jeg lavet min nav og i den her opgave en div med links, Link bliver importeret fra gatsby og brugt for at alt linking bliver udført i browseren og vi ikke sender nye `request` efter nye sider.

 - Så tager vi vores navbar og putter udenom alle de siger der skal bruge den, vores home, about og projects sider, det kan gøres super enkelt med et Layout components.

 - Så i components mappen laves en Layoutfil som skal komme til at se sådan her ud:
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { /* content for each page */}
                { children }
            </div>
            <footer>
                <p>Copyright 2021 Web Warrior</p>
            </footer>
        </div>
    )
}  
Bagefter skal Layout wrappes rundt om hver pagesfil som sådan her:

import React from 'react';
import Layout from '../../components/Layout';

export default function Projects() {
    return (
        <Layout>
        <div>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I´ve created</h3>
        </div>
        </Layout>
    )
}
også voila har man en nav og footer der wrapper hver side, så let takket være gatsby.



*** Tid til styling med css *** 

 - Start med at lave en mappe til dine css filer med stylingen, mappen skal ligge i src mappen.

 - Lav en ny fil der hedder global.css det vil være alt din globale styling som font og * styling:

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
}

html, body {
    min-height: 100%;
}

body {
    background: radial-gradient(at top left, rgba(255,182,193) 0%, rgba(205,92,92) 100%);
    background-repeat: no-repeat;
    font-family: 'Roboto', 'Courier New', Courier, monospace;
} 

 - Derefter importer din css i Loayout filen øverst.

 - Hvis du vil lave en css fil til specifik pagesfil: filen skal laves nede i din styles mappe, min hedder home.module.css det er vigtigt den hedder .module.css for at gatsby ved hvad det er for en fil.

 - Derefter kan du putte hvad du vil i filen, når den skal tilføjes til siden skal filen importeres i toppen og se sådan her ud: import * as styles from "../styles/home.module.css";

 - Derefter skal din styles på den der skal styles, min side ser sådan her ud: 
export default function Home() {

  return (
    <>
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Denmark.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
    </>
  )
}

og min css fil ser sådan her ud: 

.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.header h2 {
    font-size: 4em;
}

.header h3 {
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background: #D42990;
    padding:10px 16px;
    margin-top: 20px;
    font-weight: 500;
}


og så, så let som det kan være har vi flere sider vi kan navigere imellem og nu kan de styles.