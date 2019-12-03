export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateEvent = (event) => {
	const errors = {};

	if (event.event_type === ''){
		errors.event_type = 'Enter an event type!';
	}
	if (event.event_date === ''){
		errors.event_date = 'Enter a valid date!';
	}
	if (event.title === ''){
		errors.title = 'Enter a title!';
	}
	if (event.speaker === ''){
		errors.speaker = 'Enter a speaker!';
	}
	if (event.host === ''){
		errors.host = 'Enter a host!';
	}
	
	return errors;
}
