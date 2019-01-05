<template>
    <!-- Navigation -->
    <b-navbar toggleable sticky class="bd-navbar" type="dark" variant="dark">
    <b-container>
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
    <b-navbar-brand>Simple Vue Blog</b-navbar-brand>
    <b-collapse is-nav id="nav_text_collapse">
    </b-collapse>
    </b-container>
    </b-navbar>
</template>

<script>

export default {
    name:"NavbarComponent",
	data (){
        return {

        }
    }
}
</script>

<style>

</style>
