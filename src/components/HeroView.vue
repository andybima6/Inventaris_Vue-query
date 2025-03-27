<template>
  <div class="hero">
    <!-- desktop -->
    <!-- md ukuran mobile sedangkan sm ukuran desktop -->
    <div class="d-md-block d-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Optimalkan Pengelolaan Inventaris</strong><br />Dengan Mudah dan Efisien</h2>
              <p>Kelola dan lacak semua inventaris Anda secara real-time, kapan saja dan di mana saja.</p>
              <router-link to="/inventaris" class="btn btn-lg btn-primary"> <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Mulai Kelola Sekarang </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="@/assets/images/kulineran.png" width="100%" alt="Inventaris" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <img src="@/assets/images/kulineran.png" width="100%" alt="Inventaris" />
        </div>
        <div class="col-12">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Optimalkan Pengelolaan Inventaris</strong><br />Dengan Mudah dan Efisien</h2>
              <p>Kelola dan lacak semua inventaris Anda secara real-time, kapan saja dan di mana saja.</p>
              <router-link to="/inventory" class="btn btn-lg btn-primary"> <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Mulai Kelola Sekarang </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>
