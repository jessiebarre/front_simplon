import ProductsRepository from './product';
import GuiBuilder from './gui';
import CartManager from './cart';

const builder = new GuiBuilder(
  new CartManager(),
  new ProductsRepository()
);
      // Initialisation de l'interface graphique.     
  builder.initialize();
