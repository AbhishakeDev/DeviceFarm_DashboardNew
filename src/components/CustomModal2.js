import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SingleDevice.css';

var CustomModal2 = ({ buttonLabel, testData }) => {
  const [modal2, setModal2] = useState(false);
  var toggleModal2 = () => {
    setModal2(!modal2);
    console.log(testData);
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
        <ModalHeader toggle={() => toggleModal2()}>Tests List</ModalHeader>
        <ModalBody>
          <table className='table table-striped text'>
            <thead className='bg-primary white-text'>
              <tr>
                <th scope='col'>TestName</th>
                <th scope='col'>Result</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(testData).map((el, index) => {
                return (
                  <tr
                    className={
                      Object.values(testData)[index] === 'passed'
                        ? 'table-primary'
                        : 'table-danger'
                    }
                  >
                    <td>{Object.keys(testData)[index]}</td>
                    <td>{Object.values(testData)[index]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal2;
