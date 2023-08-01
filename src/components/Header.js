import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { navigationElements } from '../data'
import { backgroundColor, color } from '../untils/colors'
import { police } from '../untils/police'
import ScrollIntoView from 'react-scroll-into-view'

const MyName = styled.div`
  a {
    text-decoration: none;
    color: ${color.white};
  }
  .first {
    @media (max-width: 425px) {
      font-weight: 800;
    }
    background-color: ${color.primary};
    padding: 10px 25px;
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
  color: ${color.white};
  border: 0 !important;
  @media (min-width: 320px) {
    font-size: 2.5em;
  }
  @media (min-width: 375px) {
    font-size: 3em;
  }
`
const ListItemsLink = styled.a`
  color: ${(props) =>
    props.ids !== 'accueil' ? color.white : color.activeMenuLinkColor};

  &:hover {
    color: ${(props) =>
      props.ids !== 'accueil' ? color.aboutMeColor : color.activeMenuLinkColor};
  }

  &:active {
    color: ${(props) =>
      props.ids !== 'accueil' ? color.aboutMeColor : color.activeMenuLinkColor};
  }

  &:focus {
    color: ${(props) =>
      props.ids !== 'accueil' ? color.aboutMeColor : color.activeMenuLinkColor};
  }

  @media (max-width: 1199px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

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
    background-color: ${isAtTop
      ? backgroundColor.mainColor
      : backgroundColor.secondColor};
    font-family: ${police.second};
    color: ${color.white};
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;

    @media (min-width: 320px) {
      padding: 8% 0;
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
    @media (min-width: 1200px) {
      padding: 2% 0 2% 0;
      margin-bottom: 0%;
    }
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <nav className="row navbar navbar-expand-xl">
              <div className="container-fluid">
                <div className="navbar-brand col-xl-7 col-xxl-8">
                  <MyName className="col-md">
                    <a href="/">
                      <span className="last d-none d-md-inline">AGBOKONI</span>{' '}
                      <span className="first">Valdès</span>
                    </a>
                  </MyName>
                </div>

                <Icone
                  className="navbar-toggler bi bi-list"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                />

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    {navigationElements.map(({ id, title, href }) => (
                      <li className="nav-item" key={id}>
                        <ListItemsLink
                          ids={id}
                          className="nav-link"
                          href={href}
                        >
                          {title}
                        </ListItemsLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
