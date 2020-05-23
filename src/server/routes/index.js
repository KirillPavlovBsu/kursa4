const users = require('./users');
const categories = require('./categories');
const events = require('./events');
const auth = require('./auth');

module.exports = app => {
    app.use('/api/users', users);
    app.use('/api/categories', categories);
    app.use('/api/events', events);
    app.use('/api/auth', auth);
}
