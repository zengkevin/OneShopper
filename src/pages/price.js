import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "6px 10px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
}

const priceList = [
    {q: 1, rmbp: 188, cadp: 40, sku: "sku_FpLQHDwejr73hI"},
    {q: 2, rmbp: 188, cadp: 40, sku: "sku_FpLQHDwejr73hI"},
    {q: 3, rmbp: 188, cadp: 40, sku: "sku_FpLQHDwejr73hI"},
    {q: 4, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 5, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 6, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 7, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 8, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 9, rmbp: 150, cadp: 32.5, sku: "sku_FpkHVYMaLKxFJZ"},
    {q: 10, rmbp: 125, cadp: 28, sku: "sku_FpkIkoBT4UlEvy"},
    {q: 50, rmbp: 110, cadp: 25, sku: "sku_FpkI1Wybk5Mfyf"},
    {q: 100, rmbp: 110, cadp: 25, sku: "sku_FpkI1Wybk5Mfyf"},
    {q: 200, rmbp: 110, cadp: 25, sku: "sku_FpkI1Wybk5Mfyf"},
    {q: 300, rmbp: 80, cadp: 18, sku: "sku_FpkJkMWrGW1wpR"}
];

const Price = class extends React.Component {
    // Initialise Stripe.js with your publishable key.
    // You can find your key in the Dashboard:
    // https://dashboard.stripe.com/account/apikeys
    componentDidMount() {
        this.stripe = window.Stripe("pk_test_XrR5PG9kqyO9Dlds3guzNrBa00Z5k9kFNa")
    }

    async redirectToCheckout(event, item) {
        event.preventDefault()
        const { error } = await this.stripe.redirectToCheckout({
        items: [{ sku: item.sku, quantity: item.q }],
        successUrl: `http://localhost:8000/success`,
        cancelUrl: `http://localhost:8000/canceled`,
        })

        if (error) {
        console.warn("Error:", error)
        }
    }

    render() {
        return ( 
            <Layout>
            <SEO
                lang={this.props.intl.locale}
                title={this.props.intl.formatMessage({ id: "prices" })}
                keywords={[`gatsby`, `application`, `react`]}
            />
            <div className = "site-About" >
            <div className="container">
            <div className="row">
                <div className="col-sm-12">

                <h2><FormattedMessage id="prices" /></h2>

                <table className="priceTable">
                <tbody>
                    <tr>
                        <th><FormattedMessage id="quantity" /></th>
                        {priceList.map((item, index)=>{
                            return <th key={index}>{item.q}</th>
                        })}
                    </tr>
                    <tr>
                        <th><FormattedMessage id="YMBunitprice" /></th>
                        {priceList.map((item, index)=>{
                            return <td key={index}>¥{item.rmbp}</td>
                        })}
                    </tr>
                    <tr>
                        <th><FormattedMessage id="YMB" /></th>
                        {priceList.map((item, index)=>{
                            return (<td key={index} className="cellBuyNow">¥{item.rmbp * item.q}
                                    {/* <button style={buttonStyles} className="linkBuyNow"
                                        onClick={event => this.redirectToCheckout(event, item)}
                                    ><FormattedMessage id="buy" /> {item.q} <FormattedMessage id="inchina" /></button> */}
                                    <Link style={buttonStyles} className="linkBuyNow" 
                                        to={"/contact-us?quantity=" + item.q}>
                                        <FormattedMessage id="buy" /> {item.q} <FormattedMessage id="inchina" /></Link>
                                    </td>)
                        })}
                    </tr>
                    <tr>
                        <th><FormattedMessage id="CADunitprice" /></th>
                        {priceList.map((item, index)=>{
                            return <td key={index}>${item.cadp}</td>
                        })}
                    </tr>
                    <tr>
                        <th><FormattedMessage id="CAD" /></th>
                        {priceList.map((item, index)=>{
                            return (<td key={index} className="cellBuyNow">${item.cadp * item.q}
                                    {/* <button style={buttonStyles} className="linkBuyNow"
                                        onClick={event => this.redirectToCheckout(event, item)}
                                        ><FormattedMessage id="buy" /> {item.q} <FormattedMessage id="incanada" /></button> */}
                                        <Link style={buttonStyles} className="linkBuyNow" 
                                        to={"/contact-us?quantity=" + item.q}>
                                        <FormattedMessage id="buy" /> {item.q} <FormattedMessage id="incanada" />
                                        </Link>
                                    </td>)
                        })}
                    </tr>
                </tbody>
                </table>

                </div>
            </div>
            </div> 
            </div> 
            </Layout>
        )
    }
}
export default injectIntl(Price)