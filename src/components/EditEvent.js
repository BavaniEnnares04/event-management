import React, { useContext } from 'react';
import EventForm from './EventForm';
import { useParams } from 'react-router-dom';
import EventsContext from '../context/EventsContext';

const EditEvent = ({ history }) => {
  const { books, setBooks } = useContext(EventsContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/eventList');
  };

  return (
    <div>
      <EventForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditEvent;