

<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
            Users
           
          </h4>
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
                <th>createAt</th>
                
              </tr>
            </thead>
  
            <tbody>
              <tr v-for="(user, index) in User " :key="index">
                <td> {{ user.id}} </td> 
                <td> {{ user.firstname }} </td>
                <td> {{ user.lastname }}</td>
                <td> {{ user.mobile}}</td>
                <td> {{ user.login }}</td>
                <td> {{ user.createAt}}</td>
               
  
                <td>
                  
                  <button  @click="deleteUser(index)"  type="button" class="btn btn-danger" >Delete</button>
                  <RouterLink to="/" class="btn btn-primary float-end">
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
import UpdateUser from "./UpdateUser.vue";

export default {
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
      axios.get("https://localhost:7129/api/User")
        .then((response) => {
          this.User = response.data;
          console.log(this.User);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des utilisateurs :", error);
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
            console.error("Erreur lors de la suppression de l'utilisateur :", error);
          });
      }
    },

  },





  }

 
  </script>
  <style>

  body {
  margin: 0;
  padding: 0;
  background-color: #abe9e6;
}


  </style>