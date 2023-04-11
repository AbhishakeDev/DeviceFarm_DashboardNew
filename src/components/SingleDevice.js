import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Spinner } from 'reactstrap';
import './SingleDevice.css';
import img from '../MicrosoftTeams-image.png';

const SingleDevice = ({ deviceSerial,endpoint }) => {
  const [beingUsed, setBeingUsed] = useState(false);
  const [device, setDevice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReserved,setIsReserved] = useState(true);
  const [isReleased,setIsReleased] = useState(true);


  const headers1 = {
    Authorization:
      'Bearer 79b374d9c1ba493b824972456e0c5c74d0256e2b8dd0471fac9a6ee4a89b081b',
  };
  const headers2 = {
    Authorization:
      'Bearer b08255efb866439695382c3f9884b2e4bf1674e85561435c856624806ef795e2',
  };
  const headers3 = {
    Authorization:
      'Bearer 8bd7715eb63346acaec3bf0247266e11bbfaf233df224981815a45f75527f52f',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      // console.log(deviceSerial);
      const result = await axios.get(`/${endpoint}/api/v1/devices/` + deviceSerial, {
        headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
      });
      setDevice(result.data.device);
      setIsLoading(false);
      console.log(result);
      setBeingUsed(result.data.device.using);
      console.log(result.data.device.using)
    };
    fetchInfo();
  }, [isReleased,isReserved,beingUsed]);

  var reserveDevice = async (seriale) => {
    const body = {
      serial: seriale,
    };
    const result = await axios.post(`/${endpoint}/api/v1/user/devices`,body, {
      headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),

    });
    console.log(result);
    if(result.data.status === 200) setIsReserved(true);
    setBeingUsed(true);
    console.log(isReleased,isReserved)
  };
  var releaseDevice = async (seriale) => {
    const result = await axios.delete(`/${endpoint}/api/v1/user/devices/` + deviceSerial, {
              headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
    });
    console.log(result);
    if(result.data.status === 200) setIsReleased(true);
    setBeingUsed(false);
    console.log(isReleased,isReserved)
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
        <div>
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
          {/* <h4 className='text'>{device.product}</h4> */}
          <h4 className='udid'>UDID : {device.serial}</h4>
          {isReleased === true || isReserved === true ?  <img
            className='img'
            src={img}
            alt=''
          /> : <Spinner
          color='primary'
        >
          Loading...
        </Spinner>}
          {device.present && (
            <div className='btn-container'>
              <Button
                className='btn-sm'
                Button
                color='warning'
                disabled={beingUsed}
                onClick={() => reserveDevice(device.serial)}
                // onClick={() => this.reserveDevice(deviceDetail.devices[0].serial)}
              >
                Reserve
              </Button>
              <Button
                className='btn-sm'
                color='danger'
                disabled={!beingUsed}
                onClick={() => releaseDevice(device.serial)}
                // onClick={() => this.reserveDevice(deviceDetail.devices[0].serial)}
              >
                Release
              </Button>
              <a
                target='_blank'
                rel='noreferrer'
                href={`${endpoint}/#!/control/` + device.serial}
              >
                <Button className='btn-sm' color='primary'>
                  View
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleDevice;
