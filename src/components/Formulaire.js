import React, { useContext, useEffect, useState } from 'react'
import { formulaireElements } from '../data'
import {
  FormulaireContext,
  LoadingContext,
  MessageContext,
} from '../untils/context'
import Loader from '../untils/Loader'
import styled from 'styled-components'
import { backgroundColor } from '../untils/colors'

const FormulaireStyled = styled.form`
  font-family: 'Open Sans', sans-serif;
`

const Input = styled.input`
  background-color: ${backgroundColor.secondColor};
  border: none;
  &:focus {
    background-color: ${backgroundColor.secondColor};
  }
  &::placeholder {
    color: white;
    font-weight: 300;
  }
  &.redText {
    color: white;
  }
`

const Textarea = styled.textarea`
  background-color: ${backgroundColor.secondColor};
  border: none;
  &:focus {
    background-color: ${backgroundColor.secondColor};
  }
  &::placeholder {
    color: white;
    font-weight: 300;
  }
  &.redText {
    color: white;
  }
`

function Formulaire() {
  const { isDataLoading, toggleIsDataLoading } = useContext(LoadingContext)

  const { setName, setSubject, setMail, setMessage, formulaireContent } =
    useContext(FormulaireContext)

  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const close = () => {
    setName(null)
    setSubject(null)
    setMail(null)
    setMessage(null)
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }

  useEffect(() => {
    close()
  }, [])

  const feedback = (e) => {
    e.preventDefault()
    const message = `Un problème est survenu. Veuillez utiliser les autres moyens de contact mise à votre disposition.`
    toggleIsDataLoading(true)
    setTimeout(() => {
      toggleMessage(message)
      toggleIsDataLoading(false)
    }, 2000)
  }

  const FeedbackStyled = styled.h5`
    font-size: 1em;
  `

  const Message = () => {
    return (
      <div className="row justify-content-center mt-5">
        <span className="col-12 col-md row   align-items-center">
          <hr />
          <div className="text-center">
            <FeedbackStyled>{message ? message : errorMes}</FeedbackStyled>

            <button className="btn btn-primary mt-4" onClick={(e) => close()}>
              OK
            </button>
          </div>
        </span>
      </div>
    )
  }

  const set = (id, event) => {
    switch (id) {
      case 'name':
        setName(event.target.value)
        break
      case 'subject':
        setSubject(event.target.value)
        break
      case 'mail':
        setMail(event.target.value)
        break
      default:
        setMessage(event.target.value)
        break
    }
  }
  return (
    <React.Fragment>
      <FormulaireStyled className="fw-light">
        {isDataLoading ? (
          <Loader />
        ) : message || errorMes ? (
          <Message />
        ) : (
          <>
            <div className="row mb-3">
              {formulaireElements.map(({ id, title, inputType, divClass }) => (
                <div className={divClass} key={id}>
                  {inputType ? (
                    <Input
                      required
                      type={inputType}
                      className={`form-control ${
                        formulaireContent[id] !== '' ? 'redText' : ''
                      }`}
                      id={id}
                      aria-describedby="emailHelp"
                      placeholder={title}
                      onChange={(e) => set(id, e)}
                    />
                  ) : (
                    <Textarea
                      className={`form-control ${
                        formulaireContent[id] !== '' ? 'redText' : ''
                      }`}
                      rows={5}
                      onChange={(e) => set(id, e)}
                      placeholder={title}
                      required
                    ></Textarea>
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`btn btn-primary col-md-3 ${
                Object.values(formulaireContent).every(
                  (value) => value !== null
                )
                  ? null
                  : 'disabled'
              }`}
              onClick={(e) => feedback(e)}
            >
              Envoyer
            </button>
          </>
        )}
      </FormulaireStyled>
    </React.Fragment>
  )
}

export default Formulaire
