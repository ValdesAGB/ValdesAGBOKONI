import React, { useContext } from 'react'
import { CategoryContext } from '../untils/context'

function Categories({ activeCategory, categories }) {
  const { activeCategorie, setActiveCategory } = useContext(CategoryContext)
  return (
    <div className="ms-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  )
}

export default Categories
