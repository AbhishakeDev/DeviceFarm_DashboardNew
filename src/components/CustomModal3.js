import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SingleDevice.css';
import CollapseTable from './CollapseTable';

var CustomModal3 = ({ buttonLabel }) => {
  const [modal2, setModal2] = useState(false);
  var toggleModal2 = () => {
    setModal2(!modal2);
    // console.log(testData);
  };

  return (
    <div>
      <button
        className='btn-custom'
        onClick={() => {
          toggleModal2();
        }}
      >
        {buttonLabel}
      </button>
      <Modal className='modal-lg' isOpen={modal2} toggle={() => toggleModal2()}>
        <ModalHeader toggle={() => toggleModal2()}>
          <span className='modal-title'></span>Device Runs
        </ModalHeader>
        <ModalBody>
          <table className='table table-striped table-hover text'>
            <thead className='thead-dark'>
              <tr className='bg-primary white-text'>
                <th scope='col'>RunID</th>
                <th scope='col'>Squad</th>
                <th scope='col'>SuiteName</th>
                <th scope='col'>Passed</th>
                <th scope='col'>Failed</th>
                <th scope='col'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>seller</td>
                <td>sellert</td>
                {/* <th>{el.tests}</th> */}
                <td>10</td>
                <td>20</td>
                <td>
                  <CollapseTable buttonLabel='20' />
                </td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal3;
