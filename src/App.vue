<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav class="navbar mb-4" style="background-color: #00807a">
      <div class="container-fluid">

        <a class="navbar-brand" style="color: #FFFFFF" href="#">Elise City</a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name:'home'}"  style="color: #FFFFFF" >Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="color: #FFFFFF" :to="{name:'home'}">Suivie des demandes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="color: #FFFFFF"  :to="{name:'EspaceAd'}">Espace Administrateur</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style >

</style>
