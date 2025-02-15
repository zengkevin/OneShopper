import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

class BlogsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfPost: 6
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3;
      this.setState({
        NoOfPost: count
      });
    }
  };

  render() {

    const { data } = this.props;
    const { NoOfPost } = this.state;

    return (
      <React.Fragment>
        <ul className="blog-list" onScroll={this.onScrollEvent}>
          {data.data.allContentfulBlogs.edges.slice(0, NoOfPost).map(items => (
            <li key={items.node.slug}>
              <div className="post-item template-square columned">
                <div className="post-thumbnail">
                  <Img sizes={items.node.featureImage.fluid} />
                  <div className="post-date">
                    <i className="fas fa-calendar-alt"></i>
                    {items.node.publicData}
                  </div>
                </div>
                <div className="post-details">
                  <h2 className="post-title"><Link to={`/${items.node.slug}`}>{items.node.title}</Link></h2>
                  <div className="author">
                    <Img sizes={items.node.author.photo.fluid} />
                    <strong className="name">{items.node.author.name}</strong>
                  </div>
                  <p>{items.node.description.childMarkdownRemark.excerpt}</p>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const Blogs = data => (

  <Layout>
    <SEO
        lang={data.intl.locale}
        title={data.intl.formatMessage({ id: "blogs" })}
        keywords={[`gatsby`, `application`, `react`]}
    />
    <div className="container blog-page">
      <BlogsPost data={data}></BlogsPost>
    </div>
  </Layout>
)

export default injectIntl(Blogs)

export const query = graphql`
  query BlogsQuery {
    allContentfulBlogs {
        edges {
          node {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            author {
              name
              photo {
                fluid(maxWidth: 350) {
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
            description {
              childMarkdownRemark {
                html
              }
            }
            featureImage {
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



