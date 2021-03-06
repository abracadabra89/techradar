import React from 'react';
import axios from 'axios';
import Header from './Header';
import EventList from './EventList';
import PropsRoute from './PropsRoute';
import Event from './Event';
import { Switch } from 'react-router-dom';
import EventForm from './EventForm';

class Editor extends React.Component {
  
      state = {
        events: null,
      };

      componentDidMount() {
        axios
          .get('/api/events.json')
          .then(response => this.setState({ events: response.data }))
      }

      addEvent = (newEvent) => {
        axios
        .post('/api/events.json', newEvent)
        .then((response)=> {
          alert('Your dawg is being prepared!');
          const savedEvent = response.data;
          this.setState(prevState => ({
            events: [...prevState.events, savedEvent],
          }));
          const {history} = this.props;
          history.push(`/events/${savedEvent.id}`);
        })
      }

      

      deleteEvent = (eventId) => {
        const deleteEvent = window.confirm("Delete this dawg?")
        if(deleteEvent){
        axios
        .delete(`/api/events/${eventId}.json`)
        .then((response)=> {
          if(response.status === 204){
            alert('Dawg deleted!')
          const {history} = this.props;
          history.push('/events');
          const {events} = this.state;
          this.setState({events: events.filter(event => event.id !== eventId)})
          }
        })
      }
    }


  updateEvent = (updatedEvent) => {
    axios
    .put(`/api/events/${updatedEvent.id}.json`, updatedEvent)
    .then(() => {
      alert('Dawg updated');
      const { events} = this.state;
      const idx = events.findIndex(event => event.id === updatedEvent.id);
      events[idx] = updatedEvent;
      const {history} = this.props;
      history.push(`/events/${updatedEvent.id}`);
      this.setState({events});
    })
  }

  
  render() {
    const { events } = this.state;
    if (events === null) return null;
    const { match } = this.props;
    const eventId = match.params.id;
    const event = events.find(elm => elm.id === Number(eventId));

    return (
      <div>
        <Header />
        <div className="grid">
          <EventList events={events} activeId={Number(eventId)} />
          <Switch>
            <PropsRoute path="/events/new" component={EventForm} onSubmit={this.addEvent} />
            <PropsRoute path="/events/:id/edit" component={EventForm} event={event} onSubmit={this.updateEvent} />
            <PropsRoute path="/events/:id" component={Event} event={event} onDelete={this.deleteEvent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Editor;
  

