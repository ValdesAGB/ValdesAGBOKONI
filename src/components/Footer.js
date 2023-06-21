import React from 'react'
import { Networks } from '../data'
import { backgroundColor, color } from '../untils/colors'
import styled from 'styled-components'

function Footer() {
  const FooterStyled = styled.footer`
    background-color: ${backgroundColor.secondColor};
    @media (min-width: 320px) {
      padding-top: 5%;
      padding-bottom: 5%;
    }
    @media (min-width: 1360px) {
      padding-top: 3%;
      padding-bottom: 2%;
    }
    @media (min-width: 1440px) {
      padding-top: 5%;
      padding-bottom: 5%;
    }
  `

  const MyName = styled.div`
    font-size: 1.5em;

    a {
      text-decoration: none;
      color: white;
    }
    .first {
    }
    .last {
      font-weight: 800;
      background-color: ${backgroundColor.mainColor};
      padding: 3%;
      border-radius: 5px;
    }

    @media (min-width: 320px) {
      margin: 6% 0 8% 0;
    }
    @media (min-width: 768px) {
      margin: 0;
    }
  `

  const Icone = styled.i`
    color: ${color.primary};
    margin-right: 20px;

    @media (min-width: 320px) {
      font-size: 2em;
    }
  `

  const Cover = styled.img`
    border: solid 2px red;
    margin-right: 10px;
    @media (min-width: 320px) {
      border-radius: 5px;
      width: 4%;
    }
  `

  const NetworksContainer = styled.div`
    @media (min-width: 320px) {
      margin: 0% 0 6% 0;
    }
    @media (min-width: 768px) {
      margin: 0;
    }
  `

  const date = new Date()

  const Copyright = styled.div`
    font-family: 'Open Sans', sans-serif;

    h6 {
      font-weight: 100;
    }

    @media (min-width: 320px) {
      margin: 0;
    }
    @media (min-width: 768px) {
      margin: 5% 0 0% 0;
    }
    @media (min-width: 2560px) {
      margin: 3% 0 0% 0;
    }
  `
  return (
    <React.Fragment>
      <FooterStyled className="row">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-6 col-xxl-5 row justify-content-center align-items-center text-center">
              <MyName className="col-md">
                <a href="#">
                  <span className="first">Valdès</span>{' '}
                  <span className="last">AGBOKONI</span>
                </a>
              </MyName>
              <NetworksContainer className="col-md">
                {Networks.map(({ id, name, link, icone, cover }) => (
                  <a
                    key={id}
                    target="_blank"
                    href={id === 'mail' ? `mailto:${link}` : link}
                    className="text-decoration-none"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                    title={name}
                  >
                    {cover ? null : <Icone className={icone} />}
                  </a>
                ))}
              </NetworksContainer>
            </div>
            <Copyright className="text-center">
              <h6>
                &copy; {date.getFullYear()} Valdès AGBOKONI. All rights
                reserved.
              </h6>
            </Copyright>
          </div>
        </div>
      </FooterStyled>
    </React.Fragment>
  )
}

export default Footer
