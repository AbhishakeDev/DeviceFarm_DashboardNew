import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import './SingleDevice.css';
import img from '../apple2.png';
import img2 from '../apple.png';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import CustomModal from './CustomModal';

const SingleDevice = ({ deviceSerial,data }) => {
  const [beingUsed, setBeingUsed] = useState(data.using);
  const [device, setDevice] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [isReserved, setIsReserved] = useState(data.using);
  const [checked, setChecked] = useState(beingUsed);



  return (
    <div
      className={
        device.present ? 'card Display bg-light mid border' : 'noDisplay'
      }
      fluid
    >
        <Tooltip title={device.serial}>
          <div>
            {/* <h4 className='udid'>UDID : {device.serial}</h4> */}
            {isReserved !== true ? (
              <img className='img' src={img} alt='' />
            ) : (
              <img className='img' src={img2} alt='' />
            )}
            {device.present ? null : (
              <h5 className='busy text'>Not Available</h5>
            )}
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
                <CustomModal buttonLabel='Report' udid={deviceSerial} />
              </div>
            )}
          </div>
        </Tooltip>
    </div>
  );
};

export default SingleDevice;
