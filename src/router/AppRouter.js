import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddEvent from '../components/AddEvent';
import EventsList from '../components/EventsList';
import useLocalStorage from '../hooks/useLocalStorage.js';
import EditEvent from '../components/EditEvent';
import EventsContext from '../context/EventsContext';
import { About } from '../components/About';
import { Home } from '../components/Home';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <EventsContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route path="/about" component={About} exact />
              <Route path="/" component={Home} exact />
              <Route component={EventsList} path="/eventList" exact={true} />
              <Route component={AddEvent} path="/add" />
              <Route component={EditEvent} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </EventsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;