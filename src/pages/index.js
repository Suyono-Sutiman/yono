import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Col, Container, Image, Row} from "react-bootstrap"
import hero from '../images/yono.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid className='home'>
      <Row>
        <Col xs={{span:8, offset:2}} md={{span:6, offset:3}} lg={{span:4, offset:4}}>
          <Image src={hero} fluid className='hero-img'/>
        </Col>
      </Row>
        <h1>Hallo, Saya Suyono</h1>
        <h2>Seorang web <span>developer</span> serta <span>designer</span> dan seorang wibu.</h2>
    </Container>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
