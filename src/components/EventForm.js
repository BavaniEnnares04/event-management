import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EventForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      eventname: props.book ? props.book.eventname : '',
      address: props.book ? props.book.address : '',
      eventdate: props.book ? props.book.eventdate : '',
      time: props.book ? props.book.time : '',
      date: props.book ? props.book.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { eventname, address, time, eventdate } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [eventname, address, time, eventdate];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        eventname,
        address,
        time,
        eventdate,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'extra':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'extras':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Event Name & Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="eventname"
            value={eventname}
            placeholder="Enter name of event - Description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Event Location - Address line, City, State, Country, Zipcode</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Address line, City, State, Country, Zipcode"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="eventdate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="eventdate"
            value={eventdate}
            placeholder="DD/MM/YYYY"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Event Time</Form.Label>
          <Form.Control
            className="input-control"
            type="time"
            name="time"
            value={time}
            placeholder="HH:MM AM/PM"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EventForm;