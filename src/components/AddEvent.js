import React, { useContext } from 'react';
import EventForm from './EventForm';
import EventsContext from '../context/EventsContext';

const AddEvent = ({ history }) => {
  const { books, setBooks } = useContext(EventsContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/eventList');
  };

  return (
    <React.Fragment>
      <EventForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddEvent;