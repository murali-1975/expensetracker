const express = require('express');
const app = express();
const exp_cat = require('./db/exp-cat-query')
console.log("I am in app.js ");

exp_cat.getExpenseCategories().then(result => {
    console.log(result);
});
exp_cat.deleteExpenseCategory(4).then(result => {
    console.log(result);
});


/*exp_cat.updateExpenseCategory('Test1 Category',4).then(result => {
    console.log(result);
});
exp_cat.insertExpenseCategory('4', 'Test Category').then(result => {  
    console.log(result);
});*/          






