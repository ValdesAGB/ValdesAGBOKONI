import React from 'react'
import Coffee from '../assets/grab-a-coffee.jpg'

function Contact() {
  function Unavailable() {
    alert(
      "Ce moyen de contact est indisponible pour le moment. Veuillez me contactez via l'un de mes réseaux dans la rubrique << Me découvrir >> plus haut. Merci ☺ "
    )
  }
  return (
    <section className="my-5" id="contact">
      <div className="bg-light">
        <div className="container">
          <h3>Un projet de creatin web.?</h3>
          <h4 className="fs-3 fs-md-2 fw-light">
            Allons en discuter autour d'un café.
          </h4>
          <div className="row gy-4 gy-md-0 py-3 align-items-center">
            <div className="col-12 col-md-6">
              <img src={Coffee} alt="café" className="w-100" />
            </div>
            <div className="col-12 col-md offset-md-1">
              <div className=" py-4 h-100">
                <form onClick={() => Unavailable()} className="fw-light">
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        disabled
                      />
                    </div>

                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Prénoms
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      disabled
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary col-12"
                    disabled
                  >
                    Envoyer
                  </button>
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
