import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
let products = [];

export const getAllProducts = (req, res) => {
    res.send(products)
}
export const getProduct = (req, res) => { // get product by id
    const { id } = req.params;

    const foundProduct = products.find((product) => product.id == id); // find the product with the id

    res.send(foundProduct);
}
export const createProduct = (req, res) => { // create a new product
    const product = req.body
    let errors = validationResult(req);

    return !errors.isEmpty()
        ? res.status(400).json({ errors: errors.array() }) // if there are errors, return them
        : products.push({ ...product, id: uuidv4() }), res.send(`product with the name ${product.name} added to the database!`) //add the product with unique Id
}

export const deleteProduct = (req, res) => { // delete product by id
    const { id } = req.params;

    products = products.filter((product) => product.id != id);

    res.send(`product with id ${id} deleted from the database!`);
}
export const updateProduct = (req, res) => { // update product by id
    const { id } = req.params;
    const { name, price, category, description } = req.body;
    const product = products.find((product) => product.id === id); // find the product to be updated
    let errors = validationResult(req);

    if (!errors.isEmpty()) { res.status(400).json({ errors: errors.array() }) }
    if (!product) {
        return res.status(404).send('product not found');
    }
    // modify parameters
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;


    res.send(`product with id ${id} was been updated!`);
}