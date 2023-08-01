import React from 'react'
import styled from 'styled-components'

import Typewriter from 'typewriter-effect'
import { typerwriterElements } from '../data'
import { backgroundColor, color } from '../untils/colors'
import { police } from '../untils/police'

const HomeStyled = styled.section`
  color: ${color.white};

  @media (min-width: 320px) {
    padding-top: 45%;
    padding-bottom: 20%;
  }

  @media (min-width: 576px) {
    padding-top: 25%;
  }

  @media (min-width: 992px) {
    padding-bottom: 25%;
  }

  @media (min-width: 1360px) {
    padding-top: 14%;
    padding-bottom: 14%;
  }

  @media (min-width: 1400px) {
    padding-top: 28%;
    padding-bottom: 28%;
  }
`

const Content = styled.div`
  text-align: center;
`

const Welcome = styled.h6`
  font-weight: 600;
`

const Title = styled.h2`
  font-family: ${police.main};
  margin: 10% 0;
  .span {
    font-size: 0.8em;
  }
  @media (min-width: 375px) {
    margin: 5% 0;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3% 0 3% 0;
  }
`

const TypewriterWrapper = styled.span`
  margin-left: 10px;
  font-weight: bold;
`

const Paragraph = styled.p`
  font-family: ${police.second};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`

const Button = styled.div`
  font-family: ${police.second};
  margin-top: 10%;
  @media (min-width: 768px) {
    margin-top: 5%;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .about {
    background-color: ${color.primary};
    color: ${color.white};
    font-weight: 600;

    @media (min-width: 320px) {
      padding: 3% 5% 4% 5%;
      margin-bottom: 5%;
    }
    @media (min-width: 576px) {
      padding: 2% 4% 3% 4%;
      margin-bottom: 3%;
    }
    @media (min-width: 768px) {
      margin-right: 5%;
      padding: 2%;
      margin-bottom: 0%;
    }

    &:active {
      border: none;
      background-color: ${color.primary};
    }
  }
  .portfolio {
    color: ${color.white};
    background: ${backgroundColor.portfolioBtnBgColor};
    font-weight: 600;

    @media (min-width: 320px) {
      padding: 3% 5% 4% 5%;
    }
    @media (min-width: 576px) {
      padding: 2% 4% 3% 4%;
    }
    @media (min-width: 768px) {
      padding: 2% 3% 2% 3%;
    }
    &:active {
      border: none;
      background-color: ${backgroundColor.secondColor};
    }
  }
`

function Home() {
  return (
    <React.Fragment>
      <HomeStyled>
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <Content className="col-md-11 col-lg-10 col-xl-8">
                <Welcome>Bienvenue à tous 🎉</Welcome>
                <Title>
                  <span className="span">Je suis</span>
                  <TypewriterWrapper>
                    <Typewriter
                      options={{
                        strings: typerwriterElements,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </TypewriterWrapper>
                </Title>
                <Paragraph>
                  Je suis un développeur web et un designer graphique
                  indépendant. Je m'efforce de créer des applications/sites web
                  immersifs et magnifiques grâce à un code soigneusement conçu
                  et à une conception centrée sur l'utilisateur.
                </Paragraph>
                <Button className="row justify-content-center">
                  <a
                    href="#about-me"
                    className="btn about col-10 col-md-4 col-lg-3"
                  >
                    A propos de moi
                  </a>

                  <a
                    href="#portfolio"
                    className="btn portfolio col-10 col-md-4 col-lg-3"
                  >
                    Portfolio
                  </a>
                </Button>
              </Content>
            </div>
          </div>
        </div>
      </HomeStyled>
    </React.Fragment>
  )
}

export default Home
