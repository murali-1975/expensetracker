const express = require('express');
const app = express();
const pool = require('./db/exp-cat-query')
console.log("I am in app.js ");
(async () => {
    try {
      const res = await pool.query('SELECT NOW()');
      console.log('Database connected:', res.rows[0]);
    } catch (err) {
      console.error('Database connection error:', err);
    } finally {
      pool.end();
    }
  })()



//app.use(express.json());
//app.use('/expense-category', require('./expense-category')); // Adjust the path if necessary

//module.exports = app;n