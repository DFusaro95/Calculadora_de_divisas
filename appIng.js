function calDolar(){
    let dolar = document.getElementById("dolar_input").value;
    let num = document.getElementById("peso2").value;
    let resultado = num / dolar;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} dolares en pesos`;
    console.log(mensaje);
    return mensaje;
}
function calEuro(){
    let euro = document.getElementById("euro_input");
    let num = document.getElementById("peso1");
    let resultado = num / euro;
    resultado = resultado.toFixed(2);
    let mensaje = `tienes un saldo de $${resultado} euros en pesos`;
    alert(mensaje);
    return mensaje;
}


