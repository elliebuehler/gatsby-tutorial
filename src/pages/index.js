import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> I'm following the tutorial </p>
      <StaticImage
        alt="dog"
        src="../images/spaniel.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage