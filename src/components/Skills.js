import React from 'react'
import styled from 'styled-components'
import { skillsElements } from '../data'
import Level from './Level'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const SkillsStyled = styled.section`
  color: ${color.white};
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

const SubTitle = styled.p`
  color: ${color.gris};
  font-family: ${police.second};
  text-align: center;
`

const Skill = styled.div`
  h6 {
    font-weight: 600;
  }
  @media (min-width: 320px) {
    margin-top: 20%;
  }
  @media (min-width: 768px) {
    margin-top: 8%;
  }
  @media (min-width: 1200px) {
    margin-top: 5%;
  }
`

function Skills() {
  return (
    <React.Fragment>
      <SkillsStyled id="skills">
        <div className="container">
          <Title>Skills</Title>
          <SubTitle>Développement web et Design graphique.</SubTitle>
          <Skill className="row">
            {skillsElements.map(({ id, name, level }) => (
              <span key={id} className="col-md-6 col-xl-4">
                <h6>{name}</h6>
                <Level progress={level} />
              </span>
            ))}
          </Skill>
        </div>
      </SkillsStyled>
    </React.Fragment>
  )
}

export default Skills
