<template>
  <div class="container mt-4">
    <h2>Tambah Inventaris</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nama:</label>
        <input v-model="inventaris.name" type="text" class="form-control" id="name" required />
      </div>

      <div class="form-group">
        <label for="category">Kategori:</label>
        <input v-model="inventaris.category" type="text" class="form-control" id="category" required />
      </div>

      <div class="form-group">
        <label for="quantity">Kuantitas:</label>
        <input v-model="inventaris.quantity" type="number" class="form-control" id="quantity" required />
      </div>

      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="inventaris.status" class="form-control" id="status" required>
          <option value="available">Tersedia</option>
          <option value="unavailable">Tidak Tersedia</option>
        </select>
      </div>

      <div class="form-group">
        <label for="expired">Kadaluarsa:</label>
        <input v-model="inventaris.expired" type="date" class="form-control" id="expired" />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isPending">Simpan</button>
    </form>

    <div v-if="isPending" class="alert alert-info mt-3">Mengirim data...</div>
    <div v-if="isError" class="alert alert-danger mt-3">{{ error?.message }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";

const router = useRouter();
const queryClient = useQueryClient();

// State inventaris
const inventaris = ref({
  name: "",
  category: "",
  quantity: 0,
  status: "available",
  expired: "",
});

// Vue Query untuk create data
const { mutate: createInventaris, isPending, isError, error } = useMutation({
  mutationFn: (newInventaris) => axios.post("http://127.0.0.1:8000/api/inventaris", newInventaris),
  onSuccess: () => {
    queryClient.invalidateQueries(["inventaris"]); // Auto-refresh daftar inventaris
    router.push("/inventaris"); // Redirect setelah sukses
  },
});

// Fungsi submit form
const handleSubmit = () => {
  createInventaris(inventaris.value);
};
</script>
