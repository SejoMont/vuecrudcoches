<template>
  <div>
    <h1>Modificar Coche</h1>
    <br />
    <form
      v-if="coche"
      class="text-start"
      v-on:submit.prevent="updateCoche()"
      style="width: 60%; margin: 0 auto"
    >
      <label>ID Coche: </label>
      <input
        type="number"
        class="form-control"
        v-model="coche.idCoche"
        disabled
      /><br />
      <label>Marca: </label>
      <input type="text" class="form-control" v-model="coche.marca" /><br />
      <label>Modelo: </label>
      <input type="text" class="form-control" v-model="coche.modelo" /><br />
      <label>Conductor: </label>
      <input type="text" class="form-control" v-model="coche.conductor" /><br />
      <label>Imagen: </label>
      <input type="text" class="form-control" v-model="coche.imagen" /><br />

      <div class="text-end">
        <button class="btn btn-outline-success">Modificar</button>
      </div>
    </form>
  </div>
</template>
    <script>
import ServiceCoches from "../services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "UpdateCoche",
  methods: {
    updateCoche() {
      service.updateCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
        // this.mensaje = "Insertado correctamente";
      });
    },
  },
  mounted() {
    var id = this.$route.params.id;
    service.findCoche(id).then((result) => {
      this.coche = result;
    });
  },
  data() {
    return {
      coche: null,
    };
  },
};
</script>
    