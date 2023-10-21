<template>
  <div class="container mt-4">
    <h2 class="mb-3">Ajouter un Nouveau Type de Demande</h2>
    <form @submit.prevent="addType" class="mb-4">
      <div class="input-group">
        <input
          v-model="newType"
          class="form-control"
          placeholder="Nouveau Type de Demande"
        />
        <div class="input-group-append">
          <button type="submit" class="btn ">Ajouter</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newType: "",
    };
  },
  methods: {
    addType() {
      const newTypeData = { Title: this.newType };
      axios
        .post("https://localhost:7129/api/RequestType", newTypeData)
        .then(() => {
          this.newType = "";
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout du type de demande:", error);
        });
    },
  },
};
</script>

<style scoped>
button {
  background-color:#00807a; 
  color: #fff; 
  border: none;
}
</style>
