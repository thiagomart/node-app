const connection = require('./connection');

const getAll = async () => {
    return await connection.execute('SELECT * FROM Cart');
};


module.exports = {
    getAll
};