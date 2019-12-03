import React from 'react';
import axios from 'axios';
import Header from './Header';
import EventList from './EventList';
import PropsRoute from './PropsRoute';
import Event from './Event';
import { Switch } from 'react-router-dom';
import EventForm from './EventForm';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);
    

    this.state = {
      events: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/events.json')
      .then(response => this.setState({ events: response.data }))
      .catch((error) => {
        alert(error);
      });
  }
    addEvent(newEvent) {
      axios
      .post('/api/events.json', newEvent)
      .then((response)=> {
        alert('You added an event!');
        const savedEvent = response.data;
        this.setState(prevState => ({
          events: [...prevState.events, savedEvent],
        }));
        const {history} = this.props;
        history.push(`/events/${savedEvent.id}`);
      })
      .catch((error)=> {
        alert(error)
      });
    }

    

  render() {
    const { events } = this.state;
    if (events === null) return null;
    const { match } = this.props;
    const eventId = match.params.id;
    const event = events.find(e => e.id === Number(eventId));

    return (
      <div>
        <Header />
        <div className="grid">
          <EventList events={events} activeId={Number(eventId)} />
          <Switch>
            <PropsRoute path="/events/new" component={EventForm} onSubmit={this.addEvent} />
            <PropsRoute path="/events/:id" component={Event} event={event} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Editor;
  

