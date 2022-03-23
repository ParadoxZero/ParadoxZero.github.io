import './App.css';
import {Header} from './components/header'
import {Body} from './components/body'

import React from 'react';
import {} from 'antd';

import {profile, name, picUrl, socialUrls, sections} from './data.json';

function App () 
{
  return (
    <>
        <div id='sticky-bg'></div>
        <Header profile={profile} name={name} picUrl={picUrl} socialUrls={socialUrls}/>
        <Body sections={sections}/>
        <h6>Designed by Sidhin S Thomas copyright 2022</h6>
        <h6><a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a></h6>
    </>
  );
}

export default App;
