const pool = require('../et_db_con');
//This file is for inserting and querying the expense category table in the database

const getExpenseCategories = async () => {
    try {
        const result = await pool.query('SELECT * FROM expense_category');
        
        return result.rows;
    } catch (error) {
        console.error('Error fetching expense categories:', error);
        throw error;
    }
};

//write a function to insert a new expense category into the database
const insertExpenseCategory = async (category_id, category_name) => {
    try {
        const result = await pool.query('INSERT INTO expense_category (category_id, category_name) VALUES ($1,$2) RETURNING *', [category_id,category_name]);
        return result.rows[0];
    } catch (error) {
        console.error('Error inserting expense category:', error);
        throw error;
    }finally   {
        pool.end(); // Close the pool after the query is done
    }
};

//write a function to update an expense category in the database
const updateExpenseCategory = async (category_name, category_id) => {
    try {
        const result = await pool.query('UPDATE expense_category SET category_name = $1 WHERE category_id = $2 RETURNING *', [category_name, category_id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating expense category:', error);
        throw error;
    }finally   {
        pool.end(); // Close the pool after the query is done
    }
};
//write a function to delete an expense category in the database
const deleteExpenseCategory = async (category_id) => {
    try {
        const result = await pool.query('DELETE FROM expense_category WHERE category_id = $1 RETURNING *', [category_id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error deleting expense category:', error);
        throw error;
    }finally   {
        pool.end(); // Close the pool after the query is done
    }
};

module.exports={ getExpenseCategories,insertExpenseCategory,updateExpenseCategory,deleteExpenseCategory}
//
//module.exports = pool;



