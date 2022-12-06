const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "PIM_Seguro",
  password: "admin",
  port: 5432,
});

const getQuantidadeDeSolicitacoesMes = (request, response) => {
  pool.query(
    `SELECT EXTRACT(month FROM data_cadastro::timestamp) "mes", count(*) as quantidade
  FROM solicitacao_proposta
  GROUP BY EXTRACT(month FROM data_cadastro::timestamp)
  ORDER BY EXTRACT(month FROM data_cadastro::timestamp);
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getQuantidadeSolicitacoesAno = (request, response) => {
  pool.query(
    `SELECT EXTRACT(year FROM data_cadastro::timestamp) "ano", count(*) as quantidade
    FROM solicitacao_proposta
    GROUP BY EXTRACT(year FROM data_cadastro::timestamp)
    ORDER BY EXTRACT(year FROM data_cadastro::timestamp);
    
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getValoresTotaisCoberturas = (request, response) => {
  pool.query(
    `SELECT SUM(valor::integer) FROM coberturas
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getValoresPorMes = (request, response) => {
  pool.query(
    `SELECT coberturas.valor, solicitacao_proposta.data_cadastro as data 
    FROM coberturas, solicitacao_proposta
    WHERE coberturas.fk_id_solicitacao = solicitacao_proposta.id_solicitacao
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getQuantidadeDeSolicitacoesAtivas = (request, response, condicao) => {
  pool.query(
    `SELECT count(*) AS quantidadeTotal
    FROM solicitacao_proposta
    WHERE solicitacao_proposta.status='S'
    
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getTotalRequisicoes = (request, response) => {
  pool.query(
    `SELECT count(*) AS quantidadeTotal
    FROM solicitacao_proposta
    
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getValoresCoberturasByCondition = (request, response, condicao) => {
  pool.query(
    `SELECT SUM(id_solicitacao)
    FROM solicitacao_proposta
    WHERE solicitacao_proposta.status= ${condicao}
    
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getValorTotalSolicitacoes = (request, response) => {
  pool.query(
    `SELECT sum(valorTotal::integer) as total FROM solicitacao_proposta
  `,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getQuantidadeDeSolicitacoesMes,
  getQuantidadeSolicitacoesAno,
  getValoresTotaisCoberturas,
  getValoresPorMes,
  getQuantidadeDeSolicitacoesAtivas,
  getValoresCoberturasByCondition,
  getValorTotalSolicitacoes,
  getTotalRequisicoes
};
