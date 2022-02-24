function pedidoEmpanadas() {
  let JQ = 0,
    Carne = 0,
    Pollo = 0;


  alert("Te ayudare a hacer el pedido de la docena de empanadas, solo quedan de JQ, Carne y Pollo.");

  for (let index = 12; index > 0; index--) {

    let valueEmpanada = parseInt(prompt(`Decime el gusto en número, escribi 1 para JQ, 2 para Carne y 3 para Pollo y 10 para cancelar el pedido, todavía faltan los gustos de ${index} empanadas....PEDISTE de JQ ${JQ}, de Carne ${Carne}, de Pollo ${Pollo}`));
    
    switch (valueEmpanada){
    case 1:
      JQ++
      break;

      case 2:
        Carne++;
        break;

    case 3:
      Pollo++;
      break;

      case 10:
        index=0;
        JQ=0;
        Carne=0;
        Pollo=0;
        break;

        default:
        alert('Dato incorrecto');
        index++;
        break;

    }
  }

  if (JQ == 0 & Carne == 0 & Pollo == 0) {
    alert('Cancelaste tu pedido')
  }
  else {
    alert(`Tu pedido queda así: Empanadas de JQ: ${JQ}, Empanadas de Carne: ${Carne}, Empanadas de Pollo: ${Pollo}`);
  }
}
