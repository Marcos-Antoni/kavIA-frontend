export default {
  activar_desactibar_estilos(lista, num) {
    let lista_editable = lista;

    lista_editable = lista_editable.map(elemnto => {
      elemnto.encender = false;
      return elemnto;
    });

    lista_editable[num].encender = true;
    return lista_editable;
  }
};
