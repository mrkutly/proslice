import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TaglineStyles>
      <div className="highlight">The pizza authority</div>
      <Image fluid={data.file.childImageSharp.fluid} style={{ opacity: 0.8 }} />
    </TaglineStyles>
  </Layout>
)

IndexPage.propTypes = {
  data: {
    file: {
      childImageSharp: {
        fluid: PropTypes.object.isRequired,
      },
    },
  },
}

const TaglineStyles = styled.div`
  display: relative;

  .highlight {
    font-size: 2rem;
    padding: 2px 0 0;
    z-index: 2;
    top: calc(3rem + 24px);
    position: absolute;
  }
`

export const ImageQuery = graphql`
  query {
    file(relativePath: { eq: "zza.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
