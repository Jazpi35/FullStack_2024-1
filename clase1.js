var nombre = "Escribe tu nombre:";

function reemplazarVocales(nombre) {
    var nombreReemplazado = nombre.replace(/[a|e|i|o|u]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a':
                return '1';
            case 'e':
                return '2';
            case 'i':
                return '3';
            case 'o':
                return '4';
            case 'u':
                return '5';
            default:
                return match;
        }
    });
    
    return nombreReemplazado;
}

var nombreReemplazado = reemplazarVocales(nombre);
console.log(nombreReemplazado);

