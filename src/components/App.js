import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Skills from './Skills'
import { backgroundColor, color } from '../untils/colors'
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
import { police } from '../untils/police'

const GlobalStyle = createGlobalStyle`
  body{
    font-family:${police.main};
    background-color: ${backgroundColor.mainColor};
    color : ${color.white}
  }
  `

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LoadingProvider>
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
          <FormulaireProvider>
            <MessageProvider>
              <Contact />
            </MessageProvider>
          </FormulaireProvider>
        </main>
        <Footer />
      </LoadingProvider>
    </React.Fragment>
  )
}

export default App
