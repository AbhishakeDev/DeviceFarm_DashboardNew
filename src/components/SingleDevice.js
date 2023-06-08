import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import './SingleDevice.css';
import img from '../android.png';
import img2 from '../android2.png';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

const SingleDevice = ({ deviceSerial,endpoint }) => {
  const [beingUsed, setBeingUsed] = useState(false);
  const [device, setDevice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReserved,setIsReserved] = useState(true);
  const [checked,setChecked] = useState(beingUsed);


  const headers1 = {
    Authorization:
      'Bearer 3843cef74f7042249cc1aca5f0a7d8226673c40d600946c0b7c134eb997dcc77',
  };
  const headers2 = {
    Authorization:
      'Bearer f774b68e0d134f1fb503c318582f524c741316cf84194799957ba4aa098ef560',
  };
  const headers3 = {
    Authorization:
      'Bearer e1cb11616e3343acaa0e031b5fd9abd338812a4964d84dafa93322247f4db169',
  };
  const headers4 = {
    Authorization:
      'Bearer a8e4b308b7c345858c1402eed34d4eb5a45e78ee93444288b653b45010ef5659',
  };
  const headers5 = {
    Authorization:
      'Bearer 192402ab37bd4f42892f0020d155428368c0775bf3c7449b944ab3566bde4d53',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      // console.log(deviceSerial);
      const result = await axios.get(`/${endpoint}/api/v1/devices/` + deviceSerial, {
        headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:(endpoint==="api3"?headers3:(endpoint==="api4"?headers4:headers5))),
      });
      setDevice(result.data.device);
      setIsLoading(false);
      console.log(result);
      setBeingUsed(result.data.device.using);
      setChecked(result.data.device.using);
      setIsReserved(result.data.device.using)
    };
    fetchInfo();
  }, [isReserved,beingUsed]);

  var reserveDevice = async (seriale) => {
    setIsReserved(true)
    const body = {
      serial: seriale,
    };
    const result = await axios.post(`/${endpoint}/api/v1/user/devices`,body, {
      headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),

    });
    console.log(result);
    if(result.data.status === 200) setIsReserved(true);
    setBeingUsed(true);
  };
  var releaseDevice = async () => {
    setIsReserved(false);
    const result = await axios.delete(`/${endpoint}/api/v1/user/devices/` + deviceSerial, {
              headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
    });
    console.log(result);
    setBeingUsed(false);
  };

  var handleChange = () => {
    if(checked === true){
      releaseDevice();
    }
    else{
      reserveDevice(deviceSerial);
    }
    setChecked(!checked)
  };

  return (
    <div className={device.present ? 'card Display bg-light mid border' : 'noDisplay'} fluid>
      {isLoading ? (
        <Spinner
          color='primary'
        >
          Loading...
        </Spinner>
      ) : (
        <Tooltip title={device.serial}>
        <div>
          {/* <h4 className='udid'>UDID : {device.serial}</h4> */}
          {isReserved !== true ?  <img
            className='img'
            src={img}
            alt=''
          /> : <img
          className='img'
          src={img2}
          alt=''
        />
        }
        {device.present ? null : <h5 className='busy text'>Not Available</h5>}
          {device.present && (
            <div>
              <h4 className='text'>
                Model : <span>{device.model}</span>
              </h4>
              <h4 className='text'>
                Android OS : <span>{device.version}</span>
              </h4>
              <h4 className='text'>
                Status :
                {beingUsed ? (
                  <span className='busy text'> Busy</span>
                ) : (
                  <span className='free text'> Free</span>
                )}
              </h4>
            </div>
          )}
          {/* <Switch
            checked={checked}
            onChange={handleChange}
            color="primary"
            name="status"
          /> */}
        </div>
        </Tooltip>
      )}
    </div>
  );
};

export default SingleDevice;
