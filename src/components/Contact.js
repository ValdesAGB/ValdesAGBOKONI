import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/colors'
import Formulaire from './Formulaire'
import Coordonnees from './Coordonnees'
import { Networks } from '../data'

const ContactStyled = styled.section`
  padding-top: 20%;
  padding-bottom: 20%;

  @media (min-width: 768px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  @media (min-width: 1200px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const Title = styled.h2`
  font-weight: 800;
`

const Paragraph = styled.p`
  color: ${color.gris};
`

function Contact() {
  return (
    <React.Fragment>
      <ContactStyled id="contact">
        <div className="container">
          <Title>Contact</Title>
          <Paragraph className="col-md-8">
            Un projet de création de site web.? Discutons-en autour d'un café.
          </Paragraph>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              {Networks.map(({ id, icone, link, cover, name }) => (
                <Coordonnees
                  key={id}
                  id={id}
                  icone={icone}
                  link={link}
                  cover={cover}
                  name={name}
                />
              ))}
            </div>
            <div className="col-md">
              <Formulaire />
            </div>
          </div>
        </div>
      </ContactStyled>
    </React.Fragment>
  )
}

export default Contact
