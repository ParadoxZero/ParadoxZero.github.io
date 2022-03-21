import './App.css';
import {Header} from './components/header'
import {Body} from './components/body'

import React from 'react';
import { Layout, Menu, Breadcrumb, Image, Grid, Row } from 'antd';

import {Sections, profile, name, picUrl, socialUrls, sections} from './data.json';

const { Content, Footer } = Layout;

function App () 
{
  return (
    <>
        <Header profile={profile} name={name} picUrl={picUrl} socialUrls={socialUrls}/>
        <Body sections={sections}/>
    </>
  );
}

export default App;
