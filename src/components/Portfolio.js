import React from 'react'
import { Projets } from '../datas'

function Portfolio() {
  return (
    <section className="my-5" id="portfolio">
      <div className="container">
        <h3>Mon portfolio</h3>
        <h4 className="fs-3 fs-md-2 fw-light">Projets perso et pro</h4>
        <div className="row gy-4 gy-md-0 py-1 ">
          {Projets.map(
            ({
              id,
              title,
              description,
              mainCover,
              cover1,
              cover2,
              cover3,
              link,
            }) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                <div className="py-4">
                  <div className="card">
                    <img
                      src={mainCover}
                      className="card-img-top"
                      alt={`${id} - cover`}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Sitka Subheading',
                        }}
                      >
                        {title}
                      </h5>
                      <p className="card-text fw-light">{description}</p>
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#${id}`}
                        className="btn btn-primary fw-light"
                      >
                        En savoir plus
                      </button>
                      <div
                        className="offcanvas offcanvas-bottom"
                        style={{ height: '75%' }}
                        tabIndex="-1"
                        id={id}
                        aria-labelledby="offcanvasBottomLabel"
                      >
                        <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id={id}>
                            {link === '' ? (
                              "Ce site n'est pas encore disponible en ligne"
                            ) : (
                              <a
                                href={link}
                                title={`Lien pour accéder à ${id}`}
                              >
                                {id}
                              </a>
                            )}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body small">
                          <div
                            id={`${id}-cover`}
                            className="carousel slide h-100"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner h-100">
                              {cover1 ? (
                                <div
                                  data-bs-interval="3000"
                                  className="carousel-item h-100 active"
                                >
                                  <img
                                    src={cover1}
                                    className="d-block w-100"
                                    alt={`${id} - cover`}
                                  />
                                </div>
                              ) : null}
                              {cover2 ? (
                                <div
                                  data-bs-interval="3000"
                                  className="carousel-item h-100"
                                >
                                  <img
                                    src={cover2}
                                    className="d-block w-100"
                                    alt={`${id} - cover`}
                                  />
                                </div>
                              ) : null}

                              {cover3 ? (
                                <div
                                  data-bs-interval="3000"
                                  className="carousel-item h-100"
                                >
                                  <img
                                    src={cover3}
                                    className="d-block w-100"
                                    alt={`${id} - cover`}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target={`#${id}-cover`}
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target={`#${id}-cover`}
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
