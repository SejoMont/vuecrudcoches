import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from './components/CochesComponent.vue';
import DetallesCoche from './components/DetallesCoche.vue'
import CreateCoche from './components/CreateCoche.vue'
import UpdateCoche from './components/UpdateCoche.vue'
import DeleteCoche from './components/DeleteCoche.vue'

const myRouters = [
  {
    path: "/",
    component: CochesComponent,
  },
  {
    path: "/details/:id",
    component: DetallesCoche,
  },
  {
    path: "/createcoche",
    component: CreateCoche,
  },
  {
    path: "/update/:id",
    component: UpdateCoche,
  },
  {
    path: "/delete/:id",
    component: DeleteCoche,
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes: myRouters,
});

export default router;
