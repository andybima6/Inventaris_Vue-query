<template>
  <div>
    <NavbarView />
    <div class="inventory-detail">
      <div class="container">
        <!-- Breadcrumb -->
        <div class="row mt-5">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/inventaris" class="text-dark">Inventaris</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="" class="text-dark">Detail Barang</router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <img :src="'/images/' + inventaris?.image_url" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ inventaris?.name }}</strong>
            </h2>
            <h4>
              Category: <strong>{{ inventaris?.category }}</strong>
            </h4>
            <h5>
              Jumlah Barang: <strong>{{ inventaris?.quantity }}</strong>
            </h5>
            <h5>
              Status: <strong>{{ inventaris?.status }}</strong>
            </h5>
            <h5>
              Kadaluarsa: <strong>{{ inventaris?.expired }}</strong>
            </h5>
            <hr />
            <form @submit.prevent="updateInventaris" class="mt-4">
              <div class="form-group">
                <label for="quantity">Jumlah Barang</label>
                <input type="number" id="quantity" class="form-control" v-model="stok.jumlah_barang" />
              </div>
              <button type="submit" class="btn btn-success">
                <b-icon-check-all class="mr-2"></b-icon-check-all> Update Stok
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRoute, useRouter } from "vue-router";
import axios from "@/axios.js";
import NavbarView from "@/components/Navbar.vue";

// Vue Router
const route = useRoute();
const router = useRouter();

// Query Client
const queryClient = useQueryClient();

// Reactive state
const stok = ref({ jumlah_barang: null });

// Fetch inventory details
const { data: inventaris, error } = useQuery({
  queryKey: ["inventaris", route.params.id],
  queryFn: async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/inventaris/${route.params.id}`);
    return response.data;
  },
});

// Mutation for updating inventory
const { mutate: updateInventaris } = useMutation({
  mutationFn: async () => {
    if (!stok.value.jumlah_barang) {
      throw new Error("Jumlah Barang Harus Diisi");
    }
    await axios.post(`http://127.0.0.1:8000/api/inventaris`, {
      ...inventaris.value,
      quantity: stok.value.jumlah_barang,
    });
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["inventaris"]);
    router.push("/inventaris");
    alert("Inventaris Berhasil Diperbarui!");
  },
  onError: (err) => {
    alert(`Error: ${err.message}`);
  },
});
</script>
