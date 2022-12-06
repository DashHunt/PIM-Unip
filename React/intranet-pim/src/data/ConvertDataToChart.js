import getUniqueListBy from "./GetUniqueListBy";

export default function ConvertDataToChart(data) {
  const uniqueData = getUniqueListBy(data, "data");

  let valorTotal = 0;
  data.forEach((data) => {
    let { valor } = data;
    valorTotal = valorTotal + parseInt(valor);
  });

  let chartData = [["Mês", "Valor"]];
  uniqueData.forEach((data) => {
    let monthName = new Date(convertToDate(data.data)).toLocaleString("en-us", {
      month: "long",
    });
    chartData.push([getMonthNumberFromName(monthName), parseInt(valorTotal)]);
  });
  let newCharData = Array.from(
    new Set(chartData.map(JSON.stringify)),
    JSON.parse
  );
  return newCharData;
}

function convertToDate(dateString) {
  let d = dateString.split("/");
  let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
}

function getMonthNumberFromName(monthName) {
  return new Date(`${monthName} 1, 2022`).getMonth() + 1;
}
