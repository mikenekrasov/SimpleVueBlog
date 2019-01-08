<template>
  <!-- Navigation -->
  <b-navbar class="bd-navbar" type="dark" variant="dark" toggleable sticky>
    <b-container>
      <b-navbar-brand>
        <router-link class="logo" to="/">Simple Vue Blog</router-link>
      </b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "TheNavbar",
  
  data() {
    return {};
  }
};
</script>

<style scoped>
.logo,
.logo:hover {
  color: #ffffff;
  text-decoration: none;
}
</style>
