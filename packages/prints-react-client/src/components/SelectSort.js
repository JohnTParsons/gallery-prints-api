import React from "react";
import { Col, Form } from "react-bootstrap";

export const SelectSort = ({ printSort, defaultValue, onSelect }) => {
  const setSelect = (e) => {
    e.preventDefault();
    const index = e.target.options.selectedIndex;
    const status = printSort[index];
    if (onSelect) {
      onSelect(status);
    }
  };

  return (
    <div data-testid="select-sort">
      <Form.Group controlId="select-sort-form">
        <Col>
          <Form.Label>Sort:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            as="select"
            defaultValue={defaultValue?.name}
            onChange={(e) => setSelect(e)}
          >
            {printSort.map((item) => {
              return <option key={item.key}>{item.name}</option>;
            })}
          </Form.Control>
        </Col>
      </Form.Group>
    </div>
  );
};
