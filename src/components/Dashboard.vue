<script setup>

import { useAuthStore } from '../store/authstore2';

const authStore = useAuthStore();

const logoutUser = () => {
  authStore.logoutUser();
};

</script>
<template>
    <h1 class="text-2xl mb-3">This is Dashboard page</h1>
    <div>
    <p>Welcome, {{ authStore.currentUser.email }}</p>
    

    <button @click="logoutUser"
     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    
    >
    Logout
    </button>
  </div>
</template>

<style></style>