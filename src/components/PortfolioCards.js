import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { PortfolioButtonContext } from '../untils/context'
import Loader from '../untils/Loader'
import ButtonSm from './ButtonSm'
import { backgroundColor, color } from '../untils/colors'
import { police } from '../untils/police'

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
  background-color: ${color.cardContentBgColor};
  color: white;
`

const Image = styled.img`
  width: 100%;
  border-radius: 0;
`

const Paragraph = styled.p`
  text-align: justify;
  font-family: ${police.second};
  font-weight: 400;
  max-height: 200px;
  overflow: auto;
`

const ReadMoreIcone = styled.i`
  position: absolute;
  top: 2%;
  left: 80%;
  font-size: 1.2em;
  color: ${color.activeMenuLinkColor};
  font-weight: 800;
  padding: 1% 7% 1% 7%;
  background-color: ${backgroundColor.readMoreIconeBgColor};
  box-shadow: 0px 0px 10px ${backgroundColor.readMoreIconeBgColor};
  border-radius: 5px;
`

const ViewProjet = styled.a`
  font-family: ${police.second};
  background-color: ${color.activeMenuLinkColor};
  border: none;
  border-radius: 5px;
  color: ${color.viewProjetBtnColor};
  font-weight: 500;
  padding: 2%;
  text-align: center;
  text-decoration: none;
  margin-bottom: 5%;
`

function PortfolioCards({ array }) {
  const { loading } = useContext(PortfolioButtonContext)

  const [readMore, setReadMore] = useState(null)

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
              <Image src={cover} alt={id} className="card-img-top" />
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
                className={`row  bi bi-${readMore === id ? 'dash' : 'plus-lg'}`}
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
