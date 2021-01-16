import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className='inti'>
        <main>{children}</main>
        <footer className='foot'>
            noone © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
