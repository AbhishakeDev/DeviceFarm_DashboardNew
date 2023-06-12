import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

var CustomModal2 = ({ buttonLabel, testData }) => {
  const [modal2, setModal2] = useState(false);
  var toggleModal2 = () => {
    setModal2(!modal2);
    console.log(testData);
  };

  return (
    <div>
      <Button
        className='btn-sm'
        onClick={() => {
          toggleModal2();
        }}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal2} toggle={() => toggleModal2()}>
        <ModalHeader toggle={() => toggleModal2()}>Reports List</ModalHeader>
        <ModalBody>
          <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>TestName</th>
                <th scope='col'>Result</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(testData).map((el, index) => {
                return (
                  <tr>
                    <th>{Object.keys(testData)[index]}</th>
                    <th>{Object.values(testData)[index]}</th>
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
