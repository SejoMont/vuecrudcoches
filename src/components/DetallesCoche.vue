<template>
  <div>
    <h1>{{ coche.modelo }} - {{ coche.marca }}</h1>
    <h2>Conductor: {{ coche.conductor }}</h2>
    <img :src="coche.imagen" style="width: 60%;margin: 0 auto;">
    
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "DetallesCoche",
  mounted() {
    var id = this.$route.params.id

    service.findCoche(id).then((result) => {
      this.coche = result;
      this.status = true;
    });
  },
  data() {
    return {
      coche: {},
      status: false,
    };
  },
};
</script>