<template>
  <div class="home">
    <NavbarView />
    <div class="container">
      <HeroView />
      <div class="row mt-4">
        <div class="col">
          <h1>Best <strong>Inventaris</strong></h1>
        </div>
        <div class="col">
          <router-link to="/inventaris" class="btn btn-success float-right">
            <b-icon-eye class="mr-2"></b-icon-eye> Lihat Semua Barang
          </router-link>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="inventaris in inventarises" :key="inventaris.id">
          <CardInventaris :inventaris="inventaris" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@tanstack/vue-query";
import NavbarView from "@/components/Navbar.vue";
import HeroView from "@/components/HeroView.vue";
import CardInventaris from "@/components/CardView.vue";
import axios from "@/axios.js";

// Fetch data using Vue Query
const { data: inventarises, error } = useQuery({
  queryKey: ["inventaris"],
  queryFn: async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/inventaris");
    return response.data;
  },
});
</script>
