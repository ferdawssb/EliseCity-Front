<template>
  <div>
    <h2>Formulaire d'Insertion de Demande</h2>
    <form  @submit.prevent="submitRequest" >
      <label for="title">Titre</label>
      <input type="text" id="title" v-model="model.composant.Title" >

      <label for="description">Description</label>
      <textarea id="description" v-model="model.composant.Description"></textarea>

      

      <label for="requestType">Type de Demande</label>
      <input type="text" id="requestType" v-model="model.composant.id_type" required >

      <label for="user">Nom de l'Utilisateur</label>
      <input type="text" id="user" v-model="model.composant.Firstname" >

      <label for="longitude">Longitude </label>
      <input type="text" id="longitude" v-model="model.composant.Longitude" >

      <label for="latitude">Latitude</label>
      <input type="text" id="latitude" v-model="model.composant.Latitude" >

      <button type="submit">Insérer</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      model: {
        composant: {
          Title: "", // Correspond à la propriété Title de RequestDto
          Description: "", // Correspond à la propriété Description de RequestDto
          id_type: "", // Correspond à la propriété RequestType.title de RequestDto
          Firstname: "", // Correspond à la propriété User.Firstname de RequestDto
          Longitude: null, // Correspond à la propriété Longitude de RequestDto
          Latitude: null, // Correspond à la propriété Latitude de RequestDto
        },
      },
    };
  },
  methods: {
    submitRequest() {
  axios
    .post("https://localhost:7129/api/Request", this.model.composant)
    .then((response) => {
      console.log("Données insérées avec succès :", response.data);
      alert("Données insérées avec succès");

    //   // Réinitialisez les champs du formulaire
    //   this.model.composant.Title = "";
    //   this.model.composant.Description = "";
    //   this.model.composant.titlereq = "";
    //   this.model.composant.Firstname = "";
    //   this.model.composant.Longitude = null;
    //   this.model.composant.Latitude = null;
    })
    .catch((error) => {
      console.error("Erreur lors de la requête POST :", error.response);
      alert("Erreur lors de l'insertion des données");
    });
}
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
textarea {
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
