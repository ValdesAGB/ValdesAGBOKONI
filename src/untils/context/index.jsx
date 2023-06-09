import { createContext, useState } from 'react'

export const FormulaireContext = createContext()
export const FormulaireProvider = ({ children }) => {
  const [lastName, setLastName] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [mail, setMail] = useState(null)
  const [message, setMessage] = useState(null)
  const formulaireContent = {
    lastName,
    firstName,
    mail,
    message,
  }
  return (
    <FormulaireContext.Provider
      value={{
        setLastName,
        setFirstName,
        setMail,
        setMessage,
        formulaireContent,
      }}
    >
      {children}
    </FormulaireContext.Provider>
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
