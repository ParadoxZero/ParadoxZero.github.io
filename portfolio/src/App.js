import './App.css';
import {Header} from './components/header'
import {Body} from './components/body'

import React from 'react';

import { default as data} from './data.json';
import { Footer } from './components/footer';

function App () 
{
  return (
    <>
        <div id='sticky-bg'></div>
        <Header profile={data.profile} name={data.name} picUrl={data.picUrl} socialUrls={data.socialUrls}/>
        <Body sections={data.sections}/>
        <Footer content={data.footer}/>
    </>
  );
}

export default App;
