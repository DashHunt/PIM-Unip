import axios from "axios";
import { ApiServer } from "../server/server";

export default class SolicitacoesAPI {
  constructor() {
    this.Flag = "Solicitacoes";
    this.axiosInstance = new axios.create({
      timeout: 100000000,
      baseURL: ApiServer(),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      },
    });
  }

  get() {
    const config = {
      method: "GET",
      url: ApiServer() + "/getSolicitacoes",
    };
    return this.axiosInstance(config);
  }

  getByID(id) {
    const config = {
      method: "GET",
      url: ApiServer() + "/getSolicitacoes",
      params: { idSolicitacao: id },
    };
    return this.axiosInstance(config);
  }

  post(data) {
    const config = {
      method: "POST",
      url: ApiServer() + "/postSolicitacoes",
      data: data,
    };
    return this.axiosInstance(config);
  }

  update(data) {
    const config = {
      method: "POST",
      url: ApiServer() + "/putSolicitacoes",
      data: data,
    };
    return this.axiosInstance(config);
  }
  
  delete(id) {
    const config = {
      method: "GET",
      url: ApiServer() + "/deleteSolicitacoes",
      params: { idSolicitacao: id },
    };
    return this.axiosInstance(config);
  }
}
