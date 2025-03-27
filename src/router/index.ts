import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InventarisView from "../views/InventarisView.vue";
import InventarisDetail from "../views/InventarisDetailView.vue";
import KeranjangView from "../views/KeranjangView.vue";
import PesananSukses from "../views/PesananSukses.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/inventaris",
    name: "InventarisView",
    component: InventarisView,
  },
  {
    path: "/inventaris/:id",
    name: "InventarisDetail",
    component: InventarisDetail,
  },
  {
    path: "/keranjang",
    name: "KeranjangView",
    component: KeranjangView,
  },
  {
    path: "/pesanan-sukses",
    name: "PesananSukses",
    component: PesananSukses,
  },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan mode history
  routes,
});

export default router;
