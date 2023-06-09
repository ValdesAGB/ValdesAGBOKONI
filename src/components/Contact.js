import React, { useContext, useEffect } from 'react'
import Coffee from '../assets/grab-a-coffee.jpg'
import Loader from '../untils/loader'
import {
  FormulaireContext,
  LoadingContext,
  MessageContext,
} from '../untils/context'
import { formulaireElements } from '../datas'

function Contact() {
  const close = () => {
    setLastName(null)
    setFirstName(null)
    setMail(null)
    setMessage(null)
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
  }

  useEffect(() => {
    close()
  }, [])

  const { setLastName, setFirstName, setMail, setMessage, formulaireContent } =
    useContext(FormulaireContext)

  const { isDataLoading, toggleIsDataLoading } = useContext(LoadingContext)

  const {
    message,
    errorMes,
    codeErr,
    toggleMessage,
    toggleErrorMes,
    toggleCodeErr,
  } = useContext(MessageContext)

  const fetchElements = {
    url: `https://portfolio-api.herokuapp.com/api/formulaire`,
    options: {
      method: 'POST',
      body: JSON.stringify(formulaireContent),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  }

  const feedback = (e) => {
    e.preventDefault()
    const message = `Un problème est survenu. Veuillez utiliser les autres moyens de contact situé dans la biographie ou le pied de page pour me contacter`
    toggleIsDataLoading(true)
    setTimeout(() => {
      toggleMessage(message)
      toggleIsDataLoading(false)
    }, 3000)
  }

  const sendMessage = (e) => {
    e.preventDefault()
    toggleMessage(null)
    toggleErrorMes(null)
    toggleCodeErr(null)
    toggleIsDataLoading(true)
    fetch(fetchElements.url, fetchElements.options)
      .then((promise) => {
        if (!promise.ok) {
          throw promise
        } else {
          return promise.json()
        }
      })
      .then((message) => {
        toggleMessage(message)
        toggleIsDataLoading(false)
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          toggleErrorMes(errorMessage.error)
          toggleCodeErr(error.status)
          toggleIsDataLoading(false)
        })
      })
  }

  const Message = () => {
    return (
      <div className="row justify-content-center mt-5">
        <span className="col-12 col-md row  rounded align-items-center">
          <hr />
          <div className=" text-center">
            {message ? <h5 className="">{message.message}</h5> : null}
            {errorMes ? <h4 className="">{errorMes}</h4> : null}
            <button className="btn btn-primary" onClick={(e) => close()}>
              OK
            </button>
          </div>
        </span>
      </div>
    )
  }

  const set = (id, event) => {
    switch (id) {
      case 'lastName':
        setLastName(event.target.value)
        break
      case 'firstName':
        setFirstName(event.target.value)
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
    <section className="my-5" id="contact">
      <div className="bg-light">
        <div className="container">
          <h3>Un projet de création de site web.?</h3>
          <h4 className="fs-3 fs-md-2 fw-light">
            Discutons-en autour d'un café.
          </h4>
          <div className="row gy-4 gy-md-0 py-3 align-items-center">
            <div className="col-12 col-md-6">
              <img src={Coffee} alt="café" className="w-100" />
            </div>
            <div className="col-12 col-md offset-md-1">
              <div className=" py-4 h-100">
                <form className="fw-light">
                  {isDataLoading ? (
                    <Loader />
                  ) : message || errorMes ? (
                    Message()
                  ) : (
                    <>
                      <div className="row mb-3">
                        {formulaireElements.map(
                          ({ id, title, inputType, divClass }) => (
                            <div className={divClass} key={id}>
                              <label htmlFor={id} className="form-label">
                                {title}
                              </label>
                              {inputType ? (
                                <input
                                  type={inputType}
                                  className="form-control"
                                  id={id}
                                  aria-describedby="emailHelp"
                                  onChange={(e) => set(id, e)}
                                />
                              ) : (
                                <textarea
                                  className="form-control"
                                  rows={3}
                                  onChange={(e) => set(id, e)}
                                ></textarea>
                              )}
                            </div>
                          )
                        )}
                      </div>
                      <button
                        type="submit"
                        className={`btn btn-primary col-12 ${
                          Object.values(formulaireContent).every(
                            (value) => value !== null
                          )
                            ? null
                            : 'disabled'
                        }`}
                        onClick={(e) => sendMessage(e)}
                      >
                        Envoyer
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
