<script setup>
  import { ref, onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  import router from "@/router";
  import axios from 'axios';

  import block1 from '@/assets/block1.jpg'
  import { ApplicationMenu, User, Shopping } from '@icon-park/vue-next';

  var token = localStorage.getItem('token');
  const apiURI = '/api/'
  const userData = ref(null);
  
  let currentPage = ref('Status');

  function navhandler(page) {
    currentPage.value = page;
  }

  async function addPlan() {
    if (token) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`
        };
        const response = await axios.get(apiURI + 'addPlan', { headers });
        if (response.status === 200) {
          console.log(response.data);
        }
        else {
          alert('addPlan failed');
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

  async function getUserData() {
    if (token) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`
        };
        const response = await axios.get(apiURI + 'config', { headers });
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

  async function copyToClipboard(key, value) {
    try {
      await navigator.clipboard.writeText(value);
      ElMessage({ message: 'Successfully copied ' + key, type: 'success' });
    } catch (err) {
      ElMessage({ message: 'failed to copy ' + key + err, type: 'warning' });
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
            <application-menu theme="outline" size="24" fill="#333"/>
        </div>
        <div class="line"></div>

        <div class="item" @click="navhandler('Status')">
          <div class="light"></div>
          <div class="item-content">
            <user class="itemico" theme="outline" size="24" fill="#333"/>
            <div class="item-con">Status</div>
          </div>
        </div>

        <div class="item" @click="navhandler('Shop')">
          <div class="light"></div>
          <div class="item-content">
            <shopping class="itemico" theme="outline" size="24" fill="#333"/>
            <div class="item-con">Shop</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
        <div class="User" v-if="currentPage=='Status'">
            <table class="table" v-if="userData">
                <tr v-for="(value, key) in userData" :key="key" @click="copyToClipboard(key, value)">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
                </tr>
            </table>
        </div>

        <div class="Shop" v-if="currentPage=='Shop'">
            <div> Shop </div>
            <div class="shopbtn" @click="addPlan"> Start the 1-month free trail </div>
        </div>
    </div>



  </section>

</template>

<style>
  html {
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }


  .User {
    height: 100%;
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
        font-size: 16px;
        border-radius: 8px;
        backdrop-filter: blur(1px);
        background-color: rgba(207, 104, 202, 0.12);
    }

    table td, table th {
        border: 1px solid rgba(207, 104, 202, 0.05);
        padding: 8px;
        word-break: break-all;
    }

    .table td:first-child, .table th:first-child {
        white-space: nowrap;
    }

    table tr:hover {
        background-color: rgba(207, 104, 202, 0.05);
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
    height: calc(100vh - 70px);
    margin-top: 50px;
    margin-left: 5px;
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(10px);
  }

  .content {
    height: calc(100vh - 70px);
    width: 100%;
    margin-top: 50px;
    margin-left: 3px;
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(10px);}

  .nav:hover {
    width: 150px;
  }

  #menuTitle {
    font-size: 17px;
    padding: 5px;
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
    position: absolute;
    left: 26px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    opacity: 0;
  }

  .item-content {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: 0.5s;
    border-radius: 6px;
  }

  .itemico {
    height: 24px;
    width: 24px;
  }

  .item-con {
    width: 0px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: -15px;
    opacity: 0;
  }

  .nav:hover .item-con {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: 0.5s;
  }

  .nav:hover .itemico {
    padding-left: 20px;
    padding-right: 10px;
  }

  .nav:hover .item-content{
    width: 130px;
  }

  .item:hover .item-content{
    background-color: rgba(0, 0, 0, 0.1);
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



  .shopbtn {
    height: 50px;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(10px);
    transition: 0.5s;
  }

    .shopbtn:hover {
        background-color: rgba(255, 255, 255, 0.9);
    }

</style>