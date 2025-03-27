<template>
  <div>
    <NavbarView />
    <div class="container">
      <HeroView />
      <div class="row">
        <div class="col mt-4">
          <h2>Daftar <strong>Inventaris</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Inventaris..."
              aria-label="Cari Inventaris"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="text-center mt-4">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <div v-else-if="error" class="alert alert-danger">
        Terjadi kesalahan saat memuat data: {{ error.message }}
      </div>

      <div class="row mb-3">
        <div class="col-md-3 mt-4" v-for="inventaris in filteredInventarises" :key="inventaris.id">
          <CardInventaris :inventaris="inventaris" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "@/axios.js";
import NavbarView from "@/components/Navbar.vue";
import HeroView from "@/components/HeroView.vue";
import CardInventaris from "@/components/CardView.vue";

// Reactive state untuk pencarian
const search = ref("");

// Fetch inventaris dengan Vue Query
const { data: inventarises, isLoading, error } = useQuery({
  queryKey: ["inventaris"],
  queryFn: async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/inventaris");
    return response.data;
  },
});

// Filter inventaris secara reaktif
const filteredInventarises = computed(() => {
  if (!inventarises.value) return [];
  if (!search.value.trim()) return inventarises.value;
  return inventarises.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
/* Tambahkan style khusus jika diperlukan */
</style>
