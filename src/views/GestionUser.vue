<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Users</h4>
        <RouterLink to="/upsertUser/" class="my-custom-button float-end">
          Ajouter user
        </RouterLink>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>CreateAt</th>
              <th>UpdateAt</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, index) in User" :key="index">
              <td>{{ user.id }}</td>
              <td>{{ user.firstname }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.mobile }}</td>
              <td>{{ user.login }}</td>
              <td>{{ user.createAt }}</td>
              <td>{{ user.updateAt }}</td>

              <td>
                <button
                  @click="deleteUser(index)"
                  type="button"
                  class="my-custom-button delete-button"
                >
                  Delete
                </button>
                <RouterLink
                  :to="'/upsertUser/' + user.id"
                  class="my-custom-button update-button"
                >
                  Update
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "vue-toast-notification/dist/theme-bootstrap.css";
import { useToast } from "vue-toast-notification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      User: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://localhost:7129/api/User")
        .then((response) => {
          this.User = response.data;
          console.log(this.User);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des utilisateurs :",
            error
          );
        });
    },

    deleteUser(index) {
      if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        const userIdToDelete = this.User[index].id;

        axios
          .delete(`https://localhost:7129/api/User?id=${userIdToDelete}`)
          .then((response) => {
            // Suppression réussie, mettez à jour la liste des utilisateurs
            this.getUsers();
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la suppression de l'utilisateur :",
              error
            );
            this.toast.error("Erreur lors de la récupération de l'utilisateur");
          });
      }
    },
  },
};
</script>
<style>
.my-custom-button {
  background-color: #00807a; /* Couleur bleue - Modifiez-la selon vos préférences */
  color: #fff; /* Texte en blanc */
  padding: 8px 16px; /* Ajustez les marges intérieures pour l'apparence souhaitée */
  border: none; /* Supprime la bordure */
  border-radius: 4px; /* Coins arrondis */
  cursor: pointer; /* Curseur main au survol */
  transition: background-color 0.3s; /* Animation de transition pour la couleur de fond */
  margin-right: 10px;
}

.my-custom-button:hover {
  background-color: #005d56; /* Couleur de survol - Modifiez-la selon vos préférences */
}

.delete-button {
  background-color: #00807a; /* Couleur de bouton "Delete" */
}

.delete-button:hover {
  background-color:  #00807a; /* Couleur de survol de bouton "Delete" */
}

.update-button {
  background-color: #00807a; /* Couleur de bouton "Update" */
}

.update-button:hover {
  background-color:  #00807a; /* Couleur de survol de bouton "Update" */
}

</style>







