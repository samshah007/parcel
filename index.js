import React from 'react';
import ReactDom from 'react-dom';

const HelloWorld = () => {
    return(
        <div>
            <h1>This is Parcel Bundler Demo</h1>
        </div>
    )
};

ReactDom.render(<HelloWorld></HelloWorld>,document.getElementById('App'));