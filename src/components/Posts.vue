<script setup>

import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

// const posts = reactive({}) //dose not works with null obj with reactive
// const posts = reactive([]) //works but posts lenth is 0 so not working
// So i think posts = reactive() dose not work properly 
// But ref its works properly
//const posts = ref({})  //its works
const posts = ref([])

onBeforeMount(()=>{

    fetch(`https://dummyjson.com/posts?limit=20`)
    .then(res=>res.json())
    .then (data=>{
        posts.value = data.posts
    })
})

// to use slug intead of id

// function getSlug(title) {
//     return title.toLowerCase().replace(/\s+/g, '-')
// }
// to load more posts
// or pagination
function loadMore() {
    axios.get('https://dummyjson.com/posts?limit=20&skip=20')
        .then(res => {
            posts.value = [...posts.value, ...res.data.posts]
        })
}

</script>
<template>
    <h1 class="text-2xl mb-3">This is Posts page  {{ posts.length }}</h1>
    <article class="mb-10" v-for="post in posts" :key="post.id">
    <!-- <article class="mb-10" > -->
        <h1 class="text-xl mb-2">
            <!-- <router-link :to="{ name: 'post', params: { id: getSlug(post.title) } }">{{ post.title }}</router-link> -->
            <router-link :to="{ name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>
            <!-- {{ post.title }} -->
        </h1>
        <p>
            <router-link :to="{ name: 'post', params: { id: post.id } }">
                <!-- <img :src="`//source.unsplash.com/random/300x200?1`" alt=""> -->
                <img :src="`//source.unsplash.com/random/300x200?${post.id}`" :alt="post.title">
            </router-link>
            {{ post.body }}
            
        </p>
    </article>

     <!-- 
        Here is a if condition
     if posts.length is less than 0 
     then hide load more button
     Trics: 
     when load all post from api 
     then show loadmore button  
    -->

    <button @click="loadMore()"
     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    v-if="posts.length>0"
    >
        Load More
    </button>
</template>

<style></style>