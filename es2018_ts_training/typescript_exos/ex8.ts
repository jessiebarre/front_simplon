const doubler = (valeur: number) :number => valeur *2;
console.log(doubler(5));

const direBonjour = (nom? :string) :void => {
    if (nom === undefined) {
        nom = "Bart Simpson";
    }
    console.log(`Bonjour ${nom}`);
};

direBonjour("Marc");
direBonjour();
