<template>
  <div class="container-fluid">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './navigation/index.vue'
</script>