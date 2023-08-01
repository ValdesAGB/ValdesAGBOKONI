import { createContext, useState } from 'react'

export const PortfolioButtonContext = createContext()
export const PortfolioButtonProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState('All')
  const [loading, setLoadind] = useState(false)
  const handleFilter = (type) => {
    setLoadind(true)
    setTimeout(() => {
      setActiveButton(type)
      setLoadind(false)
    }, 3000)
  }
  return (
    <PortfolioButtonContext.Provider
      value={{ activeButton, handleFilter, loading }}
    >
      {children}
    </PortfolioButtonContext.Provider>
  )
}

export const LevelContext = createContext()
export const LevelProvider = ({ children }) => {
  const [isFilled, setIsFilled] = useState(false)

  return (
    <LevelContext.Provider value={{ isFilled, setIsFilled }}>
      {children}
    </LevelContext.Provider>
  )
}

export const FormulaireContext = createContext()
export const FormulaireProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const formulaireContent = {
    name,
    subject,
    mail,
    message,
  }
  return (
    <FormulaireContext.Provider
      value={{
        setName,
        setSubject,
        setMail,
        setMessage,
        formulaireContent,
      }}
    >
      {children}
    </FormulaireContext.Provider>
  )
}

export const MessageContext = createContext()
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null)
  const [errorMes, setErrorMes] = useState(null)
  const [codeErr, setCodeErr] = useState(null)

  const toggleMessage = (mes) => {
    setMessage(mes)
  }

  const toggleErrorMes = (err) => {
    setErrorMes(err)
  }

  const toggleCodeErr = (err) => {
    setCodeErr(err)
  }

  return (
    <MessageContext.Provider
      value={{
        message,
        errorMes,
        codeErr,
        toggleMessage,
        toggleErrorMes,
        toggleCodeErr,
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

export const LoadingContext = createContext()
export const LoadingProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const toggleIsDataLoading = (load) => {
    setIsDataLoading(load)
  }

  return (
    <LoadingContext.Provider
      value={{
        isDataLoading,
        toggleIsDataLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
