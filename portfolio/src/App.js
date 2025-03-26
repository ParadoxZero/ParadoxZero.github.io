import './App.css';
import { Header } from './components/header'
import { Body } from './components/body'

import React from 'react';

import { default as data } from './data.json';
import { Footer } from './components/footer';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          borderRadius: 10,
          colorPrimary: '#0958d9',
          colorTextBase: '#262626',
          colorLink: '#001d66',
        },
        components: {
          Card: {
            colorBorder: '#0958d9',
          }
        }
      }}>
        <Header profile={data.profile} name={data.name} picUrl={data.picUrl} socialUrls={data.socialUrls} />
        <Body sections={data.sections} />
        <Footer content={data.footer} />
      </ConfigProvider>
    </>
  );
}

export default App;
