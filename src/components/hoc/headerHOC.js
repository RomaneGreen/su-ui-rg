import React, { Component } from "react";

const HeaderHOC = (WrapperComponent) => {
    return class HeaderHOC extends Component {
        showHeader(path) {
            switch (path) {
                case `${process.env.PUBLIC_URL}/`: return true
                case `${process.env.PUBLIC_URL}/dev/`: return true
                case `${process.env.PUBLIC_URL}/buyers`: return true
                case `${process.env.PUBLIC_URL}/how-it-works`: return true
                case `${process.env.PUBLIC_URL}/privacy-policy`: return true
                case `${process.env.PUBLIC_URL}/terms-and-conditions`: return true
                case `${process.env.PUBLIC_URL}/about-us`: return true
                default: return false
            }
        }
        render() {
            // if (window.location.pathname === `${process.env.PUBLIC_URL}/agent-onboarding` || window.location.pathname === `${process.env.PUBLIC_URL}/team-onboarding`) {
            //     return null;
            // }
            return this.showHeader(window.location.pathname) ?
                <WrapperComponent headerClass="fixed" {...this.props} /> : <WrapperComponent headerClass="normal" {...this.props} />
        }
    }
}

export default HeaderHOC;