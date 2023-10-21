<template>
  <div>
    <h2>Liste des Types de Demande</h2>
    <ul>
      <li v-for="type in requestTypes" :key="type.id">
        {{ type.title }}
        <button @click="deleteType(type.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      requestTypes: [],
    };
  },
  methods: {
    deleteType(typeId) {
      axios
        .delete(`https://localhost:7129/api/RequestType?id=${typeId}`)
        .then(() => {
          this.loadRequestTypes();
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la suppression du type de demande:",
            error
          );
          console.log(error.response); // Affichez la réponse d'erreur
        });
    },
    loadRequestTypes() {
      axios
        .get("https://localhost:7129/api/RequestType")
        .then((response) => {
          this.requestTypes = response.data;
        })
        .catch((error) => {
          console.error(
            "Erreur lors du chargement des types de demande:",
            error
          );
        });
    },
  },
  mounted() {
    this.loadRequestTypes();
  },
};
</script>
<style scoped>
.request-types {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}
</style>