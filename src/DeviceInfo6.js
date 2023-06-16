import React from 'react';
import { useEffect, useState } from 'react';
import SingleDeviceIos from './components/SingleDeviceIos';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';
import arrow from './arrow.png';


const DeviceInfo6 = () => {
  const [deviceDetail3, setDeviceDetail3] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
        const result3 = {data : {"devices": [
            {
              "abi": "arm64e",
              "channel": "9QUqRiJpTlCdkCSktL/F85FduvA=",
              "cpuPlatform": "",
              "createdAt": "2023-05-04T04:03:35.902Z",
              "display": {
                "density": 1,
                "fps": 60,
                "height": 2436,
                "id": 0,
                "rotation": 0,
                "secure": true,
                "size": 0,
                "url": "wss://10.30.1.30/frames/10.177.113.205/8000/x",
                "width": 1126,
                "xdpi": 0,
                "ydpi": 0
              },
              "group": {
                "class": "standard",
                "id": "f80f023dc9164deb8a3e107a84606192",
                "lifeTime": {
                  "start": "2023-04-27T11:43:54.444Z",
                  "stop": "2024-04-26T11:43:54.444Z"
                },
                "lock": false,
                "name": "Common",
                "origin": "f80f023dc9164deb8a3e107a84606192",
                "originName": "Common",
                "owner": {
                  "email": "administrator@fakedomain.com",
                  "name": "administrator"
                },
                "repetitions": 0
              },
              "logs_enabled": false,
              "manufacturer": "Apple",
              "marketName": null,
              "model": "iPhone XS",
              "notes": "Iphone xs",
              "openGLESVersion": "",
              "operator": "",
              "owner": null,
              "phone": {
                "iccid": "nil",
                "imei": "",
                "imsi": "nil",
                "network": "",
                "phoneNumber": ""
              },
              "platform": "iOS",
              "presenceChangedAt": "2023-06-16T10:32:48.867Z",
              "present": true,
              "product": "iPhone XS",
              "provider": {
                "channel": "YBbJCTgwTGenszq3+kg10A==",
                "name": "macmini/Pramoth-MacBook-Pro-2.local"
              },
              "ready": true,
              "remoteConnect": false,
              "remoteConnectUrl": null,
              "reverseForwards": [],
              "sdk": "",
              "serial": "00008020-000D0C201182002E",
              "status": 3,
              "statusChangedAt": "2023-06-16T10:32:48.859Z",
              "usage": null,
              "usageChangedAt": "2023-06-16T10:33:13.217Z",
              "version": "15.7.1",
              "using": false
            },
            {
              "abi": "arm64",
              "channel": "xccYH5YMPUz2XYM5lVoPGUKLLGU=",
              "cpuPlatform": "",
              "createdAt": "2023-06-16T05:13:37.640Z",
              "display": {
                "density": 1,
                "fps": 60,
                "height": 1334,
                "id": 0,
                "rotation": 0,
                "secure": true,
                "size": 0,
                "url": "wss://10.30.1.30/frames/10.177.114.234/8000/x",
                "width": 750,
                "xdpi": 0,
                "ydpi": 0
              },
              "group": {
                "class": "standard",
                "id": "f80f023dc9164deb8a3e107a84606192",
                "lifeTime": {
                  "start": "2023-04-27T11:43:54.444Z",
                  "stop": "2024-04-26T11:43:54.444Z"
                },
                "lock": false,
                "name": "Common",
                "origin": "f80f023dc9164deb8a3e107a84606192",
                "originName": "Common",
                "owner": {
                  "email": "administrator@fakedomain.com",
                  "name": "administrator"
                },
                "repetitions": 0
              },
              "logs_enabled": false,
              "manufacturer": "Apple",
              "marketName": null,
              "model": "iPhone 7",
              "openGLESVersion": "",
              "operator": "",
              "owner": null,
              "phone": {
                "iccid": "nil",
                "imei": "",
                "imsi": "nil",
                "network": "",
                "phoneNumber": ""
              },
              "platform": "iOS",
              "presenceChangedAt": "2023-06-16T06:23:46.850Z",
              "present": false,
              "product": "Mobile app’s iPhone",
              "provider": {
                "channel": "NEZuLcKaSJuVU7cbV/ls2w==",
                "name": "macmini/Pramoth-MacBook-Pro.local"
              },
              "ready": true,
              "remoteConnect": false,
              "remoteConnectUrl": null,
              "reverseForwards": [],
              "sdk": "",
              "serial": "e77ef65557d7509855828f915083083402e6cebe",
              "status": 3,
              "statusChangedAt": "2023-06-16T06:20:07.575Z",
              "usage": null,
              "usageChangedAt": "2023-06-16T06:20:37.799Z",
              "version": "15.7",
              "using": false
            },
            {
              "abi": "arm64",
              "channel": "CZ4OxYH09VRynWi4MpKvA4Drwaw=",
              "cpuPlatform": "",
              "createdAt": "2023-06-16T06:37:17.596Z",
              "display": {
                "density": 1,
                "fps": 60,
                "height": 1334,
                "id": 0,
                "rotation": 0,
                "secure": true,
                "size": 0,
                "url": "wss://10.30.1.30/frames/10.177.114.234/8000/x",
                "width": 750,
                "xdpi": 0,
                "ydpi": 0,
                "inches": 4.7
              },
              "group": {
                "class": "standard",
                "id": "f80f023dc9164deb8a3e107a84606192",
                "lifeTime": {
                  "start": "2023-04-27T11:43:54.444Z",
                  "stop": "2024-04-26T11:43:54.444Z"
                },
                "lock": false,
                "name": "Common",
                "origin": "f80f023dc9164deb8a3e107a84606192",
                "originName": "Common",
                "owner": {
                  "email": "administrator@fakedomain.com",
                  "name": "administrator"
                },
                "repetitions": 0
              },
              "logs_enabled": false,
              "manufacturer": "Apple",
              "marketName": null,
              "model": "iPhone 6",
              "openGLESVersion": "",
              "operator": "",
              "owner": null,
              "phone": {
                "iccid": "nil",
                "imei": "",
                "imsi": "nil",
                "network": "",
                "phoneNumber": ""
              },
              "platform": "iOS",
              "presenceChangedAt": "2023-06-16T10:18:16.922Z",
              "present": false,
              "product": "Coviam",
              "provider": {
                "channel": "Ieiei7grShG3WYJSmyxadg==",
                "name": "macmini/Pramoth-MacBook-Pro.local"
              },
              "ready": true,
              "remoteConnect": false,
              "remoteConnectUrl": null,
              "reverseForwards": [],
              "sdk": "",
              "serial": "8753286bba7e80c32a82f6fec6b09d83d0cb3108",
              "status": 3,
              "statusChangedAt": "2023-06-16T10:16:57.130Z",
              "usage": null,
              "usageChangedAt": "2023-06-16T10:17:45.515Z",
              "version": "12.5.5",
              "name": "iPhone 6",
              "releasedAt": "2014-09-18T15:00:00.000Z",
              "image": "iPhone_6.jpg",
              "cpu": {
                "cores": 2,
                "freq": 1.4,
                "name": "Apple A8"
              },
              "memory": {
                "ram": 1024,
                "rom": 131072
              },
              "using": false
            },
            {
              "abi": "arm64e",
              "channel": "EjdnQSZNuZoBilRrYpcMetABRx0=",
              "cpuPlatform": "",
              "createdAt": "2023-05-04T05:17:12.468Z",
              "display": {
                "density": 1,
                "fps": 60,
                "height": 1792,
                "id": 0,
                "rotation": 0,
                "secure": true,
                "size": 0,
                "url": "wss://10.30.1.30/frames/10.177.118.203/8001/x",
                "width": 828,
                "xdpi": 0,
                "ydpi": 0
              },
              "group": {
                "class": "standard",
                "id": "f80f023dc9164deb8a3e107a84606192",
                "lifeTime": {
                  "start": "2023-04-27T11:43:54.444Z",
                  "stop": "2024-04-26T11:43:54.444Z"
                },
                "lock": false,
                "name": "Common",
                "origin": "f80f023dc9164deb8a3e107a84606192",
                "originName": "Common",
                "owner": {
                  "email": "administrator@fakedomain.com",
                  "name": "administrator"
                },
                "repetitions": 0
              },
              "logs_enabled": false,
              "manufacturer": "Apple",
              "marketName": null,
              "model": "iPhone XS",
              "notes": "Iphone 11",
              "openGLESVersion": "",
              "operator": "",
              "owner": null,
              "phone": {
                "iccid": "nil",
                "imei": "",
                "imsi": "nil",
                "network": "",
                "phoneNumber": ""
              },
              "platform": "iOS",
              "presenceChangedAt": "2023-05-17T08:30:55.200Z",
              "present": false,
              "product": "iPhone 11",
              "provider": {
                "channel": "yVJRGiCCRr+2WCCDHa7TDA==",
                "name": "macmini/Pramoth-MacBook-Pro.local"
              },
              "ready": true,
              "remoteConnect": false,
              "remoteConnectUrl": null,
              "reverseForwards": [],
              "sdk": "",
              "serial": "00008030-000E61C40206802E",
              "status": 3,
              "statusChangedAt": "2023-05-09T05:34:36.816Z",
              "usage": null,
              "usageChangedAt": "2023-05-09T13:30:16.856Z",
              "version": "16.1.1",
              "using": false
            },
            {
              "abi": "arm64e",
              "channel": "9pOflQmgRxjG/fvtjxKTZHj0WhQ=",
              "cpuPlatform": "",
              "createdAt": "2023-05-31T11:13:20.353Z",
              "display": {
                "density": 1,
                "fps": 60,
                "height": 2532,
                "id": 0,
                "rotation": 0,
                "secure": true,
                "size": 0,
                "url": "wss://10.30.1.30/frames/10.177.117.93/8000/x",
                "width": 1170,
                "xdpi": 0,
                "ydpi": 0
              },
              "group": {
                "class": "standard",
                "id": "f80f023dc9164deb8a3e107a84606192",
                "lifeTime": {
                  "start": "2023-04-27T11:43:54.444Z",
                  "stop": "2024-04-26T11:43:54.444Z"
                },
                "lock": false,
                "name": "Common",
                "origin": "f80f023dc9164deb8a3e107a84606192",
                "originName": "Common",
                "owner": {
                  "email": "administrator@fakedomain.com",
                  "name": "administrator"
                },
                "repetitions": 0
              },
              "logs_enabled": false,
              "manufacturer": "Apple",
              "marketName": null,
              "model": "iPhone 12",
              "notes": "iPhone 12",
              "openGLESVersion": "",
              "operator": "",
              "owner": null,
              "phone": {
                "iccid": "nil",
                "imei": "",
                "imsi": "nil",
                "network": "",
                "phoneNumber": ""
              },
              "platform": "iOS",
              "presenceChangedAt": "2023-06-16T09:03:57.813Z",
              "present": false,
              "product": "iPhone",
              "provider": {
                "channel": "zEEJqJjgS9GCs3fWVfpfRA==",
                "name": "macmini/Pramoth-MacBook-Pro-2.local"
              },
              "ready": true,
              "remoteConnect": false,
              "remoteConnectUrl": null,
              "reverseForwards": [],
              "sdk": "",
              "serial": "00008101-000C28481468801E",
              "status": 3,
              "statusChangedAt": "2023-06-16T08:31:14.254Z",
              "usage": null,
              "usageChangedAt": "2023-06-16T08:59:25.073Z",
              "version": "16.4.1",
              "using": false
            }
          ]}}
      console.log(result3);
      let arr3 = result3?.data?.devices.map((el) => el.serial);
      let arr4 = result3?.data?.devices;
      setDeviceData(arr4);
      setDeviceDetail3(arr3);
      setIsLoading(false);
      setBeingUsed(result3.data.devices[0].using);
    };
    fetchInfo();
  }, [beingUsed]);

  return (
    <div className='parent-mid'><div className='mid container-mid'>
      {isLoading ? (
        <Spinner
          color='dark'
        >
          Loading...
        </Spinner>
      ) : (
        deviceData &&
        deviceData.map((el, index) => (
          <SingleDeviceIos className='device-card' data={el} key={index} deviceSerial={el.serial} endpoint="api7"/>
        ))
      )}
    <div className='nav-container'><a target="_blank" href="api7"><img src={arrow} className="arrow" /></a></div>
    </div>
    </div>
  );
};

export default DeviceInfo6;