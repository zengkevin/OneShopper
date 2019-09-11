import React, { Component } from "react";
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
                    {data.edges.map(items => (
                        <li key={items.node.id}>
                            <div className="inner">
                                <Link to={items.node.slug}>{items.node.title}</Link>
                                    { items.node.featureImage.file.contentType.indexOf("video") >= 0 ? 
                                        <div>
                                            <iframe
                                            src={items.node.featureImage.file.url}
                                            title={items.node.title}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            frameBorder="0"
                                            webkitallowfullscreen="true"
                                            mozallowfullscreen="true"
                                            allowFullScreen
                                            />
                                        </div> : <Img sizes={items.node.featureImage.fluid} /> 
                                    }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}