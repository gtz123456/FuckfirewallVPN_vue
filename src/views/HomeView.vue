<script setup>
  import { ref, onMounted } from 'vue'

  import block1 from '@/assets/block1.jpg'
  import block2 from '@/assets/block2.jpg'
  import block3 from '@/assets/block3.jpg'
  import block4 from '@/assets/block4.jpg'


  /* adjust background position */
  var ratio = 0.6;
  let positionY1 = ref(0);
  let positionY2 = ref(0);
  let positionY3 = ref(0);
  let positionY4 = ref(0);
  let Y1 = null;
  let Y2 = null;
  let Y3 = null;
  
  onMounted(() => {
    Y1 = document.getElementsByClassName("box")[0].offsetTop * ratio;
    Y2 = document.getElementsByClassName("box")[1].offsetTop * ratio;
    Y3 = document.getElementsByClassName("box")[2].offsetTop * ratio;
  })

  function handleScroll() {
      let scrollTop = window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
      positionY1.value = - scrollTop * ratio;
      if (scrollTop > Y1) positionY2.value = Y1 - scrollTop * ratio;
      if (scrollTop > Y2) positionY3.value = Y2 - scrollTop * ratio;
      if (scrollTop > Y3) positionY4.value = Y3 - scrollTop * ratio;
  }
  window.addEventListener("scroll", handleScroll);


  /* detect OS and download the corresponding client */
  function download(){
    var link = 'https://github.com/gtz123456/FuckfirewallVPN_Client/releases/download/v0%2C31/client';
    if (os == 'Windows') link += '.exe';
    else if (os == 'maxOS') link += '.dmg';
    window.open(link,"_blank")
  }

  function detectOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('win') !== -1) {
      return 'Windows';
    } else if (userAgent.indexOf('mac') !== -1) {
      return 'macOS';
    } else if (userAgent.indexOf('linux') !== -1) {
      return 'Linux';
    } else if (userAgent.indexOf('android') !== -1) {
      return 'Android';
    } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
      return 'iOS';
    } else {
      return 'Unknown OS';
    }
  }

  const os = detectOS();

</script>

<template>
  <main>
    <body>
      <div>
        <section class="box" :style="{background: 'url('+block1+')', 'background-position-y':positionY1+'px'} ">
          <div class="box-block"></div>
          <div class="box-text">
              <div class="text-title">Firewall VPN</div>
              <div class="text-desc">An easy-to-use VPN with multiple platforms support</div>
              <div class="text-desc">Windows, macOS, Linux, Android, iOS</div>
              <button class="download" @click="download">Download {{ os }}</button>
          </div>
        </section>

        <section class="box" :style="{background: 'url('+block2+')', 'background-position-y':positionY2+'px'}">
            <div class="box-block"></div>
            <div class="box-text">
                <div class="text-title">Secure Internet connection</div>
                <div class="text-desc">Establish secure Internet connection with 1000 Mbps high speed</div>
            </div>
        </section>

        <section class="box" :style="{background: 'url('+block3+')', 'background-position-y':positionY3+'px'}">
            <div class="box-block"></div>
            <div class="box-text">
                <div class="text-title">Help you bypass firewall</div>
                <div class="text-desc">Cross firewall easily with our VPN</div>
            </div>
        </section>

        <section class="box" :style="{background: 'url('+block4+')', 'background-position-y':positionY4+'px'}">
            <div class="box-block"></div>
            <div class="box-text">
                <div class="text-title">Choose your best plan</div>
                <div class="text-desc">We offer multiple plans</div>
                  <div class="plans">
                    <div class="plan">
                      <div class="price"> 10RMB/month </div>
                      <div> Unlimited data </div>
                      <div> 1000 Mbps high speed</div>
                    </div>

                    <div class="plan">
                      <div class="price"> 100RMB/year </div>
                      <div> Unlimited data </div>
                      <div> 1000 Mbps high speed</div>
                    </div>
                  </div>
            </div>
        </section>
      </div>
    </body>
  </main>
</template>

<style>
  /* 设置.box的宽度为视口宽度，高度为视口高度，相对定位，显示为flex布局， 
  溢出隐藏 */
  .box {
      width: 100vw;
      height: 100vh;
      position: relative;
      display: flex;
      overflow: hidden;
      font-family: "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  /* 设置.box-block的伪元素::before的绝对定位，顶部和左侧均为0，内容为空， 
  显示为块级元素， 宽度和高度为100%，背景颜色为rgba(0, 0, 0, 0.35)， 
  背景颜色的过渡效果为0.3秒的ease过渡 */
  .box-block::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.35);
      transition: background-color 0.5s ease;
  }

  /* 当鼠标悬停在.box上时，将.box-block的伪元素::before的 
  背景颜色设置为rgba(0, 0, 0, 0.2) */
  .box:hover .box-block::before {
      background-color: rgba(0, 0, 0, 0.2);
  }

  /* 设置.box-text的相对定位，宽度和高度为100%，显示为flex布局， 
  垂直居中和水平居中，主轴为纵向 */
  .box-text {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #F1F1F1;
  }

  /* set text style */
  .box-text .text-title {
      font-size: 34px;
      margin-bottom: 40px;
  }

  .box-text .text-desc {
      font-size: 20px;
      margin-bottom: 20px;
  }

  /* download button */
  .download {
    align-items: center;
    position: relative;
    display: flex;
    padding: 10px 20px;
    margin: 30px;
    background-color: rgb(113, 168, 240);
    color: #fff;
    text-decoration: none;
    border: none;
    height: 60px;
    border-radius: 30px;
    font-size: 16px;
    transition: 0.3s ease;
  }

  .download:hover {
    background-color: rgba(70, 141, 233, 0.849);
    transform: scale(1.03);
  }

  .plans {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 25px;
  }

  .plan {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    margin: 40px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    background-color: rgba(113, 240, 181, 0.1);
    transition: 0.5s ease;

    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1),
                -4px 4px 20px rgba(0, 0, 0, 0.1),
                4px -4px 20px rgba(0, 0, 0, 0.1),
                -4px -4px 20px rgba(0, 0, 0, 0.1);
  }

  .plan:hover {
    background-color: rgba(113, 240, 181, 0.2);
    transform: scale(1.05);
  }
</style>