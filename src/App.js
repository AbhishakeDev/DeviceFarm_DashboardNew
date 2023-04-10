import React from 'react';
import DeviceInfo from './DeviceInfo';
import DeviceInfo1 from './DeviceInfo1';
import DeviceInfo2 from './DeviceInfo2';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='heading'>Device Farm</h1>
      <header className='App-header'>
        <DeviceInfo />
        <DeviceInfo1/>
        <DeviceInfo2/>
      </header>
    </div>
  );
}

export default App;
