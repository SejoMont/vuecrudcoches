import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos {
  getCoches() {
    return new Promise(function (resolve) {
      var request = "api/coches";
      var url = Global.urlApiCoches + request;
      var coches = [];

      axios.get(url).then((response) => {
        coches = response.data;
        resolve(coches);
      });
    });
  }

  findCoche(id) {
    return new Promise(function (resolve) {
      var request = "api/coches/findcoche/" + id;
      var url = Global.urlApiCoches + request;
      var coches = [];

      axios.get(url).then((response) => {
        coches = response.data;
        resolve(coches);
      });
    });
  }

  insertCoche(coche) {
    return new Promise(function (resolve) {
      var request = "api/coches/insertcoche";
      var url = Global.urlApiCoches + request;
      axios.post(url, coche).then((response) => {
        resolve(response);
      });
    });
  }

  updateCoche(coche) {
    return new Promise(function (resolve) {
      var request = "api/coches/updatecoche";
      var url = Global.urlApiCoches + request;
      axios.put(url, coche).then((response) => {
        resolve(response);
      });
    });
  }

  deleteCoche(id) {
    return new Promise(function (resolve) {
      var request = "api/coches/deletecoche/" + id;
      var url = Global.urlApiCoches + request;
      var coches = [];

      axios.get(url).then((response) => {
        coches = response.data;
        resolve(coches);
      });
    });
  }
}
