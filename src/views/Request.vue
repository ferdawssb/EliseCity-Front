<template>
  <div>
    <h2 class="text-center mt-4">Formulaire d'Insertion de Demande</h2>
    <form @submit.prevent="submitRequest" class="mt-4">
      <div class="form-group">
        <label for="title"><i class="fas fa-heading"></i> Titre</label>
        <input type="text" id="title" v-model="req.title" class="form-control rounded-pill" />
      </div>

      <div class="form-group">
        <label for="description"><i class="fas fa-file-alt"></i> Description</label>
        <textarea id="description" v-model="req.description" class="form-control rounded" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label for="requestType"><i class="fas fa-tags"></i> Type de Demande</label>
        <select id="requestType" v-model="req.IdType" class="form-control rounded-pill">
          <option value="">Sélectionnez un type</option>
          <option v-for="idType in idTypes" :key="idType.id" :value="idType.id">
            {{ idType.title }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="user"><i class="fas fa-user"></i> Nom de l'Utilisateur</label>
        <select id="user" v-model="req.IdUser" class="form-control rounded-pill">
          <option value="">Sélectionnez un utilisateur</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.firstname + " " + user.lastname }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="longitude"><i class="fas fa-globe"></i> Longitude</label>
        <input type="text" id="longitude" v-model="req.longitude" class="form-control rounded-pill" readonly />
      </div>

      <div class="form-group">
        <label for="latitude"><i class="fas fa-globe"></i> Latitude</label>
        <input type="text" id="latitude" v-model="req.latitude" class="form-control rounded-pill" readonly />
      </div>

      <div id="mapContainer" class="mt-4"></div>
      

      <button type="submit" class="btn btn-success btn-lg btn-block rounded-pill mt-4">Enregistré </button>
      <div class="mt-4" style="margin-bottom: 20px;"></div>

    </form>
  </div>
</template>


<script>
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import "../../public/Tween.js";
import "../../public/leaflet.curve.js";

export default {
  data() {
    return {
      req: {
        map: null,
        title: "",
        IdType: null,
        IdUser: null,
        user: "",
        longitude: null,
        latitude: null,
      },
      idTypes: [], // Une liste pour stocker les noms d'id type depuis l'API
      users: [],
    };
  },
  mounted() {
    this.map = L.map("mapContainer").setView([46.05, 11.05], 5);
    console.log(this.map);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400

    //  add marker on click
    this.map.on("click", (e) => {
      const oldMarker = this.map._layers[Object.keys(this.map._layers)[1]];
      if (oldMarker) {
        this.map.removeLayer(oldMarker);
      }

      this.req.latitude = e.latlng.lat;
      this.req.longitude = e.latlng.lng;
      L.marker(e.latlng).addTo(this.map);
    });

    // Effectuez la requête GET pour obtenir les noms d'id type
    axios
      .get("https://localhost:7129/api/RequestType")
      .then((response) => {
        // Stockez les noms de type de request dans la liste idTypes
        this.idTypes = response.data;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des id types :", error);
      });

    axios
      .get("https://localhost:7129/api/User/")
      .then((response) => {
        // Stockez les noms de type de request dans la liste idTypes
        this.users = response.data;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des id types :", error);
      });
  },
  methods: {
    submitRequest() {
      // Convertissez la valeur de Latitude et logitude  en décimal
      this.req.Latitude = parseFloat(this.req.latitude);
      this.req.Longitude = parseFloat(this.req.latitude);
      // to string
      this.req.IdType = this.req.IdType.toString();
      this.req.IdUser = this.req.IdUser.toString();
      axios
        .post("https://localhost:7129/api/Request", this.req)
        .then((response) => {
          console.log("Données insérées avec succès :", response.data);
          alert("Données insérées avec succès");

          // Réinitialisez les champs du formulaire
          this.req.title = "";
          this.req.description = "";
          this.req.longitude = null;
          this.req.latitude = null;
          this.req.IdType = null;
          this.req.IdUser = null;
          const oldMarker = this.map._layers[Object.keys(this.map._layers)[1]];
          if (oldMarker) {
            this.map.removeLayer(oldMarker);
          }
        })
        .catch((error) => {
          console.log("Erreur lors de la requête POST :", error.response);
          alert("Erreur lors de l'insertion des données");
        });
    },
  },
};
</script>

<style scoped>

.text-center {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

#mapContainer {
  width: 100%; /* Remplissez la largeur disponible */
  height: 300px; /* Ajustez la hauteur comme souhaité */
}

</style>
