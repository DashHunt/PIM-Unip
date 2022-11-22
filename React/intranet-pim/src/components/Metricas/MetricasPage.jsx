import React from "react";

import Topbar from "../Topbar";
import CardComponent from "./CardComponent";
import CardGroupComponent from "./CardGroup";
import ChartComponent from "./ChartComponent";
import PieChart from "./PieChart";

const MetricasPage = () => {
  const data = [
    ["Mês", "Valor"],
    ["01", 3000],
    ["02", 5000],
    ["03", 6000],
    ["04", 7000],
  ];

  const columnsChartOptions = {
    title: "Valores por mes",
    legend: { position: 'bottom'},
    colors: ['#0049FF']
  };

  const pieChartData = [
    ["Ano", "Quantidade"],
    ["2021", 20],
    ["2022", 50],
    
  ];

  const pieChartOptions = {
    title: "Quantidade de solicitacoes por ano",
    is3D: true,
    legend: { position: 'bottom'},
    colors: ['#FFB600', '#0049FF']
  };

  return (
    <>
      <Topbar>
        <div style={{ height: "15px" }}></div>
        <h3 className="mx-3">Métricas do sistema</h3>
        <div className="container mt-3">
          <CardGroupComponent>
            <CardComponent title="VALOR SOLICITACOES" paragraph="R$3000.00" />
            <CardComponent title="VALOR TOTAL APOLICES" paragraph="R$1500.00" />
            <CardComponent title="TOTAL SOLICITAÇÕES" paragraph="25" />
            <CardComponent title="TOTAL REQUISIÇÕES" paragraph="50" />
          </CardGroupComponent>
        </div>
        <div className="container mt-3">
          <h5 className="mx-1">Graficos gerenciais</h5>
          <div className="shadow-sm border border-light">
            <ChartComponent data={data} options={columnsChartOptions}></ChartComponent>
          </div>
          <div className="shadow-sm border border-light mt-2">
            <PieChart data={pieChartData} options={pieChartOptions}></PieChart>
          </div>
        </div>
        <div style={{ height: "15px" }}></div>
      </Topbar>
    </>
  );
};

export default MetricasPage;
