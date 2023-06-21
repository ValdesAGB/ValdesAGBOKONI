import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { backgroundColor, color } from '../untils/colors'
import { LevelContext } from '../untils/context'

function ProgressBar({ progress }) {
  const { isFilled, setIsFilled } = useContext(LevelContext)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight - windowHeight

      // Calculez la position de défilement actuelle en pourcentage
      const scrollPercentage = (scrollPosition / scrollHeight) * 100

      // Vérifiez si la position de défilement atteint le niveau souhaité
      if (scrollPercentage >= progress && !isFilled) {
        setIsFilled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [progress, isFilled])

  return (
    <React.Fragment>
      <StyledProgressBar>
        <Progress progress={isFilled ? progress : 0}>
          <Tooltip className="d-md-block d-none">{progress}%</Tooltip>
        </Progress>
        <Tooltip className="d-md-none">{progress}%</Tooltip>
      </StyledProgressBar>
    </React.Fragment>
  )
}

const StyledProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${backgroundColor.secondColor};
  border-radius: 10px;
  margin-bottom: 5%;
  @media (min-width: 320px) {
    position: relative;
    margin-bottom: 10%;
  }
  @media (min-width: 425px) {
    margin-bottom: 8%;
  }
  @media (min-width: 768px) {
    margin-bottom: 5%;
  }
  @media (min-width: 1024px) {
    margin-bottom: 4%;
  }
`

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${color.primary};
  border-radius: 10px;
  position: relative;
  transition: width 2s ease-in-out;
`

const Tooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 10px);
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-color: transparent;
    border-width: 5px 5px 0 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-color: #333 transparent;
    border-width: 4px 4px 0 4px;
  }
  @media (min-width: 320px) {
    left: 95%;
  }
`

export default ProgressBar
