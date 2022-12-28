import React from 'react'
import { Networks } from '../datas'

function Footer() {
  let date = new Date()
  return (
    <footer>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md gy-md-0 gy-2">
            <div>
              <a
                href="#valdesagbokoni"
                className="navbar-brand text-uppercase fw-bold"
              >
                <span className="bg-primary bg-gradient p-1 rounded-3 text-light">
                  Valdès
                </span>{' '}
                AGBOKONI
              </a>
            </div>
          </div>
          <div className="col-md gy-md-0 gy-2">
            <div className="d-flex justify-content-md-center ">
              <button
                className="btn text-decoration-none text-black p-md-1 p-0 fw-lighter"
                data-bs-toggle="modal"
                data-bs-target="#MentionsLegales"
              >
                Mentions Légales
              </button>
              <div
                className="modal fade"
                id="MentionsLegales"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Mentions légales
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
                      Ce site est onepage et conçu avec React Js. Merci pour
                      votre visite. 😘.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md text-md-end gy-md-0 gy-2">
            <ul className="list-inline">
              {Networks.map(({ id, name, link, icone, cover }) => (
                <li className="list-inline-item" key={id}>
                  <a
                    href={link}
                    className="text-decoration-none text-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                    title={name}
                  >
                    {cover ? (
                      <img src={cover} alt={name} style={{ width: 30 }} />
                    ) : (
                      <i className={icone}></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center text-black-50">
          ValdesAGBOKONI, Tous droits réservés &copy; {date.getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
