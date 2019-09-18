/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({
//  setHeadComponents,
//  setPreBodyComponents,
  setPostBodyComponents,
}) => {
//  setHeadComponents([
////    <script
//      key="1"
//      type="text/javascript"
//      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
//    />,
//  ])
//  setPreBodyComponents([
//    <script
//      key="2"
//      type="text/javascript"
//      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
//    />,
//  ])
  setPostBodyComponents([
    <script src="https://js.stripe.com/v3/"></script>
  ])
}