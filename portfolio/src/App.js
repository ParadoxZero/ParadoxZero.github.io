import './App.css';
import {Header} from './components/header'
import {Body} from './components/body'

import React from 'react';

import {profile, name, picUrl, socialUrls, sections} from './data.json';
import { Footer } from './components/footer';

function App () 
{
  return (
    <>
        <div id='sticky-bg'></div>
        <Header profile={profile} name={name} picUrl={picUrl} socialUrls={socialUrls}/>
        <Body sections={sections}/>
        <Footer/>
    </>
  );
}

export default App;
