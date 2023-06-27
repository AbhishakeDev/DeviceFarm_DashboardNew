import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CustomModal2 from './CustomModal2';
import CollapseTable from './CollapseTable';
import './SingleDevice.css';

var CustomModal = ({ buttonLabel, udid }) => {
  const [modal, setModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var fetchTableData = async () => {
      const result = await axios.get(
        `api8/devicefarm/getDeviceRuns/` + udid
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
      <button
        className='card-btn'
        onClick={() => {
          toggleModal();
        }}
      >
        {buttonLabel}
      </button>
      {isLoading && tableData.length !== 0 ? (
        <Spinner color='primary'>Loading...</Spinner>
      ) : (
        <Modal className='modal-lg' isOpen={modal} toggle={() => toggleModal()}>
          <ModalHeader className='modal-header' toggle={() => toggleModal()}>
            <span className='modal-title'>Test Runs</span>
          </ModalHeader>
          <ModalBody className='modal-body'>
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
                      <td>
                        <CollapseTable buttonLabel={el.runId} testData={tableData} />
                      </td>
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
