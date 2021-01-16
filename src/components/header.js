import React from "react"
import { Image } from "react-bootstrap"
import yono from '../images/yonowhite.png'

const Header = () => (
  <header className='head'>
    <Image src={yono} fluid/>
  </header>
)

export default Header
