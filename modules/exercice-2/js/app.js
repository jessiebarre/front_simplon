define(['cart', 'product', 'gui'], function() {
    const builder = new GuiBuilder(
        new CartManager(),
        new ProductsRepository()
      );
      // Initialisation de l'interface graphique.
      builder.initialize();
})