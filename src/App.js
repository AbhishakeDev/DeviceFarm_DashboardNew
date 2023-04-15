import React from 'react';
import DeviceInfo from './DeviceInfo';
import DeviceInfo1 from './DeviceInfo1';
import DeviceInfo2 from './DeviceInfo2';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='heading'>
      <img src={logo} className="logo"/>
      <span className='heading-text'>Blibli Device Farm</span>
      </div>
      <header className='App-header'>
        <DeviceInfo />
        {/* <DeviceInfo1/> */}
        {/* <DeviceInfo2/> */}
      </header>
    </div>
  );
}

export default App;
