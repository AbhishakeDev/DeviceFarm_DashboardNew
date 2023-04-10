import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Spinner } from 'reactstrap';
import './SingleDevice.css';

const SingleDevice = ({ deviceSerial,endpoint }) => {
  const [beingUsed, setBeingUsed] = useState(false);
  const [device, setDevice] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      'Bearer 425f8b68e97c4fc39419894cde132d3f14db6dd4434040a38a954995b98fb03e',
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
      setBeingUsed(device.using);
      console.log(device.using);
    };
    fetchInfo();
  }, []);

  var reserveDevice = async (seriale) => {
    const body = {
      serial: seriale,
    };
    const result = await axios.post(`/${endpoint}/api/v1/user/devices`,body, {
      headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),

    });
    console.log(result);
    setBeingUsed(true);
  };
  var releaseDevice = async (seriale) => {
    const result = await axios.delete(`/${endpoint}/api/v1/user/devices/` + deviceSerial, {
              headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
    });
    console.log(result);
    setBeingUsed(false);
  };

  return (
    <Container className={device.present ? 'Display bg-light mid border' : 'noDisplay'} fluid>
      {isLoading ? (
        <Spinner
          color='primary'
          style={{
            height: '3rem',
            width: '3rem',
          }}
        >
          Loading...
        </Spinner>
      ) : (
        <div>
          {device.present ? null : <h5 className='busy text'>Not Available</h5>}
          {device.present && (
            <div>
              <h4 className='text'>
                Battery : <span>{device.battery.level}</span>
              </h4>
              <h4 className='text'>
                Android OS : <span>{device.version}</span>
              </h4>
              <h4 className='text'>
                Status :
                {beingUsed ? (
                  <h5 className='busy text'>Busy</h5>
                ) : (
                  <h4 className='free text'>Free</h4>
                )}
              </h4>
            </div>
          )}
          {/* <h4 className='text'>{device.product}</h4> */}
          <h4 className='text udid'>UDID : {device.serial}</h4>
          <img
            className='img'
            src='https://rukminim1.flixcart.com/image/416/416/k41mp3k0/mobile/f/k/d/realme-x2-rmx1992-original-imafnfe8gu3ghess.jpeg?q=70'
            alt=''
          />
          {device.present && (
            <div className='btn-container'>
              <Button
                className='btn'
                Button
                color='warning'
                disabled={beingUsed}
                onClick={() => reserveDevice(device.serial)}
                // onClick={() => this.reserveDevice(deviceDetail.devices[0].serial)}
              >
                Reserve Device
              </Button>
              <Button
                className='btn'
                color='danger'
                disabled={!beingUsed}
                onClick={() => releaseDevice(device.serial)}
                // onClick={() => this.reserveDevice(deviceDetail.devices[0].serial)}
              >
                Release Device
              </Button>
              <a
                target='_blank'
                rel='noreferrer'
                href={`${endpoint}/#!/control/` + device.serial}
              >
                <Button className='btn' color='primary'>
                  Realtime View
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default SingleDevice;
