<template>
  <div>
    <h2>Formulaire d'Insertion de Demande</h2>
    <form @submit.prevent="submitRequest">
      <label for="title">Titre</label>
      <input type="text" id="title" v-model="req.title" />

      <label for="description">Description</label>
      <textarea id="description" v-model="req.description"></textarea>

      <label for="requestType">Type de Demande</label>
      <select id="requestType" v-model="req.requestType">
        <option value="">Sélectionnez un type</option>
        <option v-for="idType in idTypes" :key="idType">{{ idType }}</option>
      </select>

      <label for="user">Nom de l'Utilisateur</label>
      <input type="text" id="user" v-model="req.user" />

      <label for="longitude">Longitude </label>
      <input type="text" id="longitude" v-model="req.longitude" />

      <label for="latitude">Latitude</label>
      <input type="text" id="latitude" v-model="req.latitude" />

      <button type="submit">Insérer</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      req: {
        title: "",
        description: "",
        requestType: "",
        user: "",
        longitude: null,
        latitude: null,
      },
      idTypes: [], // Une liste pour stocker les noms d'id type depuis l'API
    };
  },
  mounted() {
    // Effectuez la requête GET pour obtenir les noms d'id type
    axios
      .get("https://localhost:7129/api/RequestType")
      .then((response) => {
        // Stockez les noms de type de request dans la liste idTypes
        this.idTypes = this.idTypes = response.data.map(
          (idType) => idType.title
        );
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

      console.log(this.req); // Affichez l'objet JSON dans la console

      axios

        .post("https://localhost:7129/api/Request", this.req)

        .then((response) => {
          console.log("Données insérées avec succès :", response.data);
          alert("Données insérées avec succès");

          // Réinitialisez les champs du formulaire
          this.req.title = "";
          this.req.description = "";
          this.req.requestType = "";
          this.req.user = "";
          this.req.longitude = null;
          this.req.latitude = null;
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
div {
  text-align: center;
  margin: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-top: 10px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea,
select.form-input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.alert {
  margin-top: 20px;
  padding: 10px;
  background-color: #ff5656;
  color: #fff;
  border-radius: 4px;
}
</style>
