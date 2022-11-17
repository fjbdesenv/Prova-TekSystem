import { createStore } from 'vuex';

export default createStore({
  state: {
    operacao: {
      categoria: {
        value:  false,
        codigo: -1
      },
      transacao: {
        value:  false,
        codigo: -1
      }
    },
    listaTransacao: [],
    listaCategoria: []
  },
  getters: {
    getOpCategoria: (state) => state.operacao.categoria,
    getOpTransacao: (state) => state.operacao.transacao,
    listaTransacao: (state) => state.listaTransacao,
    listaCategoria: (state) => state.listaCategoria
  },
  mutations: {
    atualizarOpCategoria: (status, newStatus) => status.operacao.categoria = newStatus,
    atualizarOpTransacao: (status, newStatus) => status.operacao.transacao = newStatus,
    atualizarListaCategoria: (status, lista) => status.listaCategoria = lista,
    atualizarListaTransacao: (status, lista) => status.listaTransacao = lista,
    deleteCategoria: (status, codigo) => status.listaCategoria = status.listaCategoria.filter((categoria) => categoria.codigo != codigo),
    deleteTransacao: (status, codigo) => status.listaTransacao = status.listaTransacao.filter((transacao) => transacao.codigo != codigo),
  },
  actions: {
  },
  modules: {
  },
});
