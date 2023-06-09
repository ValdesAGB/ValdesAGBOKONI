import React from 'react'
import Me from '../assets/Me (2).jpeg'
import { Illustrator, Networks, Photoshop } from '../datas'

function Biography() {
  return (
    <section className="my-5" id="valdesagbokoni">
      <div className="container">
        <div className="row gy-4 gy-md-0 align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="fw-bold">
              Je suis Valdès AGBOKONI Développeur web et Designer graphique.
            </h1>
            <h2 className="fw-light">Bienvenue dans mon univers créatif</h2>

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
                      Je suis AGBOKONI Valdès, un développeur web diplômé de
                      l'École Internationale de Graphisme du Bénin (EIG-Bénin)
                      et titulaire d'une licence 1 en génie logiciel de
                      l'Institut de Formation et de Recherche en Informatique
                      (IFRI) de l'UAC. Ma passion est le développement web et je
                      possède une expertise solide dans la création de sites
                      vitrines, de portfolios, de sites one-page et
                      d'applications backend avec NodeJs, Express et MongoDB.
                    </p>
                    <p>
                      Je suis également en train d'acquérir des compétences en
                      création de sites e-commerce et d'autres variétés de sites
                      web. Je suis déterminé à me perfectionner continuellement
                      dans le domaine du développement web afin de pouvoir
                      offrir des solutions efficaces et adaptées à vos besoins.
                    </p>
                    <p>
                      Si vous cherchez à créer un site web vitrine ou un
                      portfolio pour votre entreprise ou votre projet personnel,
                      ou si vous avez besoin d'une application backend pour
                      votre entreprise, je suis disponible pour travailler avec
                      vous dès maintenant.
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
                              <div className="col-sm-2 col-2">
                                {cover ? (
                                  <img
                                    src={cover}
                                    alt={name}
                                    className="w-100 w-md-50"
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