let fs = require("fs");

function importar(marca){
    switch (marca){
        case "Hot Toys":
            archivo = "figuras1.json";
            break;
        case "Bandai":
            archivo = "figuras2.json";
            break;
        case "Star Wars":
            archivo = "figuras3.json";
            break;
        default:
            break;    
    }
    let rutaArchivo = "./datos/" + archivo;
    let figurasJSON = fs.readFileSync(rutaArchivo,"utf-8");
    return JSON.parse(figurasJSON);
}



module.exports = importar;


