import React from 'react';
import DeviceInfo from './DeviceInfo';
import DeviceInfo1 from './DeviceInfo1';
import DeviceInfo2 from './DeviceInfo2';
import DeviceInfo3 from './DeviceInfo3';
import DeviceInfo4 from './DeviceInfo4';
import logo from './logo.png'
import './App.css';
import SquadDropDown from './components/SquadDropDown';

function App() {
  return (
    <div className='App'>
      <div className='heading'>
      <img src={logo} className="logo"/>
      <span className='heading-text'>Blibli Device Farm</span>
      <SquadDropDown className="dropdown-container"/>
      </div>
      <header className='App-header'>
        <DeviceInfo />
        <DeviceInfo1/>
        <DeviceInfo2/>
        <DeviceInfo3/>
        <DeviceInfo4/>
      </header>
    </div>
  );
}

export default App;
