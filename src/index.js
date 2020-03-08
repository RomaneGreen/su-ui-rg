import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/root';
import * as serviceWorker from './serviceWorker';

if (window.matchMedia("(max-width: 767px)").matches)
    window.SB_IsMobileView = true;
else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches)
    window.SB_IsTabletView = true;
else
    window.SB_IsDesktopView = true;

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
