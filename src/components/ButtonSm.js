import React, { useContext } from 'react'
import styled from 'styled-components'
import { PortfolioButtonContext } from '../untils/context'
import { typesDeSitesElements } from '../data'
import { police } from '../untils/police'

const Select = styled.select`
  padding: 2%;
  margin-bottom: 15%;
  border-radius: 5px;
  font-weight: 500;
  font-family: ${police.second};
`
function ButtonSm() {
  const { handleFilter } = useContext(PortfolioButtonContext)

  return (
    <React.Fragment>
      <Select
        className="form-select"
        aria-label="Default select example"
        disabled
        /*
       Il faudra travailler cet évernement d'écoute pou qu'il passe. Avec ce qu'on a là, le state est mise à jour mais le title ne change pas dans le select.
       onChange={(event) => handleFilter(event.target.value)}*/
      >
        {typesDeSitesElements.map(({ id, title }) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </Select>
    </React.Fragment>
  )
}

export default ButtonSm
