import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/stylesheets/custom.css';
import 'react-circular-progressbar/dist/styles.css';

export default function MyApp({Component,pageProps}) {
    return <Component {...pageProps}/>
}