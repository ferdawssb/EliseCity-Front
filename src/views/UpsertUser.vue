<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>{{ this.id ? "Update User" : "Ajouter un utilisateur" }}</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="upsertUser">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              v-model="currentUser.firstname"
            />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="currentUser.lastname"
            />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile</label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              v-model="currentUser.mobile"
            />
          </div>
          <div class="form-group">
            <label for="login">Login</label>
            <input
              type="text"
              class="form-control"
              id="login"
              v-model="currentUser.login"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="currentUser.password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ this.id ? "Mettre a jour" : "Ajouter" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"], // Déclarez la propriété "id" pour recevoir l'ID de l'utilisateur à mettre à jour
  data() {
    return {
      currentUser: {
        firstname: "",
        lastname: "",
        mobile: "",
        login: "",
        password: "",
      },
    };
  },
  mounted() {
    if (this.id) {
      axios.get(`https://localhost:7129/api/User/${this.id}`).then((response) => {
        this.currentUser = response.data;
      });
    }
  },

  methods: {
    upsertUser() {
      const userId = this.id; // Utilisez this.id pour obtenir l'ID de l'utilisateur à mettre à jour
      if (userId) {
        axios
          .put(`https://localhost:7129/api/User/${userId}`, this.currentUser)

          .then((response) => {
            console.log("Utilisateur mis à jour avec succès.", response.data);
            // Réinitialisez les champs de formulaire après la mise à jour réussie
            this.currentUser = {
              firstname: "",
              lastname: "",
              mobile: "",
              login: "",
              password: "",
            };
            // Redirigez l'utilisateur vers la page "GestionUser"
            this.$router.push({ name: "GestionUser" });
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la mise à jour de l'utilisateur :",
              error
            );
          });
      }else{
        axios
          .post(`https://localhost:7129/api/User/`, this.currentUser)

          .then((response) => {
            console.log("Utilisateur mis à jour avec succès.", response.data);
            // Réinitialisez les champs de formulaire après la mise à jour réussie
            this.currentUser = {
              firstname: "",
              lastname: "",
              mobile: "",
              login: "",
              password: "",
            };
            // Redirigez l'utilisateur vers la page "GestionUser"
            this.$router.push({ name: "GestionUser" });
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la mise à jour de l'utilisateur :",
              error
            );
          });
      }
    },
  },
};
</script>

<style>
/* Styles CSS si nécessaire */
</style>
