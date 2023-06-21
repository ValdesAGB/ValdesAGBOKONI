import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/colors'

function Coordonnees({ id, icone, link, cover, name }) {
  const Container = styled.div`
    margin-bottom: 20px;
  `

  const Icone = styled.i`
    color: ${color.primary};
    margin-right: 10px;

    @media (min-width: 320px) {
      font-size: 1.5em;
    }
    @media (min-width: 375px) {
      font-size: 2.1em;
    }
    @media (min-width: 425px) {
      font-size: 2.5em;
    }
  `

  const Link = styled.a`
    text-decoration: none;
    color: ${color.white};
    font-weight: 500;
  `

  const Text = styled.span`
    font-size: 1.1em;
    @media (min-width: 320px) {
      font-size: 1em;
    }
  `

  const Cover = styled.img`
    margin-right: 10px;
    @media (min-width: 320px) {
      border-radius: 5px;
      width: 8%;
    }
    @media (min-width: 375px) {
      width: 10%;
    }
    @media (min-width: 768px) {
      width: 15%;
    }
    @media (min-width: 768px) {
      width: 12%;
    }
    @media (min-width: 1360px) {
      border-radius: 5px;
      width: 10%;
    }
    @media (min-width: 1440px) {
      width: 9%;
    }
  `
  return (
    <React.Fragment>
      <Container>
        {icone ? (
          <div>
            <Link
              href={id === 'mail' ? `mailto:${link}` : link}
              target="_blank"
            >
              <Icone className={icone} />
              <Text>{name}</Text>
            </Link>
          </div>
        ) : (
          <div className="row">
            <Link
              href={id === 'mail' ? `mailto:${link}` : link}
              target="_blank"
            >
              <Cover src={cover} alt={name} />
              <Text>{name}</Text>
            </Link>
          </div>
        )}
      </Container>
    </React.Fragment>
  )
}

export default Coordonnees
/**icone && id !== 'mail' ? (
          <div className="">
            <Icone className={icone} />
            <Link href="#">
              <Text>{lin}</Text>
            </Link>
          </div>
        ) : !icone ? (
          <div className="">
            <img src={cover} />
            <Link href="#">
              <Text>{text}</Text>
            </Link>
          </div>
        ) : */
