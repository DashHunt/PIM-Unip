import React, { useEffect, useState } from "react";

import Topbar from "../Topbar";
import CardComponent from "./CardComponent";
import CardGroupComponent from "./CardGroup";
import ChartComponent from "./ChartComponent";
import PieChart from "./PieChart";

import KPIApi from "../../api/KPI";
import ConvertDataToChart from "../../data/ConvertDataToChart";

const MetricasPage = () => {
  const [valoresPorMes, setValoresPorMes] = useState([]);
  const [valorSolicitacoes, setValorSolicitacoes] = useState(0);
  const [totalSolicitacoes, setTotalSolicitacoes] = useState(0);
  const [totalRequisicoes, setTotalRequisicoes] = useState(0);
  const [quantidadePorAno, setQuantidadePorAno] = useState([]);

  useEffect(() => {
    const KPI = new KPIApi();
    KPI.getValoresPorMes()
      .then((res) => {
        setValoresPorMes(ConvertDataToChart(res.data));
      })
      .catch((error) => console.log(error));

    KPI.getQuantidadeSolicitacoesAno()
      .then((res) => {
        let newData = [["Ano", "Quantidade"]];
        newData.push([res.data[0].ano, res.data[0].quantidade]);
        setQuantidadePorAno(newData);
      })
      .catch((error) => console.log(error));

    KPI.getTotalRequisicoes()
      .then((res) => {
        setTotalRequisicoes(parseInt(res.data[0].quantidadetotal));
      })
      .catch((error) => console.log(error));

    KPI.getValorTotalSolicitacoes()
      .then((res) => {
        setValorSolicitacoes(parseInt(res.data[0].total));
      })
      .catch((error) => console.log(error));

    KPI.getQuantidadeDeSolicitacoesAtivas()
      .then((res) => {
        setTotalSolicitacoes(res.data[0].quantidadetotal);
      })
      .catch((error) => console.log(error));
  }, []);

  const columnsChartOptions = {
    title: "Valores por Mês",
    subtitle: "Valores de coberturas separados por mês",
    legend: { position: "bottom" },
    colors: ["#0049FF"],
    vAxis: { format: "short" },
    hAxis: { format: "short" },
    vAxes: {
      0: { title: "Valor total" },
    },
    hAxes: {
      0: { title: "Meses" },
    },
  };

  const pieChartOptions = {
    title: "Quantidade de solicitações por ano",
    is3D: true,
    legend: { position: "bottom" },
    colors: ["#FFB600", "#0049FF"],
    pieSliceText: "label",
  };

  return (
    <>
      <Topbar>
        <div style={{ height: "15px" }}></div>
        <h3 className="mx-3">Métricas do sistema</h3>
        <div className="container mt-3">
          <CardGroupComponent>
            <CardComponent
              title="VALOR SOLICITACOES"
              paragraph={`R$${valorSolicitacoes}`}
            />
            <CardComponent
              title="TOTAL SOLICITAÇÕES"
              paragraph={totalSolicitacoes}
            />
            <CardComponent
              title="TOTAL REQUISIÇÕES"
              paragraph={totalRequisicoes}
            />
          </CardGroupComponent>
        </div>
        <div className="container mt-3">
          <h5 className="mx-1">Graficos gerenciais</h5>
          <div className="shadow border border-light">
            <ChartComponent
              data={valoresPorMes}
              options={columnsChartOptions}
            ></ChartComponent>
          </div>
          <div className="shadow border border-light mt-2">
            <PieChart
              data={quantidadePorAno}
              options={pieChartOptions}
            ></PieChart>
          </div>
        </div>
        <div style={{ height: "15px" }}></div>
      </Topbar>
    </>
  );
};

export default MetricasPage;
