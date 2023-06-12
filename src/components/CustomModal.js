import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CustomModal2 from './CustomModal2';

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
            <table className='table table-striped table-dark table-hover'>
              <thead className='thead-dark'>
                <tr>
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
                    <tr>
                      <th>{el.runId}</th>
                      <th>{el.squad}</th>
                      <th>{el.suitename}</th>
                      {/* <th>{el.tests}</th> */}
                      <th>{el.passed}</th>
                      <th>{el.failed}</th>
                      <th>
                        <CustomModal2
                          buttonLabel={el.total}
                          testData={el.tests}
                        />
                      </th>
                    </tr>
                  );
                })}
                {/* <tr>
                  <th scope='col'>1</th>
                  {tableData.map((el) => (
                    <td>{el.runId}</td>
                  ))}
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default CustomModal;
