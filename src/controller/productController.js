import { getAll as getAllModel, getById as getByIdModel, create as createModel, deleteProduct as deleteModel, update as updateModel} from '../models/productModel.js';

const getAll = async (_request, response) => {
  const products = await getAllModel();
  return response.status(200).json({data: products});
};

const isValidBody = ({ body }) => {
  return (body.description == null || body.short_desc == null || body.name == null || body.price == null);
}

const create = async (request, response) => {
  const { body } = request;
  if (isValidBody({ body })) return response.status(400).json({message: 'Invalid body'});
  await createModel(request.body);
  return response.status(201).json({message: 'Success'});
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  if (id == null) return response.status(400).json({message: 'Invalid body'});

  const { message } = await deleteModel(id);
  if (message) return response.status(500).json({message: 'Error', data: message})
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

  const product = await getByIdModel(id);
  return response.status(200).json({data: product});
};

export {
  getAll,
  create,
  deleteProduct,
  update,
  getById
};