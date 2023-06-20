import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SingleDevice.css';
import SquadAccordian from './SquadAccordian';

var CustomModalSquad = ({ buttonLabel, squad }) => {
  const [modal, setModal] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    var fetchTableData = async () => {
      const result = await axios.get(
        `http://assortment-nlp.qa2-sg.cld/devicefarm/getRunDetailsBySquad/` + squad
      );
      console.log(result.data);
      setTableData(result.data);
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
        className='card-btn-squad'
        onClick={() => {
          toggleModal();
        }}
      >
        {buttonLabel}
      </button>
        <Modal className='modal-lg' isOpen={modal} toggle={() => toggleModal()}>
          <ModalHeader className='modal-header' toggle={() => toggleModal()}>
            <span className='modal-title'>Test Runs</span>
          </ModalHeader>
          <ModalBody className='modal-body'>
            <table className='table table-striped table-hover text'>
              <thead className='thead-dark'>
                <tr className='bg-primary white-text'>
                  <th scope='col'>RunID</th>
                  <th scope='col'>StartTime</th>
                  <th scope='col'>EndTime</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((el) => {
                  return (
                    <tr className={colorIndicator(el)}>
                      <td>
                        <SquadAccordian buttonLabel={el.runId} testData={el.runs} />
                      </td>
                      <td>{el.starttime}</td>
                      <td>{el.endtime}</td>
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

export default CustomModalSquad;
