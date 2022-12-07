export function getCarro(values, tipo, fipe, setFieldValues) {
  console.log("Calculate Values");
  console.log(values);

  setFieldValues(values);

  return new Promise((resolve, reject) => {
    let newArray = fipe.filter(function (el) {
      return (
        el.marca == values.marca &&
        el.modelo == values.modelo &&
        el.ano == values.ano &&
        el.tipo == tipo
      );
    });
    resolve(newArray[0]);
  });
}

export function getModelos(marca, fipe) {
  return new Promise((resolve, reject) => {
    let newArray = fipe.filter(function (el) {
      return el.marca == marca;
    });

    newArray = newArray.reduce((unique, o) => {
      if (!unique.some((obj) => obj.modelo === o.modelo)) {
        unique.push(o);
      }
      return unique;
    }, []);

    resolve(newArray);
  });
}

export function getAnos(modelo, fipe) {
  return new Promise((resolve, reject) => {
    let newArray = fipe.filter(function (el) {
      return el.modelo == modelo;
    });

    newArray = newArray.reduce((unique, o) => {
      if (!unique.some((obj) => obj.ano === o.ano)) {
        unique.push(o);
      }
      return unique;
    }, []);

    resolve(newArray);
  });
}

export function getTipos(modelo, ano, fipe) {
  return new Promise((resolve, reject) => {
    let newArray = fipe.filter(function (el) {
      return el.modelo == modelo && el.ano == ano;
    });

    newArray = newArray.reduce((unique, o) => {
      if (!unique.some((obj) => obj.tipo === o.tipo)) {
        unique.push(o);
      }
      return unique;
    }, []);

    resolve(newArray);
  });
}


