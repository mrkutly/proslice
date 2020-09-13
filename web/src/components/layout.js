import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import GlobalStyles from '../styles/global';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
		<>
			<GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			{/* <footer>
				© {new Date().getFullYear()}, Proslice
			</footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
