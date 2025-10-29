let resultado

function suma(a, b){
    resultado=a+b
    return resultado;

}

document.write(suma(40,200));
document.write('<br>');


function saludar(){
return 'Hola a todos!';

}
var mensaje=saludar();

document.write(mensaje);


function Vercolor(valor){
    valor=parseInt(prompt('INGRESE UN VALOR 1/3...'))

    switch (valor) {
        case 1:
            return'Rojo'
            
            break;
          case 2:
            return 'Verde'
             break;
            case 3:
                return 'Amarillo'

                break;
        default:
            return 'Valor incorrecto'
            break;
    }
}

alert(Vercolor());