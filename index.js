import React from 'react';
import ReactDom from 'react-dom';
import './main.css';

const HelloWorld = () => {
    return(
        <div className="main">
            <h1>This is Parcel Bundler Demo</h1>
        </div>
    )
};

ReactDom.render(<HelloWorld></HelloWorld>,document.getElementById('App'));