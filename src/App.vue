<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import Avatar from '@/assets/avatar.png'

</script>

<template>
  <div class="header">
    <p>
      <img class="avatar" :src="Avatar">
      FuckFirewall VPN
    </p>
    <nav>
      <RouterLink to="/" class="page">Home</RouterLink>
      <RouterLink to="about" class="page">About</RouterLink>
      <RouterLink to="login" class="page">Login</RouterLink>
    </nav>
  </div>
  <RouterView />
  <footer>
      <p class="copyright">&copy; 2023&nbsp;FuckFirewall VPN</p>
  </footer>
  
</template>

<style scoped>
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between center;
    height: 40px;
    margin: 0px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.72);
    /* stick to top */
    position: fixed; 
    top: 0px;
    z-index: 999; 
  }

  .avatar{
    height: 25px;
    width: 25px;
    margin: 10px;
  }
  .navigator{
    display: flex;
    align-items: center;
  }
  
  p{
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    padding: 0px 20px;
    color: hsla(160, 100%, 37%, 1);
  }
  
  nav {
    display: flex;
    font-size: 20px;
    text-align: center;
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  .page{
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  .page:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  .copyright {
    justify-content: center;
  }

</style>
