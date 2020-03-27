import { ProductsRepository } from './modules/product.js';
import GuiBuilder from './modules/gui.js';
import CartManager from './modules/cart.js';

// Les constructeurs devront être importés.
const builder = new GuiBuilder(
    new CartManager(),
    new ProductsRepository()
  );
  // Initialisation de l'interface graphique.
  builder.initialize();