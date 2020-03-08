import React, { Component } from "react";
import CopyRightFooter from "../footer/copyRightFooter";

const FooterHOC = (FullFooter) => {
    return class FooterHOC extends Component {  
        render() {
            if(window.location.pathname === "/agent-onboarding" || window.location.pathname === "/team-onboarding") {
                return null;
            }
           else if(window.location.pathname === "/user-login/agent-login" || window.location.pathname === "/user-login/admin-login") {
                return <CopyRightFooter />;
            }
            return <FullFooter {...this.props}/>
        }
    }
}

export default FooterHOC;