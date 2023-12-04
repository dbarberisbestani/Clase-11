let importar = require("./collectibles.js");

let hotToys = importar("Hot Toys");
//console.log(hotToys);
let bandai = importar("Bandai");
//console.log(bandai);
let starWars = importar("Star Wars");
//console.log(starWars);

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
console.log(unifiedCollectibles);

let collectibles = {
    datos: unifiedCollectibles,
    listFiguras: function () {
        this.datos.forEach(function (figura) {
            console.log(figura.nombre)
        })
    },
    figurasByBrand: function (laMarca) {
        let figurasFiltradas = unifiedCollectibles.filter(function (figuraMarca) {
            return figuraMarca.marca === laMarca;
        });

        console.log(figurasFiltradas);
    }
};

collectibles.figurasByBrand("Hot Toys");
