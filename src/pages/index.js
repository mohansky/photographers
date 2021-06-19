/** MAIN INDEX PAGE **/
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap" 
import { SRLWrapper } from 'simple-react-lightbox'
import { GatsbyImage } from 'gatsby-plugin-image'

const options = {
  settings: {
    overlayColor: "rgb(0, 0, 0, 1)",
  },
  buttons: { 
    showDownloadButton: false,
  },
  caption: {
    captionColor: "#fff",
    captionTextTransform: "capitalize",
    captionFontSize: '1rem',
  },
  thumbnails: {
    showThumbnails: false,
  }
};

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
   

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Overview" />
      <Container fluid className="main-container gallery">
      <SRLWrapper className="gallery-items" options={options}> 
        {data.thumbnails.edges.map((e, index) => {
          return ( 
            <a className=" gallery-item" href={data.images.edges[index].node.childImageSharp.gatsbyImageData.images.fallback.src}>
              <GatsbyImage image={e.node.childImageSharp.gatsbyImageData} alt={e.node.name.split('-').join(' ').split('.')[0]} />
            </a> 
          )})} 
        </SRLWrapper> 
      </Container>     
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
      images: allFile(
        filter: { relativeDirectory: { eq: "photos" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            name
            id
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      thumbnails: allFile(
        filter: { relativeDirectory: { eq: "photos" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            name
            id
            relativePath
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5, 
                placeholder: DOMINANT_COLOR, 
                height: 320)
            }
          }
        }
      }
  }
`
