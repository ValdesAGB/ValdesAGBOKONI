import React from 'react'
import Me from '../assets/Me.jpeg'
import styled from 'styled-components'
import { statistiquesElements } from '../data'
import { backgroundColor, color } from '../untils/colors'
import { police } from '../untils/police'

const AbouteMeStyled = styled.section`
  color: ${color.aboutMeColor};
  background-color: ${backgroundColor.secondColor};

  padding: 80px 0;
`

const Content = styled.div`
  .paragraph1 {
    @media (min-width: 320px) {
      font-size: 1.2em;
    }
    @media (min-width: 768px) {
      font-size: 1.3em;
    }
    @media (min-width: 992px) {
      font-size: 1.1em;
    }
    @media (min-width: 1400px) {
      font-size: 1.3em;
    }
  }
  .paragraph2 {
    @media (min-width: 320px) {
      font-size: 1em;
    }
    @media (min-width: 768px) {
      font-size: 1.1em;
    }
    @media (min-width: 992px) {
      font-size: 1em;
    }
    @media (min-width: 1400px) {
      font-size: 1.1em;
    }
  }
`

const CoverContainer = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 10%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 5%;
  }
`
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`

const Gretting = styled.h2`
  color: white;
  font-weight: 700;
  line-height: 1.35;
  @media (min-width: 320px) {
    margin-bottom: 6%;
  }
  @media (min-width: 768px) {
    margin-bottom: 3%;
  }
`

const Paragraph = styled.p`
  font-family: ${police.second};
  text-align: justify;
`

const StatistiquesContainer = styled.div`
  margin-top: 10%;
  @media (min-width: 768px) {
    margin-top: 5%;
  }

  h2 {
    font-size: 3em;
    font-weight: 600;
    color: ${color.primaryVariante};
  }

  p {
    font-weight: 800;
    color: ${color.white};
  }
`

function AboutMe() {
  return (
    <React.Fragment>
      <AbouteMeStyled id="about">
        <Content className="container">
          <div className="row justify-content-center">
            <CoverContainer className="col-12 col-sm-10 col-lg-8 col-xl-4">
              <Image src={Me} alt="Valdès AGBOKONI - cover" />
            </CoverContainer>
            <div className="col-12 col-xl offset-xl-1">
              <Gretting>Bonjour, je m'appelle Valdès ✨!</Gretting>
              <Paragraph className="paragraph1">
                Je suis <strong>AGBOKONI Valdès</strong>, développeur web
                diplômé de l'
                <strong>
                  École Internationale de Graphisme du Bénin (EIG-Bénin)
                </strong>{' '}
                et titulaire d'une <strong>licence 1 en génie logiciel</strong>{' '}
                de l'
                <strong>
                  Institut de Formation et de Recherche en Informatique (IFRI)
                </strong>{' '}
                de l'UAC. Ma passion est le développement web et je possède une
                expertise solide dans la{' '}
                <strong>création de sites vitrines</strong>, de
                <strong> portfolios</strong>, de <strong>sites one-page</strong>{' '}
                et d'<strong>applications backend/API Restful</strong> avec
                <strong> NodeJs</strong>, <strong>Express</strong> et{' '}
                <strong>MongoDB</strong>.
              </Paragraph>

              <Paragraph className="paragraph2">
                J'acquiert en ce moments de nouvelles compétences en{' '}
                <strong>création de sites e-commerce</strong> et d'autres
                variétés de sites web. Je suis déterminé à me perfectionner
                continuellement dans le domaine du développement web afin de
                pouvoir offrir des solutions efficaces et adaptées à vos
                besoins.
                <br />
                <br />
                Si vous cherchez à créer un <strong>site web vitrine</strong> ou
                un <strong>portfolio</strong> pour votre entreprise ou votre
                projet personnel, ou si vous avez besoin d'une{' '}
                <strong>application backend</strong> pour votre entreprise, je
                suis disponible pour travailler avec vous dès maintenant.
              </Paragraph>
              <StatistiquesContainer className="row">
                {statistiquesElements.map(({ id, value, text }) => (
                  <div key={id} className="col-6 col-md">
                    <h2>{value}</h2>
                    <p>{text}</p>
                  </div>
                ))}
              </StatistiquesContainer>
            </div>
          </div>
        </Content>
      </AbouteMeStyled>
    </React.Fragment>
  )
}

export default AboutMe
