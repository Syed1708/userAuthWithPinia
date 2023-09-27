<script setup>
  import { useAuthStore } from '../store/authstore2';

  const authStore = useAuthStore();


</script>
<template>
    <h1 class="text-2xl mb-3">This is Home page</h1>

    <!-- if user login then show this h1 -->
    <h1 class="text-2xl mb-3" v-if="authStore.isAuthenticated">This is private content </h1>
    
    <!-- we can also use stote data for h1  -->
    <h1 class="text-2xl mb-3" v-if="authStore.isAuthenticated">This is private content 222</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque natus eligendi. Dicta ullam obcaecati quidem blanditiis, illum minus possimus earum adipisci sunt accusantium autem. Saepe molestias quaerat enim. Autem.
    </p>


</template>

<style></style>