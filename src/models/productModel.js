import connection from './connection.js';

const getAll = async () => {
    const query = 'SELECT * FROM Product';
    const [products] = await connection.execute(query);
    return products;
};

const create = async (product) => {
    const { description, short_desc, name, price } = product;
    const query = 'INSERT INTO Product (description, short_desc, name, price) VALUES (?, ?, ?, ?)';
    const [createdProduct] = await connection.execute(query, [description, short_desc, name, price])
    return createdProduct;
}


const deleteProduct = async (id) => {
    try {
        const [removedProduct] = await connection.execute('DELETE FROM Product WHERE id = ?', [id]);
        return removedProduct;    
    } catch (error) {
        return error;
    }
    
};
  
const update = async (id, product) => {
    const { description, short_desc, name, price } = product;
    const query = 'UPDATE Product SET description = ?, short_desc = ?, name = ?, price = ? WHERE id = ?';

    const [updatedProduct] = await connection.execute(query, [description, short_desc, name, price, id]);
    return updatedProduct;
};
 
const getById = async (id) => {
    const query = 'SELECT * FROM Product WHERE id = ?';
    const [product] = await connection.execute(query, [id]);
    return product;
};


export {
    getAll,
    create,
    deleteProduct,
    update, 
    getById    
};