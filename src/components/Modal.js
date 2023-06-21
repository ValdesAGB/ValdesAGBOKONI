import React from 'react'
import styled from 'styled-components'

function Modal({ id, description, title }) {
  const ModalContent = styled.div`
    font-family: 'Open Sans', sans-serif;
  `
  return (
    <React.Fragment>
      <ModalContent
        className="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-dark">{description}</div>
          </div>
        </div>
      </ModalContent>
    </React.Fragment>
  )
}

export default Modal
