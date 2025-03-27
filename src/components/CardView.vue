<template>
  <div class="card shadow card-inventaris">
    <img :src="'/images/' + inventaris.image_url" class="card-img-top" alt="Image" />
    <div class="card-body">
      <h5 class="card-title">{{ inventaris.name }}</h5>
      <!-- Corrected class and fixed the title -->
      <p class="card-text">category : {{ inventaris.category }}</p>
      <p class="card-text">quantity : {{ inventaris.quantity }}</p>
      <p class="card-text">status : {{ inventaris.status }}</p>
      <p class="card-text">expired : {{ inventaris.expired }}</p>
      <router-link class="btn btn-success" :to="`/inventaris/${inventaris.id}`"> <b-icon-cart class="mr-2"></b-icon-cart>Pesan </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInventaris",
  props: ["inventaris"], // Ensure product is passed correctly as a prop
};
</script>

<style>
/* Add styles if necessary */
</style>
