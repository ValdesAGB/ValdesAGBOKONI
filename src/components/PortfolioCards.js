import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { PortfolioButtonContext } from '../untils/context'
import Loader from '../untils/Loader'
import ButtonSm from './ButtonSm'

function PortfolioCards({ array }) {
  const { loading } = useContext(PortfolioButtonContext)

  const [readMore, setReadMore] = useState(null)

  const PortfolioCardsContainer = styled.div`
    margin-top: 5%;
  `

  const Card = styled.div`
    border: none;
    margin-bottom: 15%;
    padding: 0;
    position: relative;
  `

  const CardContent = styled.div`
    border: none;
    background-color: #11121e;
    color: white;
  `

  const Image = styled.img`
    width: 100%;
    border-radius: 0;
  `

  const Paragraph = styled.p`
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    max-height: 200px;
    overflow: scroll;
  `

  const ReadMoreIcone = styled.i`
    position: absolute;
    top: 2%;
    left: 80%;
    font-size: 1.2em;
    color: #ffce07;
    font-weight: 800;
    padding: 1% 7% 1% 7%;
    background-color: #121234;
    box-shadow: 1px 1px 10px #121234;
    border-radius: 5px;
  `

  const ViewProjet = styled.a`
    font-family: 'Open Sans', sans-serif;
    background-color: #ffce07;
    border: none;
    border-radius: 5px;
    color: black;
    font-weight: 500;
    padding: 2%;
    text-align: center;
    text-decoration: none;
    align- @media (min-width: 320px) {
      margin-bottom: 5%;
    }

    @media (min-width: 768px) {
      margin-bottom: 0%;
      margin-right: 5%;
    }
  `
  return (
    <React.Fragment>
      <PortfolioCardsContainer className="row  d-md-none">
        <div>
          <div className="row justify-content-center">
            <div className="col-8">
              <ButtonSm />
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          array.map(({ id, description, cover, link }) => (
            <Card className="card" key={id} id={id}>
              <Image src={cover} alt={id} className="card-img-top w-100" />
              {readMore === id && (
                <CardContent className="card-body">
                  <Paragraph className="card-text">{description}</Paragraph>
                  <div className="row justify-content-center align-items-center">
                    <ViewProjet
                      href={link}
                      target="_blank"
                      className="col-6 col-md-3"
                    >
                      Visitez le site
                    </ViewProjet>
                  </div>
                </CardContent>
              )}

              <ReadMoreIcone
                className={`row  bi bi-${
                  readMore === id ? 'dash' : 'bi bi-plus-lg'
                }`}
                onClick={() => setReadMore(readMore === id ? null : id)}
              />
            </Card>
          ))
        )}
      </PortfolioCardsContainer>
    </React.Fragment>
  )
}

export default PortfolioCards
