// eslint-disable-next-line no-undef
const channels = require.context('.', true, /_channel\.js$/);
channels.keys().forEach(channels);
