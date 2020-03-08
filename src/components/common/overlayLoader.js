import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'react-emotion';
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    position: relative;
    top: 45%;
`;

const loaderComponent = () => {
  return (
    <div className='sweet-loading'>
      <ScaleLoader
        className={override}
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={true}
        width={8}
        height={50}
      />
    </div>
  )
}

class OverlayLoader extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.getElementsByTagName('body')[0];
    var root = document.getElementById('root');
    this.loader = document.createElement('div');
    this.loader.setAttribute('class', 'overlayLoader');

    this.body.insertBefore(this.loader, root);
  }
  componentWillUnmount(){
    this.body.removeChild(this.loader);
  }
  render() {
    return ReactDOM.createPortal(loaderComponent(), this.loader);
  }
}

export default OverlayLoader;