<template>
  <div id="app">
    <Foodpanda/>
    <mainPage />
    <foodPage />
  </div>
</template>

<script>
import Foodpanda from './components/Foodpanda.vue'
import mainPage from './components/mainPage.vue'
import foodPage from './components/foodPage.vue'
export default {
  name: 'app',
  components: {
    Foodpanda,
    mainPage,
    foodPage,
  }
}
</script>

<style>
.button{
    background-color: #D70F64 !important;
    color: white !important;
    font-weight: 600 !important;
    border: none !important;
    border-radius: 0% !important;
    height: 64px;
    line-height: 48px;
}
</style>
