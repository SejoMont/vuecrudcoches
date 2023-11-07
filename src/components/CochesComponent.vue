<template>
  <div>
    <h1>CRUD Coches</h1>
    <img
      src="./../assets/images/Loading.gif"
      v-if="status == false"
      style="width: 50%; margin: 0 auto"
    />
    <table
      v-else
      class="table table-striped text-center"
      style="width: 70%; margin: 0 auto"
    >
      <thead>
        <tr>
          <th>ID Coche</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Detalles</th>
          <th>Update</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in coches" :key="car">
          <td>{{ car.idCoche }}</td>
          <td>{{ car.marca }}</td>
          <td>{{ car.modelo }}</td>
          <td>
            <router-link
              class="nav-link"
              :to="
                '/details/' +
                car.idCoche 
              "
              >📄
            </router-link>
          </td>
          <td>
            <router-link
              :to="'/update/' + car.idCoche"
              class="nav-link"
            >
              ✏️
            </router-link>
          </td>
          <td>
            <router-link :to="'/delete/' + car.idCoche" class="nav-link"
              >🗑️</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ServiceCoches from "../services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
      this.status = true;
    });
  },
  data() {
    return {
      coches: [],
      status: false,
    };
  },
};
</script>