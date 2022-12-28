import React from 'react'
import { BackLanguages, FrontLanguages } from '../datas'
import Code from '../assets/code.jpg'

function Skills() {
  return (
    <section className="my-5" id="expertise">
      <div className="bg-light">
        <div className="container">
          <div>
            <h3 className="fs-3 fs-md-2">Mon expertise</h3>
            <h4 className="fw-light">Développement web et Design graphique</h4>
          </div>
          <div className="row gy-4 gy-md-0 py-4 align-items-center">
            <div className="col-12 col-md-8">
              <div className=" h-100 py-2 ">
                {FrontLanguages.map(({ id, name, icone, level }) => (
                  <div key={id} className="row ">
                    <div className="col-5 col-sm-4">
                      <div className="d-flex ">
                        <i className={icone}></i>
                        <p className="fw-bold ms-2">{name}</p>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="progress"
                        data-bs-toggle="tooltip"
                        title={level}
                      >
                        <div
                          className="progress-bar fw-bold"
                          style={{ width: level }}
                        >
                          {level}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md align-items-center">
              <img src={Code} alt="Code - cover" className="rounded-1 w-100" />
            </div>
          </div>

          <div className="row gy-4 gy-md-0 py-4  align-items-center">
            <div className="col-12 col-md">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--ah2LrgOW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ew4k338se6hhvfsb5qo.jpg"
                alt="design"
                className="rounded-1 w-100"
              />
            </div>

            <div className="col-12 col-md-8 py-2">
              <div className=" h-100  ">
                {BackLanguages.map(({ id, name, level, icone }) => (
                  <div className="row " key={id}>
                    <div className="col-5 col-sm-3">
                      <div className="d-flex ">
                        <i className={icone}></i>
                        <p className="fw-bold ms-2">{name}</p>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="progress"
                        data-bs-toggle="tooltip"
                        title={level}
                      >
                        <div
                          className="progress-bar fw-bold d-flex justify-content-center"
                          style={{ width: level }}
                        >
                          {level}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
