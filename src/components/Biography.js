import React from 'react'
import Me from '../assets/Me.jpeg'
import { Illustrator, Networks, Photoshop } from '../datas'

function Biography() {
  return (
    <section className="my-5" id="valdesagbokoni">
      <div className="container">
        <div className="row gy-4 gy-md-0 align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="fw-bold">
              Je suis Valdès AGBOKONI Développeur et Designeur Web
            </h1>
            <h2 className="fw-lighter">Bienvenue dans mon univers créatif</h2>

            <button
              type="button"
              className="btn btn-primary my-2 my-md-5 text-uppercase fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Me découvrir
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-uppercase fw-light "
                      id="exampleModalLabel"
                    >
                      à propos de Valdès AGBOKONI
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="modal-body"
                    style={{
                      fontFamily: 'Sitka Subheading',
                    }}
                  >
                    <p>Bienvenue à vous .</p>
                    <p>
                      Moi c'est AGBOKONI Valdès, diplômé de l'Ecole
                      Internationale de Graphisme du Bénin ( EIG-Bénin ) en
                      développement web et détenteur d'une licence 1 en génie
                      logiciel à l'Institut de Formation et de Recherche en
                      Informatique ( IFRI ) de l'UAC.
                    </p>
                    <p>
                      Aussi, je suis détenteur d'une attestation de formation en
                      graphisme ( une formation d'initiation aux outils
                      Photoshop et Illustrator ) de l'EIG-Bénin. Je suis
                      développeur web et j'ai aussi des compétences en retouche
                      photo / images et en conception de logo.
                    </p>
                    En ce qui concerne le Graphisme, je n'en suis pas un expert
                    mais j'ai suffisamment de compétences pour vous offrir les
                    services suivant :
                    <div>
                      *Pour ce qui est de Photoshop :
                      <ul>
                        {Photoshop.map((element, index) => (
                          <li key={`${element} - ${index}`}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      *Pour ce qui est d'Illustrator :
                      <ul>
                        {Illustrator.map((element, index) => (
                          <li key={`${element} - ${index}`}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Je continue à m'améliorer dans ce domaine de jours en
                      jours donc je pourrai vous offrir des prestations de
                      qualités auxquelles vous ne vous attendez pas.
                    </p>
                    ---------------------------------------------------------------------
                    <div>
                      Mes Réseaux :
                      <ul>
                        {Networks.map(({ id, name, link, cover, icone }) => (
                          <li key={id}>
                            <a
                              href={link}
                              className="row text-black text-decoration-none"
                            >
                              <div className="col-sm-2 col-3">
                                {cover ? (
                                  <img
                                    src={cover}
                                    alt={name}
                                    className="w-50"
                                  />
                                ) : (
                                  <i className={icone}></i>
                                )}
                              </div>
                              <div className="col-sm-9  col-6">{name}</div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    ---------------------------------------------------------------------
                    <div>
                      Pour toutes autres questions ou projets, je reste
                      disponible, via mes réseaux, pour vous répondre.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={Me} alt="Valdès AGBOKONI - cover" className="w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
