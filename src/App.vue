<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav class="navbar" style="background-color: #00807a">
      <div class="container-fluid">

        <a class="navbar-brand" style="color: #FFFFFF" href="#">Elise City</a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"  style="color: #FFFFFF" >Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #FFFFFF" href="#">Suivie des demandes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #FFFFFF"  href="#">Espace Administrateur</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
