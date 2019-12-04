import React from 'react';

const Event = ({ event, onDelete }) => (
  <div className="eventContainer">
    <h2>
      {event.event_date}
      {'  '}
      {event.event_type}
      {' '}
      <br></br>
      <button className='delete' type="button" onClick={()=> onDelete(event.id)}>Delete</button>
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
