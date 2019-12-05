import React from 'react';
import { isEmptyObject, validateEvent } from '../helpers/helpers';

class EventForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		event: props.event,
		errors: {},
 };
	}

	 handleSubmit = (e) => {
		e.preventDefault();
		const { event } = this.state;
		const errors = validateEvent(event);
		if (!isEmptyObject(errors)) {
		this.setState({ errors });
		} else {
			const { onSubmit} = this.props;
			onSubmit(event)
		}
	}

	handleInputChange = (event) => {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.updateEvent(name, value)
	}
	

		updateEvent(key, value) {
			this.setState(prevState => ({
			event: {
				...prevState.event,
				[key]: value,
			},
			}));
		}

		
		renderErrors() {
			const { errors } = this.state;
			if (isEmptyObject(errors)) {
				return null;
			}
		
			return (
				<div className="errors">
				<h3>Fix your errors:</h3>
				<ul>
					{Object.values(errors).map(error => (
					<li key={error}>{error}</li>
					))}
				</ul>
				</div> );
			}
		
		render() {
			return (
			<div>
			<h3>New Dog</h3>
				{this.renderErrors()}
				<form className="eventForm" onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="event_type">
					<strong>Type:</strong>
					<input
						type="text"
						id="event_type"
						name="event_type"
						onChange={this.handleInputChange}
						value={event.event_type}
					/>
					</label>
					</div>
					<div>
					<label htmlFor="event_date">
					<strong>Bun:</strong>
					<input
						type="text"
						id="event_date"
						name="event_date"
						value={event.event_date}
						onChange={this.handleInputChange}
					/>
					</label>
				</div>
				<div>
					<label htmlFor="title">
					<strong>Fillings:</strong>
					<textarea
						cols="30"
						rows="10"
						id="title"
						name="title"
						value={event.title}
						onChange={this.handleInputChange}
					/>
					</label>
				</div>
				<div>
					<label htmlFor="speaker">
					<strong>Meat type:</strong>
					<input 
					type="text" 
					id="speaker" 
					name="speaker" 
					value={event.speaker}
					onChange={this.handleInputChange} />
					</label>
				</div>
				<div>
					<label htmlFor="host">
					<strong>Name dawg:</strong>
					<input 
					type="text" 
					id="host" 
					name="host" 
					value={event.host}
					onChange={this.handleInputChange} />
					</label>
				</div>
				<div>
					<label htmlFor="published">
					<strong>Order!</strong>
					<input
						type="checkbox"
						id="published"
						name="published"
						value={event.published}
						onChange={this.handleInputChange}
					/>
					</label>
				</div>
				<div className="form-actions">
					<button type="submit">Save</button>
				</div>
				</form>
			</div>
			);
		}
	}

		
		EventForm.defaultProps = {
		event: {
			event_type: '',
			event_date: '',
			title: '',
			speaker: '',
			host: '',
			published: false,
		},
	};
		
		export default EventForm;