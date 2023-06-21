import React from 'react'
import styled from 'styled-components'
import ButtonSm from './ButtonSm'
import ButtonMd from './ButtonMd'

function PortfolioBtn() {
  const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 2%;
    }
  `

  return (
    <React.Fragment>
      <ButtonContainer>
        <ButtonMd />
        <ButtonSm />
      </ButtonContainer>
    </React.Fragment>
  )
}

export default PortfolioBtn
