import React from 'react'
import Me from '../assets/Me.jpeg'
import styled from 'styled-components'
import { statistiquesElements } from '../data'
import { backgroundColor, color } from '../untils/colors'
function AboutMe() {
  const AbouteMeStyled = styled.section`
    color: #b2c0d0;
    background-color: ${backgroundColor.secondColor};
    @media (min-width: 320px) {
      padding-top: 20%;
      padding-bottom: 20%;
    }
    @media (min-width: 768px) {
      padding-top: 5%;
      padding-bottom: 5%;
    }
    @media (min-width: 1024px) {
      padding-top: 0%;
      padding-bottom: 0%;
    }
  `

  const CoverContainer = styled.div`
    margin-bottom: 10%;
    @media (min-width: 768px) {
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
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
  `
  const Content = styled.div`
    padding: 10% 0 10% 0;
    .paragraph1 {
      margin-top: 3%;
      @media (min-width: 320px) {
        font-size: 1.2em;
      }
      @media (min-width: 768px) {
        font-size: 1.3em;
      }
      @media (min-width: 1024px) {
        font-size: 1.1em;
      }
      @media (min-width: 1440px) {
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
      @media (min-width: 1024px) {
        font-size: 1em;
      }
      @media (min-width: 1440px) {
        font-size: 1.1em;
      }
    }
  `

  const StatistiquesContainer = styled.div`
    margin-top: 10%;
    @media (min-width: 768px) {
      margin-top: 5%;
    }
    @media (min-width: 1024px) {
      margin-top: 10%;
    }
    h2 {
      font-size: 3em;
      font-weight: 600;
      color: ${color.primary};
    }

    p {
      font-weight: 800;
      color: ${color.white};
    }
  `
  return (
    <React.Fragment>
      <AbouteMeStyled id="about-me">
        <Content className="container">
          <div className="row align-items-center">
            <CoverContainer className="col-12 col-lg-4">
              <Image src={Me} alt="Valdès AGBOKONI - cover" />
            </CoverContainer>
            <div className="col-12 col-lg offset-lg-1">
              <Gretting>Bonjour, je m'appelle Valdès !</Gretting>
              <Paragraph className="paragraph1">
                Je suis AGBOKONI Valdès, un développeur web diplômé de l'École
                Internationale de Graphisme du Bénin (EIG-Bénin) et titulaire
                d'une licence 1 en génie logiciel de l'Institut de Formation et
                de Recherche en Informatique (IFRI) de l'UAC. Ma passion est le
                développement web et je possède une expertise solide dans la
                création de sites vitrines, de portfolios, de sites one-page et
                d'applications backend avec NodeJs, Express et MongoDB.
              </Paragraph>

              <Paragraph className="paragraph2">
                J'acquiert en ce moments de nouvelles compétences en création de
                sites e-commerce et d'autres variétés de sites web. Je suis
                déterminé à me perfectionner continuellement dans le domaine du
                développement web afin de pouvoir offrir des solutions efficaces
                et adaptées à vos besoins.
                <br />
                <br />
                Si vous cherchez à créer un site web vitrine ou un portfolio
                pour votre entreprise ou votre projet personnel, ou si vous avez
                besoin d'une application backend pour votre entreprise, je suis
                disponible pour travailler avec vous dès maintenant.
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
