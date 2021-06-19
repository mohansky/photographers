/** COLLECTON LIST PAGE **/
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Collections" />
       
     
      <div className="post-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const featuredimg = post.frontmatter.featuredimg.childImageSharp.gatsbyImageData

          return (
            <div className="col-md-6 post-list-item" key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url">
                <article className="text-center" >
                  <GatsbyImage
                    className="post-image"
                    image={featuredimg}
                    alt={title} 
                    />   <br/>
                  <span>{title}</span>
                </article>
              </Link> 
            </div>
        )})}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredimg {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.8, height: 320, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
  
`
