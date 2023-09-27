<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id

const singlePost = reactive({})

// const comments = reactive([])//Here reactive dose not work
const comments = ref([])

// load sinple post from API with id
onBeforeMount(()=>{

    //without axios
    // fetch(`https://dummyjson.com/post/${id}`)
    // .then(res=> res.json())
    // .then(data=>{
    //     singlePost.id = data.id
    //     singlePost.title = data.title
    //     singlePost.body = data.body
    // })

    // with axios

    axios.get(`https://dummyjson.com/posts/${id}`)
        .then(res => {
            singlePost.id = res.data.id
            singlePost.title = res.data.title
            singlePost.body = res.data.body
        })

    //call comments api
    axios.get(`https://dummyjson.com/post/${id}/comments`)
        .then(res => {
            comments.value = res.data.comments
        })


})




</script>
<template>

    <article class="mb-10">
            <h1 class="text-xl mb-2">
                {{ singlePost.title }}
            </h1>

        <!-- <h1 class="text-2xl mb-3">This is Post {{ $route.params.id }}</h1> -->
        <!-- <h1 class="text-2xl mb-3">This is Post {{ id }}</h1> -->
        <!-- <h1 class="text-2xl mb-3">This is Post {{ singlePost.title }}</h1> -->

        <p>
            <img :src="`//source.unsplash.com/random/300x200?${singlePost.id}`" :alt="singlePost.title">
        {{ singlePost.body }}
        </p>
    </article>

    <article>
        <!-- if there is no comments 
        then hide the comments 
        Commments will load when API load the data otherwise not -->

        <h2 class="font-bold underline-gray-600 mb-2" v-if="comments.length>0">Comments</h2>
        <hr/>
        <ul class="mt-5">
            <li v-for="comment in comments" :key="comment.id">
                <p><strong>{{ comment.user.username }}</strong> said {{ comment.body }}</p>
            </li>
        </ul>
    </article>
</template>

<style></style>