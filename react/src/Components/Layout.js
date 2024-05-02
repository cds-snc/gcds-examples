import { Outlet, Link } from "react-router-dom"
import {
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsContainer,
  GcdsDateModified,
  GcdsHeader,
  GcdsIcon,
  GcdsNavLink,
  GcdsPhaseBanner,
  GcdsTopNav
} from '@cdssnc/gcds-components-react'

import Logo from '../img/logo.png'

function Layout() {
  return (
    <>
      <GcdsHeader
        lang="en"
        langHref="en"
        signatureVariant="colour"
        skipToHref="#main-content"
      >
        <GcdsPhaseBanner slot="banner">
          <GcdsIcon
            slot="banner-icon-left"
            name="play-circle"
            size="text"
            label="Play icon featuring a right-facing triangle within a circle with a rightward arrowhead. It signifies the action of starting or resuming audio or video playback."
          />
          <p slot="banner-text">Stay tuned for our new baking series coming out soon.</p>
        </GcdsPhaseBanner>
        <Link  slot="signature" className="d-flex align-items-center link-default" to="/">
          <img
            src={Logo}
            alt="The logo features a cupcake with a determined facial expression and a superhero cape, exuding an enthusiastic and adventurous personality."
            className="header__logo me-300"
          />
          <p>Cupcake heros</p>
        </Link>
        <GcdsTopNav slot="menu" label="topbar" alignment="right" lang="en">
          <GcdsNavLink href="" slot="home"/>
          <GcdsNavLink href="">
            <Link className="text-inherit link-no-underline" to="/">
              Home
            </Link>
          </GcdsNavLink>
          <GcdsNavLink href="">
            <Link className="text-inherit link-no-underline" to="recipes">
              Recipes
            </Link>
          </GcdsNavLink>
          <GcdsNavLink href="">
            <Link className="text-inherit link-no-underline" to="submit-recipe">
              Submit recipe
            </Link>
          </GcdsNavLink>
          <GcdsNavLink href="">
            <Link className="text-inherit link-no-underline" to="cupcake-delivery">
              Cupcake delivery
            </Link>
          </GcdsNavLink>
        </GcdsTopNav>

        <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>
          <GcdsBreadcrumbsItem href="/">
          <Link className="text-inherit link-no-underline" to="/">Home</Link>
          </GcdsBreadcrumbsItem>
          <GcdsBreadcrumbsItem href="">
            <Link className="text-inherit link-no-underline" to="recipes">Recipes</Link>
          </GcdsBreadcrumbsItem>
        </GcdsBreadcrumbs>
      </GcdsHeader>

      <GcdsContainer id="main-content" tag="main" size="xl" centered padding="400">
        <Outlet />
        <GcdsDateModified>2023-07-15</GcdsDateModified>
      </GcdsContainer>

      <div className="bg-light px-200 py-400">
        <GcdsContainer tag="footer" size="xl" centered>
          <p><small>&copy;2023 Cupcake heros</small></p>
        </GcdsContainer>
      </div>
    </>
  )
}

export default Layout;