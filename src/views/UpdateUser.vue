<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Update User</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateUser">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              v-model="updatedUser.firstname"
            />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="updatedUser.lastname"
            />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile</label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              v-model="updatedUser.mobile"
            />
          </div>
          <div class="form-group">
            <label for="login">Login</label>
            <input
              type="text"
              class="form-control"
              id="login"
              v-model="updatedUser.login"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="updatedUser.password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
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
      updatedUser: {
        firstname: "",
        lastname: "",
        mobile: "",
        login: "",
        password: "",
      },
    };
  },

  methods: {


    updateUser() {

      const userId = this.id; // Utilisez this.id pour obtenir l'ID de l'utilisateur à mettre à jour
      axios
        .put(`https://localhost:7129/api/User/${userId}`, this.updatedUser)
        .then((response) => {
          console.log("Utilisateur mis à jour avec succès.", response.data);
          // Réinitialisez les champs de formulaire après la mise à jour réussie
          this.updatedUser = {
            firstname: "",
            lastname: "",
            mobile: "",
            login: "",
            password: "",
          };
        })
        .catch((error) => {
          console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        });
    },
  },
};

</script>

<style>
/* Styles CSS si nécessaire */
</style>
