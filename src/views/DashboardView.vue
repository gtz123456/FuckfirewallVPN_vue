<script setup>
  import { ref, onMounted } from 'vue'
  import router from "@/router";
  import axios from 'axios';

  import block1 from '@/assets/block1.jpg'

  var token = localStorage.getItem('token');
  const apiURI1 = 'https://lv.fuckfirewall.top/api/config';
  const userData = ref(null);

  async function getUserData() {
    if (token) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`
        };
        console.log(headers);
        const response = await axios.get(apiURI1, { headers });
        if (response.status === 200) {
          console.log(response.data);
          userData.value = response.data;
        }
        else {
          alert('Login failed');
        }
      }
      catch (error) {
        alert('Error:', error);
      }
    }
    else {
      router.push('/login')
    }
  }

  onMounted(() => {
    getUserData();
  })

</script>

<template>
  <section id="dashboardbox" :style="{background: 'url('+block1+')'}">
    <div class="wrap">
      <div class="nav">
        <div id="menuTitle">
          <p> Menu </p>
        </div>
        <div class="line"></div>

        <div class="item">
          <div class="light"></div>
          <div class="item-content">
            <img src="~@/assets/shop.png" class="itemico">
            <div class="btn">Status</div>
          </div>
        </div>

        <div class="item">
          <div class="light"></div>
          <div class="item-content">
            <img src="~@/assets/shop.png" class="itemico">
            <div class="btn">Shop</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div>{{userData}}</div>
    </div>
  </section>


</template>

<style>
  html {
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  #dashboardbox {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  .nav {
    width:70px;
    height: 88vh;
    margin-top: 50px;
    margin-left: 3px;
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(10px);
  }

  .nav:hover {
    width: 150px;
  }

  #menuTitle {
    font-size: 17px;
    height: 50px;
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .line {
    height: 1px;
    width: 100px;
    background-color: #5eb95e;
    margin: 5px;
    transition: 0.5s;
  }

  .item {
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    border-radius: 6px;
  }

  .light {
    height: 38px;
    width: 5px;
    background-color: #5eb95e;
    transition: 0.25s;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    opacity: 0;
  }

  .item-content {
    height: 45px;
    width: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    padding-left: 5px;
    margin-right: 5px;
    border-radius: 6px;
    transition: 0.3s;
  }

  .itemico {
    height: 25px;
    width: 25px;
    padding-left: 5px;
    transition: 0.5s;
  }

  .btn {
    width: 0px;
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
    margin-left: 20px;
    opacity: 0;
    transition: 0.5s;
  }

  .item:hover .item-content{
    background-color: rgba(0, 0, 0, 0.35);
  }

  .item:hover .light {
    opacity: 1;
  }

  .nav:hover .item {
    width: 200px;
  }

  .nav:hover .btn {
    opacity: 1;
    width: 50px;
  }

</style>