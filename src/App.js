import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colours } from './config/globalStyles';
import Header from './components/Header';
import Splash from './components/Splash';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ResponsiveWrapper from './components/ResponsiveWrapper';

function App() {


  const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

      :root{
          font-size: 6.25%;  /** Make rem value same as px equivalent. **/
      }

      * {
          margin:0;
          padding: 0;
          font-family: Raleway;
          color: ${colours.dark};
          list-style: none;
          box-sizing: border-box;
          text-decoration: none;
          font-size: 16rem;
          font-variant-numeric: lining-nums; 
          --responsive: calc((var(--min-size) * 1rem) + calc(var(--max-size) - var(--min-size)) * ((100vw - 320px) / (1080 - 320)));
      }


      a { color: inherit }

      a:hover { color: ${colours.gray} }
      a:focus { color: ${colours.accent} }


      h1 {
        --max-size: 22;
        --min-size: 16;
        font-size: var(--responsive);
      }

      h2 {
        --max-size: 48;
        --min-size: 40;
        font-size: var(--responsive);
      }

      h3, li {
        --max-size: 24;
        --min-size: 18;
        font-size: var(--responsive);
      }

      h4 {
        --max-size: 20
        --min-size: 14;
        font-size: var(--responsive);
      }
      p {
        --max-size: 16;
        --min-size: 12;
        font-size: var(--responsive);
        line-height:  1.6em;
      }

      blockquote p {
        text-indent: -0.3em;
      }
     
      @media ( min-width: 1080px ) {
          h1{ font-size: 22rem };
          h2{ font-size: 48rem };
          h3{ font-size: 24rem };
          h4{ font-size: 20rem };
          p { font-size: 16rem };
      }
      

      body{
          width: 100%;
          height: 100%;
          background-color: ${colours.light};
      }
    `
      
    return (
      <>
          <GlobalStyle/>
          <Header/>
          <ResponsiveWrapper>
              <Splash/>
              <Services/>
              <Reviews/>
              <Contacts/>
          </ResponsiveWrapper>  
          <Footer/>
      </>
    )
}

export default App;

// h2{
//   font-size: 26rem;
//   line-height: 1.1;
// }
// h3{
//   font-size: 20rem;
//   line-height: 1.35;
// }

// p{
//   font-size: 16rem;
//   line-height: 1.58;
// }

// --responsive: calc(${fontSizes.h1.min}rem + ((${fontSizes.h1.max} - ${fontSizes.h1.min}) / (${screen.max} - ${screen.min})) * (100vw - ${screen.min}rem))
// * {
//   /* Calculation */
//   --diff: calc(var(--max-size) - var(--min-size));
//   --responsive: calc((var(--min-size) * 1px) + var(--diff) * ((100vw - 420px) / (1200 - 420))); /* Ranges from 421px to 1199px */
// }

// h1 {
//   --max-size: 50;
//   --min-size: 25;
//   font-size: var(--responsive);
// }

// h2 {
//   --max-size: 40;
//   --min-size: 20;
//   font-size: var(--responsive);
// }