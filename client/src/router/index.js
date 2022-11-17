import { createRouter, createWebHistory } from 'vue-router';
import InicioRouter from './inicio';
import CategoriaRouter from './categoria';
import TransacaoRouter from './transacao';

const routes = [
  InicioRouter,
  CategoriaRouter,
  TransacaoRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
