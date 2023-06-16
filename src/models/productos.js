import { readFileSync, writeFileSync, existsSync } from 'node:fs';

export default class ProductManager {

    static #id = 0;
    #products;
    #path

    constructor() {
        this.#path = './src/data/productos.json';
        this.#products = this.#leerArchivo();
        ProductManager.#id = this.#products.length > 0 ? this.#products[this.#products.length - 1].id : 0;
    }

    #leerArchivo() {
        try {
            let data;
            if (existsSync(this.#path))
                data = JSON.parse(readFileSync(this.#path, 'utf-8'));
            else
                data = [];

            return data;
        } catch (error) {
            console.log(error);
        }
    }
//agregar
    addProduct(title, description, code, price, thumbnail, status, stock, category) {
//codigo de producto ya existe
        try {
            let mensaje;

            const existeCodigo = this.#products.some(p => p.code === code);

            if (existeCodigo)
                mensaje = `El codigo del producto ${code} ya existe.`;
            else {
                const newProduct = {
                    id: ++ProductManager.#id,
                    title,
                    description,
                    price,
                    thumbnail,
                    status,
                    code,
                    stock,
                    category,
                };

                if (!Object.values(newProduct).includes(undefined)) {
                    this.#products.push(newProduct);
                    writeFileSync(this.#path, JSON.stringify(this.#products));
                    mensaje = 'Producto agregado exitosamente!';
                } else
                    mensaje = "Se requiere completar todos los campos";

            }

            return mensaje;
        } catch (error) {
            console.log(error);
        }
    }

    getProduct() {
        return this.#products;
    }
//obtener producto por id
getProductById(id) {
    const productoId = this.#products.find(p => p.id === id);

    return productoId ? productoId : false;
}
//actualizar producto por id
    updtaeProduct(id, propiedades) {

        try {
            let mensaje;

            const indice = this.#products.findIndex(p => p.id === id);
            if (indice != -1) {
                const { id, ...rest } = propiedades;
                this.#products[indice] = { ...this.#products[indice], ...rest };
                writeFileSync(this.#path, JSON.stringify(this.#products));
                mensaje = 'El producto fue actualizado correctamente!'
            } else
                mensaje = `El producto con ID ${id} no existe`;

            return mensaje;
        } catch (error) {
            console.log(error);
        }
    }
//borrar producto
    deleteProduct(id) {
        try {
            let mensaje;
            const indice = this.#products.findIndex(p => p.id === id);

            if (indice >= 0) {
                this.#products.splice(indice, 1);
                writeFileSync(this.#path, JSON.stringify(this.#products));
                mensaje = 'Producto eliminado correctamente';
            } else
                mensaje = `El producto con ID ${id} no existe`;

            return mensaje;
        } catch (error) {
            console.log(error);
        }
    }
}
