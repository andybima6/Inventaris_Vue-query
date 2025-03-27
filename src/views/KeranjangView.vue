<template>
  <div class="keranjang">
    <NavbarView />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/inventaris" class="text-dark">Inventaris</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Tabel Inventaris -->
      <div class="row">
        <div class="col">
          <h2>Daftar <strong>Inventaris</strong></h2>

          <div v-if="isLoading" class="text-center mt-4">
            <b-spinner label="Loading..."></b-spinner>
          </div>
          <div v-else-if="error" class="alert alert-danger">
            Gagal memuat data: {{ error.message }}
          </div>

          <div v-else class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Foto</th>
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Jumlah</th>
                  <th>Status</th>
                  <th>Expired</th>
                  <th>Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in inventarisList" :key="item.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img :src="'/storage/' + item.image_url" class="img-fluid shadow" width="100" />
                  </td>
                  <td><strong>{{ item.name }}</strong></td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.expired }}</td>
                  <td align="center" class="text-danger">
                    <button class="btn btn-danger" @click="hapusInventaris(item.id)">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <router-link class="btn btn-success float-right" :to="`/PesananSukses`">
            <b-icon-cart class="mr-2"></b-icon-cart>Tambahkan
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import NavbarView from "@/components/Navbar.vue";
import axios from "@/axios.js";

// Query Client untuk caching
const queryClient = useQueryClient();

// Fetch Inventaris
const { data: inventarisList, isLoading, error } = useQuery({
  queryKey: ["inventaris"],
  queryFn: async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/inventaris");
    return response.data;
  },
});

// Hapus Inventaris
const { mutate: hapusInventaris } = useMutation({
  mutationFn: async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/inventaris/${id}`);
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["inventaris"]);
  },
});
</script>

<style scoped>
/* Tambahkan gaya jika diperlukan */
</style>
