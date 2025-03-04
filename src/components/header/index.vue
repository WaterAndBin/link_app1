<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const lang = ref('zh')

const { locale } = useI18n()
</script>

<template>
  <div class="w-screen bg-red-100 h-28">
    <div class="flex">
      <div>语言</div>
      <select name="language" id="fruits" v-model="lang" @change="() => locale = lang">
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>
