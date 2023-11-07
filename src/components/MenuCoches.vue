<template>
    <div class="fixed-top text-start">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img :src="logo" width="30">
            Coches</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/createcoche">Crear Coche</router-link>
              </li>
              <!-- <li class="nav-item dropdown">
                <button
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Oficios
                </button>
                <ul class="dropdown-menu">
                  <li v-for="oficio in oficios" :key="oficio">
                    <router-link
                      class="dropdown-item"
                      :to="'/empleadosoficio/' + oficio"
                      >{{ oficio }}</router-link
                    >
                  </li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
    
    <script>
    import logo from '../assets/logo.png'
  //   import ServiceEmpleados from "../services/ServiceEmpleados";
  //   const service = new ServiceEmpleados();
  
  export default {
    name: "MenuCoches",
    data() {
      return {
        logo: logo
      };
    },
  };
  </script>
    