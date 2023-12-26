import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { navigationElements } from '../data'
import { backgroundColor, color } from '../untils/colors'
import { police } from '../untils/police'

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
const List = styled.ul`
  @media (max-width: 1199px) {
    padding-top: 20px;
    padding-bottom: 0;
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

  const [headerHeight, setHeaderHeight] = useState(20) // Hauteur par défaut pour les grands écrans
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de l'en-tête en fonction de la taille de l'écran
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth
      setWindowWidth(screenWidth) // Met à jour la largeur de l'écran dans l'état
    }

    // Ajoutez un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener('resize', updateHeaderHeight)

    // Nettoyage : supprimez l'écouteur lors de la suppression du composant
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    // Met à jour la hauteur de l'en-tête en fonction de la largeur de l'écran actuelle
    if (windowWidth < 992) {
      setHeaderHeight(80)
    } else {
      setHeaderHeight(120)
    }
  }, [windowWidth])

  const handleClick = (event, targetId, targetHref) => {
    event.preventDefault()

    if (targetHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

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

    padding: 8% 0;

    @media (min-width: 425px) {
      padding: 5% 0;
    }
    @media (min-width: 768px) {
      padding: 3% 0 3% 0;
    }
    @media (min-width: 1200px) {
      padding: 2% 0 2% 0;
    }
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <nav className="row navbar navbar-expand-xl">
              <div className="container-fluid">
                <div className="navbar-brand col-xl-8 col-xxl-8">
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
                  className="collapse navbar-collapse col justify-content-end"
                  id="navbarSupportedContent"
                >
                  <List className="navbar-nav">
                    {navigationElements.map(({ id, title, href }) => (
                      <li className="nav-item" key={id}>
                        <ListItemsLink
                          ids={id}
                          className={`nav-link ${id}`}
                          href={href}
                          onClick={(e) => handleClick(e, id, href)}
                        >
                          {title}
                        </ListItemsLink>
                      </li>
                    ))}
                  </List>
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
