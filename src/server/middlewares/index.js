const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const config = require('config');

module.exports = app => {
    app.use(cors());
    app.use(express.json());
    app.use(
        session({
          secret: config.get('secret'),
          cookie: { maxAge: 60000 },
          resave: false,
          saveUninitialized: false,
        }),
    );
    app.use(express.static(path.join(__dirname, '../public/')));
};