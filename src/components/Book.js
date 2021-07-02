import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  eventname,
  address,
  time,
  eventdate,
  date,
  handleRemoveEvent
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="event-title">{eventname}</Card.Title>
        <div className="event-details">
          <div>Address: {address}</div>
          <div>Event Date: {eventdate} </div>
          <div>Event Time: {time} </div>
          <div>Registered Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveEvent(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;