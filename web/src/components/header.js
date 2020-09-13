import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderStyles>
      <h1 className="highlight">Proslice</h1>
      <nav className="desktop">
        <span>home</span>
        <span>shop</span>
        <span>recipes</span>
        <span>ingredients</span>
        <span>pizza styles</span>
      </nav>
      <span
        role="button"
        aria-controls="mobile-nav"
        aria-label="Open Navigation"
        id="mobile-nav-controls"
        onClick={() => setOpen(!open)}
        onKeyPress={(e) => e.key === 'Enter' && setOpen(!open)}
        tabIndex="0"
      >
        <div id="bars" className={open ? 'active' : ''} />
      </span>
      <nav className={open ? 'mobile open' : 'mobile'} id="mobile-nav">
        <span>home</span>
        <span>shop</span>
        <span>recipes</span>
        <span>ingredients</span>
        <span>pizza styles</span>
      </nav>
    </HeaderStyles>
  )
}

const colorChange = keyframes`
	0% {
		background: var(--red);
	}
	50% {
		background: var(--yellow);
	}
	100% {
		background: var(--red);
	}
`

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 12px 0;

  h1 {
    color: white;
    margin: 0 4px;
    transform: rotate(-3deg);
  }

  /* desktop nav */
  nav {
    display: flex;
  }
  span {
    margin-right: 16px;
  }

  /* mobile-nav */
  nav.mobile,
  #mobile-nav-controls {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    nav.desktop {
      display: none;
    }

    nav.mobile.open {
      padding: calc(50vh - 18rem) 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      position: fixed;
      width: 100vw;
      height: calc(100vh - 3rem - 24px);
      top: calc(3rem + 24px);
      z-index: 3;
      background: white;
      font-size: 2rem;

      span {
        margin: 32px 0;
      }
    }

    #mobile-nav-controls {
      display: block;
      height: 36px;
      padding: 0 4px;

      &:active,
      &:focus {
        outline: none;
        background-color: var(--yellow);
      }
    }

    #bars {
      height: 4px;
      width: 32px;
      background: var(--red);
      transition: all ease-in-out 0.1s;
      position: relative;
      top: 16px;

      &.active {
        transform: rotate(45deg);

        &:before {
          transform: rotate(90deg);
          top: 0;
        }

        &:after {
          transform: rotate(90deg);
          top: -4px;
        }
      }

      &:after {
        content: '';
        display: block;
        position: relative;
        height: 4px;
        width: 32px;
        background: var(--red);
        top: 4px;
      }

      &:before {
        content: '';
        display: block;
        position: relative;
        height: 4px;
        width: 32px;
        background: var(--red);
        top: -8px;
      }
    }
  }
`

export default Header
