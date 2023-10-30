import { getAll as getAllCart, getById as getByIdModel, create as createModel, deleteCart as deleteModel, update as updateModel} from '../models/cartModel.js';

const getAll = async (_request, response) => {
  const carts = await getAllCart();
  return response.status(200).json({data: carts});
};

const isValidBody = ({ body }) => {
  return (body.mail_user == null || body.product_id == null || body.sub_total == null || body.discounts == null || body.taxes == null || body.total == null)
}

const create = async (request, response) => {
  const { body } = request;
  if (isValidBody({ body })) return response.status(400).json({message: 'Invalid body'});
  
  await createModel(request.body);
  return response.status(201).json({message: 'Success'});
};

const deleteCart = async (request, response) => {
  const { id } = request.params;
  if (id == null) return response.status(400).json({message: 'Invalid body'});

  await deleteModel(id);
  return response.status(204).json();
};

const update = async (request, response) => {
  const { id } = request.params;
  if (id == null) return response.status(400).json({message: 'Invalid body'});

  await updateModel(id, request.body);
  return response.status(204).json();
};


const getById = async (request, response) => {
  const { id } = request.params;
  if (id == null) return response.status(400).json({message: 'Invalid body'});

  const cart = await getByIdModel(id);
  return response.status(200).json({data: cart});
};

export {
  getAll,
  create,
  deleteCart,
  update,
  getById
};