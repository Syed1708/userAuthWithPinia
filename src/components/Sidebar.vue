<script setup>
import { useAuthStore } from '../store/authstore2';

const authStore = useAuthStore();

</script>

<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
          <li>
            <router-link to="/protected">Protected</router-link>
          </li>
          <li v-if="!authStore.isAuthenticated">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!authStore.isAuthenticated">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="authStore.isAuthenticated">
            <router-link to="/Dashboard">Dashboard</router-link>
          </li>
          
        </ul>
      </section>
</template>

<style>

</style>