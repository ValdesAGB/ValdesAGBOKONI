import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { navigationElements } from '../data'
import { backgroundColor, color } from '../untils/colors'

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Navigation = styled.section`
    background-color: ${isAtTop ? 'transparent' : backgroundColor.secondColor};
    font-family: 'Open Sans', sans-serif;
    color: white;
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    @media (min-width: 320px) {
      padding: 8% 0 8% 0;
      margin-bottom: 3%;
    }

    @media (min-width: 425px) {
      padding: 5% 0 5% 0;
      margin-bottom: 2%;
    }
    @media (min-width: 768px) {
      padding: 3% 0 3% 0;
      margin-bottom: 1%;
    }
    @media (min-width: 1360px) {
      padding: 2% 0 2% 0;
      margin-bottom: 1%;
    }

    @media (min-width: 1360px) {
      margin-bottom: 0%;
    }
  `

  const BrandLink = styled.a`
    color: white;
    @media (min-width: 1024px) {
      margin-right: 35%;
    }

    @media (min-width: 1440px) {
      margin-right: 40%;
    }
  `

  const MyName = styled.div`
    a {
      text-decoration: none;
      color: white;
    }
    .first {
      @media (max-width: 425px) {
        font-weight: 800;
      }
      background-color: ${color.primary};
      padding: 2% 5%;
      border-radius: 5px;
    }

    .last {
      font-weight: 800;
    }

    @media (min-width: 320px) {
      font-size: 1.5em;
    }

    @media (min-width: 768px) {
      margin: 0;
      font-size: 1.5em;
    }
  `
  const Icone = styled.i`
    color: white;
    @media (min-width: 320px) {
      font-size: 2.5em;
    }
    @media (min-width: 375px) {
      font-size: 3em;
    }
  `

  const ListItems = styled.li`
    color: white;
  `

  const ListItemsLink = styled.a`
    color: ${(props) => (props.ids !== 'acceuil' ? 'white' : '#ffce07')};
    &:hover {
      color: ${color.gris};
    }

    &:focus {
      color: ${color.gris};
    }
  `

  const MenuContainer = styled.div`
    background-color: ${isAtTop
      ? backgroundColor.mainColor
      : backgroundColor.secondColor};
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <nav className="row navbar navbar-expand-lg">
              <div className="container-fluid">
                <BrandLink
                  className="navbar-brand col-8 col-md-5 col-lg-3"
                  href="#"
                >
                  <MyName className="col-md">
                    <a href="#">
                      <span className="last d-none d-md-inline">AGBOKONI</span>{' '}
                      <span className="first">Valdès</span>
                    </a>
                  </MyName>
                </BrandLink>

                <Icone
                  className="navbar-toggler bi bi-list"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                />

                <MenuContainer
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                    {navigationElements.map(({ id, title, href }) => (
                      <ListItems className="nav-item" key={id}>
                        <ListItemsLink
                          ids={id}
                          className={`nav-link ${id}`}
                          href={href}
                          /* onClick={(event) => handleAnchorClick(event, id)}*/
                        >
                          {title}
                        </ListItemsLink>
                      </ListItems>
                    ))}
                  </ul>
                </MenuContainer>
              </div>
            </nav>
          </div>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
