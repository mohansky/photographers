/** BLOG SINGLE PAGE **/
import * as React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"; 


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

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
 
        <Container> 
          <article className="blog-post"> 
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <h4 itemProp="headline">{post.frontmatter.description}</h4>
            
            </header>

            <div className="gallery">
              <SRLWrapper options={options}>  
                  {post.frontmatter.thumb.map((e, index) =>{ 
                return(
                <a href={post.frontmatter.full[index].childImageSharp.gatsbyImageData.images.fallback.src}>
                  <GatsbyImage 
                      image={e.childImageSharp.gatsbyImageData}  
                      alt={e.name.split('-').join(' ').split('.')[0] }/> 
                </a>
                  )})} 
              </SRLWrapper>   
            </div>

            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            /> 
          </article> 
        </Container> 

       {/* <hr /> */}

        <nav className="blog-post-nav">
            <ul className="next-prev-item">
              <li> {previous && ( <Link to={previous.fields.slug} rel="prev">
                  <ChevronLeft/>{previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li> {next && ( <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}<ChevronRight/>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
 

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumb: imgset {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED 
              height: 240
              aspectRatio: 1.5
            )
          }
          name
        }
        full: imgset {
          childImageSharp {
            gatsbyImageData( layout: FULL_WIDTH)
          }
          name
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
