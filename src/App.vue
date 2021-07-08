<template>
  <div id="app">
    <div class="Container NavbarContainer HomepageDay">
      <Header/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "~@/assets/css/style.scss";
</style>