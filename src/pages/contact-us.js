import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

class Contact extends React.Component {
    render() {

        return (
            < Layout >
                <SEO
                    lang={this.props.intl.locale}
                    title={this.props.intl.formatMessage({ id: "contact" })}
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <div className="Contact-us">
                    <div className="container">
                        {/* To make form work, use your own formspree credentials in action="" */}
                        <form action="https://formspree.io/youremail@domain.com" method="POST" name="contact">
                            <div>
                                <label><FormattedMessage id="your_name" />: </label>
                                <input type="text" name="name" />
                            </div>
                            <div>
                                <label><FormattedMessage id="your_email" />: </label>
                                <input type="email" name="email" />
                            </div>
                            <div>
                                <label><FormattedMessage id="message" />: </label>
                                <textarea name="message"></textarea>
                            </div>
                            <div>
                                <button type="submit"><FormattedMessage id="send" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default injectIntl(Contact)
