<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import { RouterView } from 'vue-router'
import { getLogin } from '@/api/user.ts'
import { onMounted } from 'vue'

onMounted(async () => {
  const a = await getLogin()
  console.log(a)
})
</script>

<template>
  <div class="">
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style></style>
