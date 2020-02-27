<template>
  <div class="container">
    <div class="md-content">
      <div class="md-layout">
        <div class="md-layout-item">
          <router-view name="clock" />
          <router-view name="leftPanel" />
        </div>
        <div class="md-layout-item burp">
          <router-view name="rightPanel" />
        </div>
      </div>
      <Toaster />
    </div>
  </div>
</template>

<script>
import Toaster from '@/components/Toaster';
export default {
  name: 'app',
  components: {
    Toaster
  }
}
</script>

<style>
.burp {
  max-height: 100vh;
  overflow: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
