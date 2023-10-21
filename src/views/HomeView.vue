<template>
  <div class="home">
    <header>
      <h1>Bienvenue sur Elise City</h1>
      <p>La plateforme pour gérer vos demandes</p>
    </header>
    <section class="features">
      <div class="feature">
        <i class="fas fa-map-marker-alt"></i>
        <h2>Déposer une demande</h2>
        <p>
          Déposez facilement une demande en spécifiant la localisation, le thème, la description et les documents pertinents.
        </p>
      </div>
      <div class="feature">
        <i class="fas fa-tasks"></i>
        <h2>Suivre vos demandes</h2>
        <p>
          Visualisez l'état de vos demandes : en attente, en cours de traitement ou traitées, et ajoutez des commentaires.
        </p>
      </div>
      <div class="feature">
        <i class="fas fa-users-cog"></i>
        <h2>Espace Administrateur</h2>
        <p>
          Gérez les utilisateurs, les thèmes, suivez les demandes, modifiez les états et consultez des statistiques.
        </p>
      </div>
    </section>
    <footer>
      <p>© 2023 Elise City</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px;
}

header {
  margin-bottom: 40px;
}

header h1 {
  font-size: 36px;
}

header p {
  font-size: 18px;
  color: #888;
}

.features {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.feature {
  flex: 1;
  max-width: 30%;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature i {
  font-size: 36px;
  margin-bottom: 10px;
}

.feature h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.feature p {
  font-size: 16px;
  color: #777;
}

footer {
  font-size: 14px;
  color: #888;
}
</style>
