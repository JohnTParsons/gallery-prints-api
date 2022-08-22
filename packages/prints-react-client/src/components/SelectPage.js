import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export const SelectPage = ({ pageinfo, defaultValue, onSelect }) => {
  const setPrevious = (e) => {
    e.preventDefault();
    const newPagenumber = defaultValue - 1;
    if (onSelect) {
      onSelect(newPagenumber);
    }
  };

  const setNext = (e) => {
    e.preventDefault();
    const newPagenumber = 1 + defaultValue;
    if (onSelect) {
      onSelect(newPagenumber);
    }
  };

  return (
    <div data-testid="select-page">
      <Form.Group controlId="select-page-form">
        <Col>
          Page {pageinfo.pagenumber} of {pageinfo.totalpages}
        </Col>
        <Row>
          <Col>
            {pageinfo.pagenumber > 1 && <Form.Control
              as="button"
              defaultValue={defaultValue - 1}
              onClick={(e) => setPrevious(e)}
            >
              Previous
            </Form.Control>}
          </Col>
          <Col>
            {pageinfo.pagenumber < pageinfo.totalpages && <Form.Control
              as="button"
              defaultValue={1 + defaultValue}
              onClick={(e) => setNext(e)}
            >
              Next
            </Form.Control>}
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
};
