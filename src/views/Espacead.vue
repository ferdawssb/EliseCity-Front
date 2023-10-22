<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-4">
        <h1>Espace Admin</h1>
      </div>

      <div class="col-12 col-md-6">
        <div class="btn-group-vertical w-100" role="group">
          <router-link to="/gestionuser" class="btn btn-primary custom-btn mb-3">
            Gestion des utilisateurs
          </router-link>

          <router-link to="/gestionTheme" class="btn btn-primary custom-btn mb-3">
            Gestion des thèmes
          </router-link>

          <router-link to="/requests" class="btn btn-primary custom-btn mb-3">
            Suivi des demandes
          </router-link>

          <router-link to="/request" class="btn btn-primary custom-btn mb-3">
            Déposer une demande
          </router-link>

          <router-link to="/profile" class="btn btn-primary custom-btn mb-3">
            Gestion de profil
          </router-link>

          <button
            type="button"
            class="btn btn-primary custom-btn mb-3"
          >
            Statistiques
          </button>
        </div>
      </div>
      <router-link to="/" class="col-12 text-center mt-4">
  <div class="btn">
    <div class="my-custom-button">
      Déconnexion
    </div>
  </div>
</router-link>

    
    </div>
  </div>
</template>

<script>
export default {
  name: "EspaceAdmin",
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #abe9e6;
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
  background-color: #6f7676 !important;
  border-color: #6f7676 !important;
  box-shadow: none; /* Désactive l'ombre au clic */
}
.my-custom-button {
  background-color: #00807a; /* Couleur bleue par exemple */
  color: #fff; /* Texte en blanc */
  padding: 10px 20px; /* Ajustez les marges intérieures pour l'apparence souhaitée */
 border-radius: 6px; /* Ajoutez une bordure arrondie si nécessaire */
  /* Ajoutez d'autres styles au besoin */
}
</style>
