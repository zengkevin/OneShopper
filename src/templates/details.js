import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = data => (
  < Layout >

    <SEO title={data.data.contentfulProduct.productName} keywords={[`gatsby`, `application`, `react`]} />
    <div className="container details-page">
      <div className="product-details">
        <div className="Product-Screenshot">
          {data.data.contentfulProduct.productMorePhotos === null ? <div className="no-image">No Image</div> :
            <Tabs>

              <TabList>
                {data.data.contentfulProduct.productMorePhotos.map(items => (
                  <Tab key={items.id}><img src={items.fixed.src} /></Tab>
                ))}
              </TabList>
            </Tabs>}

        </div>
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
              data-item-image={data.data.contentfulProduct.image === null ? "" : data.data.contentfulProduct.image.fixed.src}
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
        fixed(width: 1120, height: 500) {
          width
          height
          src
          srcSet
        }
      }
      price
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      rating
    }
  }
`
