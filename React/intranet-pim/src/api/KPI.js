import axios from "axios";
import { NodeServiceServer } from "../server/server";

export default class KPIApi {
  constructor() {
    this.Flag = "KPIs";
    this.axiosInstance = new axios.create({
      timeout: 100000000,
      baseURL: NodeServiceServer(),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      },
    });
  }

  getQuantidadeDeSolicitacoesMes() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getQuantidadeDeSolicitacoesMes",
    };
    return this.axiosInstance(config);
  }
  getQuantidadeSolicitacoesAno() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getQuantidadeSolicitacoesAno",
    };
    return this.axiosInstance(config);
  }
  getValoresTotaisCoberturas() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getValoresTotaisCoberturas",
    };
    return this.axiosInstance(config);
  }
  getValoresPorMes() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getValoresPorMes",
    };
    return this.axiosInstance(config);
  }
  getValorTotalSolicitacoes() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getValorTotalSolicitacoes",
    };
    return this.axiosInstance(config);
  }
  getTotalRequisicoes() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getTotalRequisicoes",
    };
    return this.axiosInstance(config);
  }
  getQuantidadeDeSolicitacoesAtivas() {
    const config = {
      method: "GET",
      url: NodeServiceServer() + "getQuantidadeDeSolicitacoesAtivas",
    };
    return this.axiosInstance(config);
  }
}
