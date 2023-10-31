import connection from './connection.js';
import crypto from 'crypto';

const getAll = async () => {
    const query = 'SELECT * FROM Cart';
    const [carts] = await connection.execute(query);
    return carts;
};


const create = async (cart) => {
    const { mail_user, sub_total, discounts, taxes, total, product_id } = cart;
    // we able to generate a ID here when create a Cart, not use a incremental ID
    const dynamic_id = crypto.randomUUID()
    const query = 'INSERT INTO Cart (mail_user, sub_total, discounts, taxes, total, product_id) VALUES (?, ?, ?, ?, ?, ?)';
    const [createdCart] = await connection.execute(query, [mail_user, sub_total, discounts, taxes, total, product_id])
    return createdCart;
}

const deleteCart = async (id) => {
    const [removedCart] = await connection.execute('DELETE FROM Cart WHERE id = ?', [id]);
    return removedCart;
};
  
const update = async (id, cart) => {
    const { mail_user, sub_total, discounts, taxes, total, product_id } = cart;

    const query = 'UPDATE Cart SET mail_user = ?, sub_total = ?, discounts = ?, taxes = ?, total = ?, product_id = ? WHERE id = ?';

    const [updatedCart] = await connection.execute(query, [mail_user, sub_total, discounts, taxes, total, product_id, id]);
    return updatedCart;
};

const getById = async (id) => {
    const query = 'SELECT * FROM Cart WHERE id = ?';
    const [cart] = await connection.execute(query, [id]);
    return cart;
};

export {
    getAll,
    create,
	deleteCart,
	update,
    getById
} ;