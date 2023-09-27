<script setup>

</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Simple User Authontication</header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <!-- sidebar router-view 
       we can call different router-view for different page 
       1. we call here with name but no name will display as default
       2. we need separelty declare in router.js file under components like
       components: {
            default: Contact,
            LeftSideBar: Sidebar
        }

      -->
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped>

</style>
