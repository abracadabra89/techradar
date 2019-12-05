import 'bootstrap/dist/css/bootstrap.min.css';
const channels = require.context('.', true, /_channel\.js$/);
channels.keys().forEach(channels);
