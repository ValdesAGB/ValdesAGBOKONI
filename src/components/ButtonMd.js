import React, { useContext } from 'react'
import { PortfolioButtonContext } from '../untils/context'
import styled from 'styled-components'
import { color } from '../untils/colors'
import { typesDeSitesElements } from '../data'

const ButtonMdStyled = styled.div`
  text-align: center;
  margin-top: 4%;
  button {
    border-color: transparent;
    color: ${color.white};
    font-weight: 400;
    margin-right: 10px;
    &:hover {
      color: ${color.gris};
    }
  }
  .active {
    background-color: ${color.primary};
    border: 0;
    font-weight: 600;
  }
`

function ButtonMd() {
  const { handleFilter, activeButton } = useContext(PortfolioButtonContext)

  return (
    <React.Fragment>
      <ButtonMdStyled>
        {typesDeSitesElements.map(({ id, title }) => (
          <button
            key={id}
            className={activeButton === title ? 'btn active' : 'btn'}
            onClick={() => handleFilter(title)}
          >
            {title}
          </button>
        ))}
      </ButtonMdStyled>
    </React.Fragment>
  )
}

export default ButtonMd
