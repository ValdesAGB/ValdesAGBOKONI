import React, { useState } from 'react'
import { Projets } from '../datas'

function Portfolio() {
  const [all, setAll] = useState(false)
  const nbrProjets = all ? Projets.length : 4
  return (
    <section className="my-5" id="portfolio">
      <div className="container">
        <h3>Mon portfolio</h3>
        <h4 className="fs-3 fs-md-2 fw-light">Projets perso et pro</h4>
        <div className="row gy-4 gy-md-0 py-1 ">
          {Projets.slice(0, nbrProjets).map(
            ({ id, title, description, mainCover, link }) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                <div className="py-4">
                  <div className="card" style={{ height: '300px' }}>
                    <img
                      src={mainCover}
                      className="card-img-top"
                      alt={`${id} - cover`}
                    />
                    <div className="card-body h-75  overflow-auto">
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Sitka Subheading',
                        }}
                      >
                        {title}
                      </h5>
                      <p className="card-text fw-light">{description}</p>
                      <button className="btn btn-primary fw-light">
                        <a
                          href={link}
                          target="_blank"
                          className="text-white text-decoration-none"
                        >
                          Découvrir le site
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-end">
          {all ? (
            <button className="btn btn-primary" onClick={() => setAll(false)}>
              Voir moins
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => setAll(true)}>
              Voir plus
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
