import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {Counter} from "../counter";
import './index.css';

const cartItems = {
  cost: 'Cost',
  product: 'Product',
  price: 'Price',
  quantity: 'Quantity'
}

export interface ICartList {
  name: string;
  price: number;
  size?: string;
  sku: string;
  stockLevel: number;
}

interface ICartTable {
  cart: Array<ICartList>;
  deleteProduct: any;
  updateProduct: any;
}

const CartTable: React.FC<ICartTable> = (props) => {
  const {cart = [], deleteProduct, updateProduct} = props;

  const Items: React.FC = () => (
    <tbody role="rowgroup">
    {
      cart?.map((item: ICartList, index) => (
        <tr role="row" key={item.sku}>
          <td role="cell">{item?.name} {item?.size}</td>
          <td role="cell">{item?.price}</td>
          <td role="cell">
            <Counter
              index={index}
              sku={item.sku}
              updateProduct={updateProduct}
              value={item?.stockLevel}
            />
          </td>
          <td role="cell">{item?.price * item?.stockLevel}</td>
          <td onClick={() => deleteProduct(item.sku)}>
            <DeleteIcon className=""/>
          </td>
        </tr>
      ))
    }
    </tbody>
  )

  return (
    <table role="table" className="cart__item">
      <thead role="rowgroup">
      <tr role="row">
        <th role="columnheader">{cartItems.product}</th>
        <th role="columnheader">{cartItems.price}</th>
        <th role="columnheader">{cartItems.quantity}</th>
        <th role="columnheader">{cartItems.cost}</th>
      </tr>
      </thead>
      <Items/>
    </table>
  )
}

export default CartTable
