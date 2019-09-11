import React, { Component } from "react";
import Img from "gatsby-image"
//import { Link } from "gatsby"
import { Link, FormattedMessage } from "gatsby-plugin-intl"

export default class LatestBlogs extends React.Component {
    render() {

        const { data } = this.props;

        return (
            <div className="container">
                <div className="text-center"><h2 className="with-underline"><FormattedMessage id="latest_blogs" /></h2></div>
                <ul className="latest-blog">
                    {data.edges.map(items => (
                        <li key={items.node.id}>
                            <div className="inner">
                                <Link to={items.node.slug}>{items.node.title}</Link>
                                <Img sizes={items.node.featureImage.fluid} />
                                <h2>{items.node.title}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}