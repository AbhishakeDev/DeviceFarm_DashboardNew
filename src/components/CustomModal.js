import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CustomModal2 from './CustomModal2';
import './SingleDevice.css';

var CustomModal = ({ buttonLabel, udid }) => {
  const [modal, setModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var fetchTableData = async () => {
      const result = await axios.get(
        `http://localhost:5000/devicefarm/getDeviceRuns/` + udid
      );
      console.log(result.data);
      setTableData(result.data);
      setIsLoading(false);
    };
    fetchTableData();
  }, [modal]);

  var toggleModal = () => {
    setModal(!modal);
  };
  var colorIndicator = (el) => {
    var percent = el.passed / (el.passed + el.failed);
    console.log(percent);
    if (percent >= 0.9) return 'table-success';
    if (percent <= 0.9 && percent > 0.8) return 'table-primary';
    if (percent <= 0.8 && percent > 0.7) return 'table-warning';
    if (percent <= 0.7) return 'table-danger';
    return '';
  };

  return (
    <div>
      <Button
        className='btn btn-sm'
        color='primary'
        onClick={() => {
          toggleModal();
        }}
      >
        {buttonLabel}
      </Button>
      {isLoading && tableData.length !== 0 ? (
        <Spinner color='primary'>Loading...</Spinner>
      ) : (
        <Modal className='modal-lg' isOpen={modal} toggle={() => toggleModal()}>
          <ModalHeader toggle={() => toggleModal()}>Reports List</ModalHeader>
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
                {tableData.map((el) => {
                  return (
                    <tr className={colorIndicator(el)}>
                      <td>{el.runId}</td>
                      <td>{el.squad}</td>
                      <td>{el.suitename}</td>
                      {/* <th>{el.tests}</th> */}
                      <td>{el.passed}</td>
                      <td>{el.failed}</td>
                      <td>
                        <CustomModal2
                          buttonLabel={el.total}
                          testData={el.tests}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default CustomModal;
