import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SingleDevice.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

var CollapseTable = ({ buttonLabel, testData }) => {
  const [modal2, setModal2] = useState(false);
  var toggleModal2 = () => {
    setModal2(!modal2);
    console.log(testData);
  };
  const [open, setOpen] = useState('0');
  var toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
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
          <span className='modal-title'></span>Testcase Status
        </ModalHeader>
        <ModalBody>
          {testData.map((el, index) => {
             const testNameArr = Object.keys(el.tests);
            const testResultArr = Object.values(el.tests);
            return (
              <Accordion open={open} toggle={() => toggle('' + (index + 1))}>
                <AccordionItem>
                  <AccordionHeader targetId={'' + (index + 1)}>
                    <table className='table-custom table table-striped table-hover text'>
                      <thead className='thead-dark'>
                        <tr className='bg-primary white-text'>
                          <th scope='col'>RunId</th>
                          <th scope='col'>Failed</th>
                          <th scope='col'>Passed</th>
                          <th scope='col'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='table-cell'>{el.runId}</td>
                          <td className='table-cell'>
                            {el.failed}
                          </td>
                          <td className='table-cell'>
                            {el.passed}
                          </td>
                          <td className='table-cell'>
                            {el.total}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionHeader>
                  <AccordionBody accordionId={'' + (index + 1)}>
                    <table className='table text'>
                      <thead className='bg-primary white-text'>
                        <tr>
                          <th scope='col'>TestName</th>
                          <th scope='col'>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testResultArr.map((ele, index) => {
                          return (
                            <tr
                              className={
                                ele === 'passed'
                                  ? 'table-success'
                                  : 'table-danger'
                              }
                            >
                              <td>{testNameArr[index]}</td>
                              <td>{ele}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            );
          })}
          {/* <AccordionItem>
              <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
              <AccordionBody accordionId='1'>
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem> */}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CollapseTable;
