import React from 'react'
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <h1>How to get started with Gatsby</h1>
            <p>Det her er de trin jeg tog for at starte mit gatsby projekt</p>
            <p>Jeg brugte en template som er noget gatsby tilbyder dig for at få en god start, for at se hvordan mappen bliver sat op med gatsby og for at alt allerede er installeret som jeg kan få brug for.</p>

            <ol>
                <li>Åben en terminal på din pc og installer gatsby globalt ved at skrive: npm install -g gatsby-cli</li>
                <li>Lav en ny mappe til dit gatsby projekt ved at skrive: npx gatsby new gatsby-project https://github.com/gatsbyjs/gatsby-starter-hello-world og find derefter vejen ned i mappen</li>
                <li>Skriv derefter code . og dit projekt skulle gerne starte op i vscode også er du klar til at kode</li>
            </ol>

        </Layout>
    )
}
