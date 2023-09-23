<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import router from "@/router";

  import block1 from '@/assets/block1.jpg'
  const apiURI = 'https://lv.fuckfirewall.top/api/tokens'
  const apiURI1 = 'http://localhost:5000/api/tokens'
  const email = ref('');
  const password = ref('');
  var token = null;

  async function userLogin() {
    console.log(email, password);
    console.log('Login:', email.value, password.value);
    try {
      const data = {
        auth: {
          username: email.value,
          password: password.value
        }
      }
      const response = await axios.post(apiURI1, null, data);

      if (response.status === 200) {
        token = response.data.token;
        localStorage.setItem('token', token)
        router.push('/dashboard')
        console.log('Token:', token);
      } else {
        alert('Login failed');
      }
    }
    catch (error) {
      alert('Error:', error);
    }
  }

</script>

<template>
  <div>
    <section class="box" :style="{background: 'url('+block1+')'} ">
        <div class="form">
          <div id="loginBlock"></div>
          <h2>Login</h2>
          <div class="input">
            <div>
              <input type="text" id="email" v-model="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" id="password" v-model="password" placeholder="Password" />
            </div>
          </div>
          <div class="buttons">
            <button type="submit" id="register" @click="userRegister">Register</button>
            <button type="submit" id="login" @click="userLogin">Login</button>
          </div>
        </div>
      </section>

  </div>
</template>


<style>
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    margin: 40px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: 0.5s ease;

    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1),
                -4px 4px 20px rgba(0, 0, 0, 0.1),
                4px -4px 20px rgba(0, 0, 0, 0.1),
                -4px -4px 20px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: rgba(109, 219, 142, 0.99);
    font-size: 30px;
    font-weight: 500;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
  }

  #email, #password {
    margin: 10px;
    width: 300px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid rgba(109, 219, 142, 0.99);
    padding: 5px;
    margin: 10px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 0);
    font-size: 19px;
    color: rgba(109, 219, 142, 0.8);
  }

  #email::placeholder, #password::placeholder {
    color: rgba(109, 219, 142, 0.8);
    font-size: 19px;
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  #register, #login {
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(109, 219, 142, 0.7);
    color: #fff;
    text-decoration: none;
    border: none;
    height: 40px;
    width: 100px;
    margin: 20px;
    border-radius: 20px;
    font-size: 16px;
    transition: 0.3s ease;
  }

  #register:hover, #login:hover {
    background-color: rgba(109, 219, 142, 0.99);
  }
</style>