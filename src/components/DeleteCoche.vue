<template>
    <div>
      <h1>Borrar Coche</h1>
      <h2 style="color: red"></h2>
    </div>
  </template>
  <script>
import ServiceCoches from "../services/ServiceCoches";
const service = new ServiceCoches();
  
  export default {
    name: "DeleteCoche",
    mounted() {
      var id = this.$route.params.id;
      service.deleteCoche(id).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  };
  </script>