
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Spinner} from 'reactstrap';
import axios from 'axios';
import './SingleDevice.css';
import CustomModalSquad from './CustomModalSquad';

function SquadDropDown() {
    const [squadData,setSquadData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    useEffect(()=>{
    var getSquadData = async () => {
        const result = await axios.get(
            `api8/devicefarm/getAllSquads`
          );
          console.log(result.data);
          setSquadData(result.data);
    }
    getSquadData();
    },[dropdownOpen])

  const toggle = () =>{
    setDropdownOpen(!dropdownOpen);
  }

  return (
    // <div className="d-flex dropdown text">
    //   <Dropdown  className='dropdown-btn' isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
    //     <DropdownToggle color="dark" caret><span className='text squad'>Squad</span></DropdownToggle>
    //     <DropdownMenu>
    //         {squadData.map((el,index) => <DropdownItem key={index}><CustomModalSquad buttonLabel={el} squad={el}/></DropdownItem>)}
    //     </DropdownMenu>
    //   </Dropdown>

    // </div>
    <Dropdown size="sm" className="d-inline mx-2 text dropdown" autoClose="outside">
    <Dropdown.Toggle className='text' id="dropdown-autoclose-outside">
      Squad
    </Dropdown.Toggle>

    <Dropdown.Menu>
    {squadData.length > 0 ? <>
      {squadData.map((el,index) => <Dropdown.Item className='text' key={index}><CustomModalSquad buttonLabel={el} squad={el}/></Dropdown.Item>)}</> : <Spinner
          color='dark'
        >
          Loading...
        </Spinner>}
    
    </Dropdown.Menu>
  </Dropdown>

  );
}

export default SquadDropDown;