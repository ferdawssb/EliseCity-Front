<template>
  <div class="bg-color">
    <br />
    <br />
    <h1 style="color: #00807a">Bienvenue dans l'espace administrateur!</h1>
    <blockquote class="blockquote">
      <p class="text-center" style="color: #ffffff">
        Améliorez la gestion des demandes citoyennes avec une réponse rapide et
        dynamique
      </p>
    </blockquote>
    <br />

    <div class="d-flex justify-content-center align-items-center vh-80">
      <form @submit.prevent="login" style="width: 500px">
        <h1 class="text-center" style="color: #00807a">Connection</h1>
        <div class="mb-3">
          <input
            type="email"
            v-model="user.email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Adresse mail..."
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="user.password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Mot de passe..."
          />
        </div>
        <div class="d-flex justify-content-center align-items-center vh-1">
          <button
            type="submit"
            class="btn btn-primary"
            style="background-color: #00807a"
          >
            Connection
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { accountService } from "@/_services";
import EspaceAdmin from "../components/EspaceAdmin.vue";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then((res) => {
          console.log(res.data);
          accountService.saveToken(res.data.access_token); // Cookie expire après 1 jour
          // Redirigez vers la page authentifiée
          this.$router.push({ name: "espacead" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #abe9e6;
}
</style>
