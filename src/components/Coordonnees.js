import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/colors'

const Container = styled.div`
  margin-bottom: 20px;
`

const Icone = styled.i`
  color: ${color.primaryVariante};
  margin-right: 10px;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`

const Cover = styled.img`
  margin-right: 10px;
  border-radius: 5px;
  width: 8%;

  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 992px) {
    width: 10%;
  }
  @media (min-width: 1400px) {
    width: 9%;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${color.white};
  font-weight: 400;
`

const Text = styled.span`
  font-size: 1em;
`

function Coordonnees({ id, icone, link, cover, name }) {
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
            <Link href={link} target="_blank">
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
