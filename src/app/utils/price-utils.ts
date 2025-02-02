/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */

import { Product } from "../domains/shared/models/product.model";

export const totalPrice = (products: Product[]) => {
    return products.reduce((total, product)=> total + product.price, 0);
}