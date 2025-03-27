<template>
  <div class="card shadow card-inventaris">
    <img 
      :src="inventaris.image_url ? '/images/' + inventaris.image_url : '/images/default.jpg'" 
      class="card-img-top" 
      alt="Image" 
    />
    <div class="card-body">
      <h5 class="card-title">{{ inventaris?.name || "Nama Tidak Tersedia" }}</h5>
      <p class="card-text">Category: {{ inventaris?.category || "-" }}</p>
      <p class="card-text">Quantity: {{ inventaris?.quantity || "0" }}</p>
      <p class="card-text">Status: {{ inventaris?.status || "Tidak Diketahui" }}</p>
      <p class="card-text">Expired: {{ inventaris?.expired || "Tidak Ada" }}</p>
      <router-link class="btn btn-success" :to="`/inventaris/${inventaris.id}`">
        <b-icon-cart class="mr-2"></b-icon-cart> Pesan
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  inventaris: Object,
});
</script>
