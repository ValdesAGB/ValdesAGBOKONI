import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { backgroundColor, color } from '../untils/colors'
import Experience from './Experience'
import {
  FormulaireProvider,
  LevelProvider,
  LoadingProvider,
  MessageProvider,
  PortfolioButtonProvider,
} from '../untils/context'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    background-color: ${backgroundColor.mainColor};
color : ${color.white}
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main className="row">
        <Home />
        <AboutMe />
        <LevelProvider>
          <Skills />
        </LevelProvider>
        <PortfolioButtonProvider>
          <Portfolio />
        </PortfolioButtonProvider>
        <LoadingProvider>
          <FormulaireProvider>
            <MessageProvider>
              <Contact />
            </MessageProvider>
          </FormulaireProvider>
        </LoadingProvider>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App

/*    background-color : #252734;*/
