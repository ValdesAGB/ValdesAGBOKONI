import React, { useContext } from 'react'
import PortfolioGrid from './PortfolioGrid'
import styled from 'styled-components'
import PortfolioCards from './PortfolioCards'
import { PortfolioButtonContext } from '../untils/context'
import { portfolioElements } from '../data'
import { backgroundColor } from '../untils/colors'

const PortfolioStyled = styled.section`
  background-color: ${backgroundColor.secondColor};
  padding-top: 20%;
  padding-bottom: 20%;

  @media (min-width: 768px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  @media (min-width: 1200px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const Title = styled.h2`
  text-align: center;
  font-weight: 800;
`

function Portfolio() {
  const { activeButton } = useContext(PortfolioButtonContext)

  const filteredPortfolio =
    activeButton === 'All'
      ? portfolioElements
      : portfolioElements.filter(({ type }) => type === activeButton)

  return (
    <React.Fragment>
      <PortfolioStyled id="portfolio">
        <div className="container">
          <Title>Portfolio</Title>
          <PortfolioGrid array={filteredPortfolio} />
          <PortfolioCards array={filteredPortfolio} />
        </div>
      </PortfolioStyled>
    </React.Fragment>
  )
}

export default Portfolio
