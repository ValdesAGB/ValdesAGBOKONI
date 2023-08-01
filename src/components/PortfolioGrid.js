import React, { useContext } from 'react'
import styled from 'styled-components'
import { backgroundColor, color } from '../untils/colors'
import Loader from '../untils/Loader'
import { PortfolioButtonContext } from '../untils/context'
import Modal from './Modal'
import ButtonMd from './ButtonMd'

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin-top: 5%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`

const Content = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover img {
    transform: scale(1.2);
  }

  .text {
    margin-top: 6%;

    span {
      font-size: 0.8em;
      color: ${color.gris};
    }

    h6 {
      font-weight: 800;
    }
  }
`

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
`

const BlankLink = styled.a`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  ${Content}:hover & {
    opacity: 1;
  }
`

const BlankIconeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 80%;
  background-color: ${backgroundColor.mainColor};
  padding: 1% 5%;
`
const BlankIcone = styled.i`
  font-size: 1em;
  font-weight: 600;
  color: white;
`

const CardFooter = styled.div`
  margin-top: 5%;
`

const Type = styled.span`
  font-weight: 200;
  font-size: 0.8em;
  font-style: italic;
`

function PortfolioGrid({ array }) {
  const { loading } = useContext(PortfolioButtonContext)
  return (
    <React.Fragment>
      <div className="d-none d-md-block">
        <ButtonMd />
        {loading ? (
          <Loader />
        ) : (
          <PortfolioContainer>
            {array.map(({ id, title, link, description, cover, type }) => (
              <Content key={id} className="">
                <div>
                  <Image
                    src={cover}
                    alt={title}
                    data-bs-toggle="modal"
                    data-bs-target={`#${id}`}
                  />
                </div>
                <Modal id={id} description={description} title={title} />
                <CardFooter className="">
                  <Type>{type}</Type>
                  <h6>{title}</h6>
                  <BlankLink href={link} target="_blank" rel="noreferrer">
                    <BlankIconeContainer>
                      <BlankIcone className="bi bi-box-arrow-up-right" />
                    </BlankIconeContainer>
                  </BlankLink>
                </CardFooter>
              </Content>
            ))}
          </PortfolioContainer>
        )}
      </div>
    </React.Fragment>
  )
}

export default PortfolioGrid
