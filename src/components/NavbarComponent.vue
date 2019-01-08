<template>
    <!-- Navigation -->
    <b-navbar toggleable sticky class="bd-navbar" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand>
                    <router-link class="logo" to="/">
                    Simple Vue Blog
                    </router-link>
            </b-navbar-brand>
            <!-- <b-collapse is-nav id="nav_text_collapse">
            </b-collapse> -->
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
    .logo, .logo:hover {
        color:#FFFFFF;
        text-decoration: none;
    }
</style>
