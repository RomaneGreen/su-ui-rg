import React, { Component } from "react";
import AwesomeComponent from "../common/loader";

const LoaderHOC = (propName) => (WrapperComponent) => {
    return class LoaderHOC extends Component {
        isEmpty(prop) {
            return(prop === null || prop === undefined || prop.length === 0 || Object.keys(prop).length === 0);
        }
        render() {
            return this.isEmpty(this.props[propName]) ? <AwesomeComponent /> 
            : <WrapperComponent {...this.props}/>
        }
    }
}

export default LoaderHOC