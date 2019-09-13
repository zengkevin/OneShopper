import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
//import lipstickVideo from "../videos/lipstickfilm.mp4"

export default class LatestBlogs extends React.Component {
    render() {

        const { data } = this.props;

        return (
            <div className="container">
                <div className="text-center"><h2 className="with-underline"><FormattedMessage id="latest_blogs" /></h2></div>
                <ul className="latest-blog">
                    {/* <li key="lipstickfilm">
                        <div>
                            <video controls autoplay>
                                <source src={lipstickVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        </li> */}
                    {data.edges.map(item => (
                        <li key={item.node.id}>
                            <Link to={item.node.slug}>
                            <div className="inner">
                                {item.node.featureImage.file.contentType.indexOf("video") >= 0 ? 
                                    <iframe
                                    src={item.node.featureImage.file.url}
                                    title={item.node.title}
                                    allow=""
                                    frameBorder="0"
                                    webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    allowFullScreen
                                    /> : <Img sizes={item.node.featureImage.fluid} />
                                }
                                <h2>{item.node.title}</h2>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}