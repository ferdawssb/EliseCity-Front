<template>
    <div>
      <br>
        
        <br>
        <br>
        


      <div class="container">
      <div class="d-grid gap-3">
        <button type="button" class="btn btn-primary btn-lg custom-btn">Gestion des utilisateurs</button>
        <button type="button" class="btn btn-primary btn-lg custom-btn">Gestion des thémes</button>
        <button type="button" class="btn btn-primary btn-lg custom-btn">Suivie des demandes</button>
        <button type="button" class="btn btn-primary btn-lg custom-btn">Déposer une demande</button>
        <router-link to="/profil">
        <button type="button" class="btn btn-primary btn-lg custom-btn">Gestion de profile</button></router-link> 
        <button type="button" class="btn btn-primary btn-lg custom-btn">Statistiques</button>
        
      </div>
     
      <button
      type="submit"
      class="btn btn-primary position-absolute start-50 translate-middle-x"
      style="background-color: #00807a ! important; width: 300px; left: 50%; transform: translateX(-50%); bottom: 20px; position: relative; border-color: #6f7676 !important;
  box-shadow: none; "
    >
      Déconnection
    </button>
    
    </div>

    </div>
 
</template>

<script>


export default {
  name:"EspaceAdmin",
};


</script>   

<style>
/* Applique un espacement horizontal aux boutons */
.btn-spacer {
  margin-right: 10px;
}

/* Style personnalisé pour les boutons */
.custom-btn {
  background-color: #00807a;
  border-color: #00807a;
  color: white;
}
/* Style personnalisé pour la couleur de survol et de clic */
.custom-btn:hover,
.custom-btn:active {
  background-color: #6f7676  !important;
  border-color: #6f7676 !important;
  box-shadow: none; /* Désactive l'ombre au clic */
  
}
.text-center {
  display: flex;
  justify-content: center;
}

        
</style>