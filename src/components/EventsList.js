import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import EventsContext from '../context/EventsContext';

const EventsList = () => {
  const { books, setBooks } = useContext(EventsContext);

  const handleRemoveEvent = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="event-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveEvent={handleRemoveEvent} />
          ))
        ) : (
          <p className="message">No Events available. Please add some events.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventsList;