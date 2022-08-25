<template>
  <div class="container-fluid">
    <Navbar />
    <RouterView />
    <footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  componets: {
    Navbar,
    Footer,
  },
};
</script>
