const connection = require('./connection')



const getAll = async (request, response) => {
    // here return a 3 object, I used desestruct for get the first object
    const [carts] = await connection.execute('SELECT * FROM Product');

    return response.status(200).json({data: carts});
};


module.exports = {
    getAll
};