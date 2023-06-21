import React from 'react'
import styled from 'styled-components'
import { skillsElements } from '../data'
import Level from './Level'
import { color } from '../untils/colors'

function Skills() {
  const SkillsStyled = styled.section`
    color: #fff;

    @media (min-width: 320px) {
      padding-top: 20%;
      padding-bottom: 20%;
    }
    @media (min-width: 768px) {
      padding-top: 10%;
      padding-bottom: 10%;
    }
    @media (min-width: 1024px) {
      padding-top: 5%;
      padding-bottom: 5%;
    }
  `

  const Title = styled.h2`
    text-align: center;
    font-weight: 800;
  `

  const Paragraph = styled.p`
    color: ${color.gris};
    font-family: 'Open Sans', Helvetica, sans-serif;
    @media (min-width: 320px) {
      text-align: center;
    }
  `

  const Skills = styled.div`
    margin-top: 5%;
    @media (min-width: 320px) {
      margin-top: 20%;
    }
    @media (min-width: 375px) {
      margin-top: 15%;
    }
    @media (min-width: 425px) {
      margin-top: 10%;
    }
    @media (min-width: 768px) {
      margin-top: 8%;
    }
    @media (min-width: 1024px) {
      margin-top: 5%;
    }
    h6 {
      font-weight: 600;
    }
  `
  return (
    <React.Fragment>
      <SkillsStyled id="skills">
        <div className="container">
          <Title>Skills</Title>
          <Paragraph className="">
            Développement web et Design graphique.
          </Paragraph>
          <Skills className="row">
            {skillsElements.map(({ id, name, level }) => (
              <span key={id} className="col-md-6 col-xl-4">
                <h6>{name}</h6>
                <Level progress={level} />
              </span>
            ))}
          </Skills>
        </div>
      </SkillsStyled>
    </React.Fragment>
  )
}

export default Skills
