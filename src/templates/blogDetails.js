import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const disqusShortname = "shopper";

const BlogDetails = data => (
    < Layout >
        <SEO title={data.data.contentfulBlogs.title} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        <div className="blogs-page">

            <div className="container">
                <div className="post-details">
                    <h2 className="title">{data.data.contentfulBlogs.title}</h2>
                    <div className="post-date">
                        <i className="fas fa-calendar-alt"></i>
                        {data.data.contentfulBlogs.publicData}
                    </div>
                    <div className="author">
                        {data.data.contentfulBlogs.author.photo === null ? 
                            <div className="no-image">No Image</div> : 
                            <Img sizes={data.data.contentfulBlogs.author.photo.fluid} />}
                        <strong className="name">{data.data.contentfulBlogs.author.name}</strong>
                    </div>

                    <div className="post-thumbnail" >
                        {data.data.contentfulBlogs.featureImage.file.contentType.indexOf("video") >= 0 ? 
                            <div className="inner" align="center">
                                <h2>{data.data.contentfulBlogs.featureImage.title}</h2>
                                <video controls preload="auto">
                                    <source src={data.data.contentfulBlogs.featureImage.file.url} 
                                            type={data.data.contentfulBlogs.featureImage.file.contentType} />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            : <Img sizes={data.data.contentfulBlogs.featureImage.fluid} />
                        }
                    </div>

                    {data.data.contentfulBlogs.morePhotos != null && 
                        <div className="grid-3-col">
                        {data.data.contentfulBlogs.morePhotos.map((item, index) => (
                            <div key={index}><Img className="grid-image" sizes={item.fluid} /></div>
                        ))}
                        </div>
                    } 

                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.data.contentfulBlogs.description.childMarkdownRemark.html
                        }}
                    />

                </div>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                        identifier: data.data.contentfulBlogs.id,
                        title: data.data.contentfulBlogs.title
                    }}
                />
            </div>
        </div>
    </Layout >
)

export default BlogDetails

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
        contentfulBlogs(slug: {eq: $slug }) {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            author {
                name
                photo {
                    fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
            }
            featureImage {
                title
                file {
                  contentType
                  fileName
                  url
                }
                fluid(maxWidth: 1120) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                }
            }
            morePhotos {
                fluid {
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
