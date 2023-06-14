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

  var arr = {
    '0B301JEC212177': {
      failed: 8,
      passed: 8,
      runId: 1686653867943,
      squad: 'SampleSuite',
      suitename: 'Sanity_0B301JEC212177',
      tests: {
        tes1: 'passed',
        tes11: 'passed',
        tes13: 'passed',
        tes15: 'passed',
        tes3: 'passed',
        tes5: 'passed',
        tes7: 'passed',
        tes9: 'passed',
        test10: 'failed',
        test12: 'failed',
        test14: 'failed',
        test16: 'failed',
        test2: 'failed',
        test4: 'failed',
        test6: 'failed',
        test8: 'failed',
      },
      total: 16,
    },
    '3BBB2D88-6CEB-4C7D-8DA7-58418FC79D78': {
      failed: 8,
      passed: 8,
      runId: 1686653867943,
      squad: 'SampleSuite',
      suitename: 'Drytests',
      tests: {
        tes1: 'passed',
        tes11: 'passed',
        tes13: 'passed',
        tes15: 'passed',
        tes3: 'passed',
        tes5: 'passed',
        tes7: 'passed',
        tes9: 'passed',
        test10: 'failed',
        test12: 'failed',
        test14: 'failed',
        test16: 'failed',
        test2: 'failed',
        test4: 'failed',
        test6: 'failed',
        test8: 'failed',
      },
      total: 16,
    },
    Pixel_4_and: {
      failed: 8,
      passed: 8,
      runId: 1686653867943,
      squad: 'SampleSuite',
      suitename: 'Drytests_And',
      tests: {
        tes1: 'passed',
        tes11: 'passed',
        tes13: 'passed',
        tes15: 'passed',
        tes3: 'passed',
        tes5: 'passed',
        tes7: 'passed',
        tes9: 'passed',
        test10: 'failed',
        test12: 'failed',
        test14: 'failed',
        test16: 'failed',
        test2: 'failed',
        test4: 'failed',
        test6: 'failed',
        test8: 'failed',
      },
      total: 16,
    },
    Pixel_6: {
      failed: 17,
      passed: 15,
      runId: 1686653867943,
      squad: 'SampleSuite',
      suitename: 'Sanity',
      tests: {
        tes1: 'passed',
        tes11: 'passed',
        tes13: 'passed',
        tes15: 'passed',
        tes3: 'passed',
        tes5: 'passed',
        tes7: 'passed',
        tes9: 'failed',
        test10: 'failed',
        test12: 'failed',
        test14: 'failed',
        test16: 'failed',
        test2: 'failed',
        test4: 'failed',
        test6: 'failed',
        test8: 'failed',
        testsec1: 'passed',
        testsec10: 'failed',
        testsec11: 'passed',
        testsec12: 'failed',
        testsec13: 'passed',
        testsec14: 'failed',
        testsec15: 'passed',
        testsec16: 'failed',
        testsec2: 'failed',
        testsec3: 'passed',
        testsec4: 'failed',
        testsec5: 'passed',
        testsec6: 'failed',
        testsec7: 'passed',
        testsec8: 'failed',
        testsec9: 'passed',
      },
      total: 32,
    },
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
                        <CollapseTable buttonLabel={el.runId} testData={arr} />
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
