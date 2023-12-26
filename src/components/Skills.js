import React from 'react'
import styled from 'styled-components'
import { skillsElements } from '../data'
import Level from './Level'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const SkillsStyled = styled.section`
  color: ${color.white};
  padding-top: 80px;
  padding-bottom: 80px;
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
  margin-top: 50px;
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
