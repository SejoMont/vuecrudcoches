<template>
  <div>
    <h1>Crear Coche</h1>
    <br />
    <form
      class="text-start"
      v-on:submit.prevent="insertCoche()"
      style="width: 60%; margin: 0 auto"
    >
      <!-- <label>ID Departamento: </label>
      <input
        type="number"
        class="form-control"
        v-model="departamento.idDepartamento"
      /><br /> -->
      <label>Marca: </label>
      <input type="text" class="form-control" v-model="coche.marca" /><br />
      <label>Modelo: </label>
      <input type="text" class="form-control" v-model="coche.modelo" /><br />
      <label>Conductor: </label>
      <input type="text" class="form-control" v-model="coche.conductor" /><br />
      <label>Imagen: </label>
      <input type="text" class="form-control" v-model="coche.imagen" /><br />

      <div class="text-end">
        <button class="btn btn-outline-success">Crear</button>
      </div>
    </form>
  </div>
</template>
  <script>
import ServiceCoches from "../services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "CreateCoche",
  methods: {
    insertCoche() {
      service.insertCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
        // this.mensaje = "Insertado correctamente";
      });
    },
  },
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
      mensaje: "",
    };
  },
};
</script>
  