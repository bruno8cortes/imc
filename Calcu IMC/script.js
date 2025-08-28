function Calcular(event) {
    event.preventDefault();
    var a = txtAltura.value;
    var p = txtPeso.value;
    var imc = p/(a*a);
    if (imc < 18.6) {
        foto.src = "./img/flaco.png";
    }
    if (imc > 18.6 && imc < 25) {
        foto.src = "./img/normal.png";
    }
    if (imc > 25 && imc < 30) {
        foto.src = "./img/sobrepeso.png";
    }
    if (imc > 30) {
        foto.src = "./img/fondo_arg.jpg";
    }
}