import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

class Copyright extends React.Component {
    render() {

        return (
            < Layout >
                <SEO
                    lang={this.props.intl.locale}
                    title={this.props.intl.formatMessage({ id: "copyright" })}
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <div className="site-About">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Copyright</h2>
                                <p>© 2019 ITHome <FormattedMessage id="all_rights_reserved" />.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default injectIntl(Copyright)
