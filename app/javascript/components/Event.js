import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ event, onDelete }) => (
  <div className="eventContainer">
    <h2>
      {' '}
      {event.event_type}
      <Link to={`/events/${event.id}/edit`}>Edit</Link>
      <button className='delete' type="button" onClick={()=> onDelete(event.id)}>Delete</button>
      <br></br>
      {' '}
      <br></br>
    </h2>
    <ul>
      <li>
        <strong>Type:</strong>
        {' '}
        {event.event_type}
      </li>
      <li>
        <strong>Date:</strong>
        {' '}
        {event.event_date}
      </li>
      <li>
        <strong>Title:</strong>
        {' '}
        {event.title}
      </li>
      <li>
        <strong>Speaker:</strong>
        {' '}
        {event.speaker}
      </li>
      <li>
        <strong>Host:</strong>
        {' '}
        {event.host}
      </li>
      <li>
        <strong>Published:</strong>
        {' '}
        {event.published ? 'yes' : 'no'}
      </li>
    </ul>
  </div>
);


export default Event;
