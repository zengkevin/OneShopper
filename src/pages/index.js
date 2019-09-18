import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';
import { injectIntl, Link } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(56, 255, 178)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

class IndexPost extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

    // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_XrR5PG9kqyO9Dlds3guzNrBa00Z5k9kFNa")
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FpLQHDwejr73hI", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(item => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={item.node.id}>
              <div className="details_List">
                {item.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={item.node.image[0].fluid} />}

                <div className="details_inner">

                  <h2>
                    <Link to={`/${item.node.slug}`}>{item.node.productName}</Link>
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={item.node.rating}
                  />
                  <p>{item.node.productDescription.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">${item.node.price}</span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                        <a
                          href="#"
                          className="Product snipcart-add-item"
                          data-item-id={item.node.slug}
                          data-item-price={item.node.price}
                          data-item-image={item.node.image === null ? "" : item.node.image[0].fluid.src}
                          data-item-name={item.node.productName}
                          data-item-url={`/`}
                        >
                          <i className="fas fa-shopping-bag" />Add to Cart
                      </a> 
                     {/* <button
                        style={buttonStyles}
                        onClick={event => this.redirectToCheckout(event)}
                      >
                        BUY IT NOW
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (

  <Layout>
    <SEO
      lang={data.intl.locale}
      title={data.intl.formatMessage({ id: "title" })}
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />

    <div className="container">
      <div className="text-center"><h2 className="with-underline">{data.intl.formatMessage({ id: "productinfo" })}</h2></div>
      <IndexPost data={data}></IndexPost>
    </div>

    <LatestBlogs data={data.data.allContentfulBlogs} />

    <Countdown data={data.data.contentfulDealCountDown} />
  </Layout>
)

export default injectIntl(IndexPage)

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6,sort:{fields:createdAt,order: DESC}){
      edges{
        node{
          id
          productName
          slug
          rating
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          productDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
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
      }
    }
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }
    allContentfulBlogs(limit: 3,sort:{fields:createdAt,order: DESC}) {
      edges {
        node {
          id
          title
          slug
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
        }
      }
    }
  }
`



