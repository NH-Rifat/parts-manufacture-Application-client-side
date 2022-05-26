import React from 'react';
import { MdDelete } from 'react-icons/md';

const ProductsRow = ({ product, index, refetch, setDeletingProduct }) => {
  const { name, price, image } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className='avatar'>
          <div className='w-8 rounded'>
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeletingProduct(product)}
          for='delete-modal'
          className='btn btn-xs btn-error'
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductsRow;