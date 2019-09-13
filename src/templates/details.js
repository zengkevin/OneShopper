import React from "react"
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const ProductDetails = data => (
  < Layout >

    <SEO title={data.data.contentfulProduct.productName} keywords={[`gatsby`, `application`, `react`]} />
    <div className="container details-page">
      <div className="product-details">

        {data.data.contentfulProduct.image === null ? <div className="no-image">No Image</div> :

          data.data.contentfulProduct.image[0].file.contentType.indexOf("video") >= 0 ? 
              <div className="inner" align="center">
                  <h2>{data.data.contentfulProduct.image[0].title}</h2>
                  <video controls preload="auto">
                      <source src={data.data.contentfulProduct.image[0].file.url} 
                              type={data.data.contentfulProduct.image[0].file.contentType} />
                      Your browser does not support the video tag.
                  </video>
              </div>
              : <Img sizes={data.data.contentfulProduct.image[0].fluid} />
          
        }

        <div>
          <h2>{data.data.contentfulProduct.productName}</h2>
        </div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={data.data.contentfulProduct.rating}
        />
        <div className="row buynowinner">
          <div className="col-sm-2">
            <span className="price">Price: ${data.data.contentfulProduct.price}</span>
          </div>
          <div className="col-sm-10 text-left">
            <a
              href="#"
              className="Product snipcart-add-item"
              data-item-id={data.data.contentfulProduct.slug}
              data-item-price={data.data.contentfulProduct.price}
              data-item-image={data.data.contentfulProduct.image === null ? "" : data.data.contentfulProduct.image[0].fluid.src}
              data-item-name={data.data.contentfulProduct.productName}
              data-item-url={`/`}
            >
              <i className="fas fa-tags" />
              Buy Now
            </a>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.contentfulProduct.productDescription.childMarkdownRemark.html
          }}
        />

        <div className="Product-Screenshot">
          {data.data.contentfulProduct.productMorePhotos != null && 
            <div className="grid-3-col">
              {data.data.contentfulProduct.productMorePhotos.map((item, index) => (
                  <div key={index}><Img className="grid-image" sizes={item.fluid} /></div>
              ))}
            </div>
          } 
        </div>
      </div>
    </div>
  </Layout >
)

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug }) {
      id
      productName
      slug
      image {
        title
        file {
          contentType
          fileName
          url
        }
        fluid {
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      price
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      rating
      productMorePhotos {
        fluid {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
      quantity
      sizetypecolor
      tags
    }
  }
`
