import React from 'react'
import Biography from './components/Biography'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import {
  FormulaireProvider,
  LoadingProvider,
  MessageProvider,
} from './untils/context'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Biography />
      <Skills />
      <Portfolio />
      <LoadingProvider>
        <MessageProvider>
          <FormulaireProvider>
            <Contact />
          </FormulaireProvider>
        </MessageProvider>
      </LoadingProvider>
      <Footer />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
