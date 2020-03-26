<template>
  <div>
    <div class="container">
      <header :style="headerImgStyle"></header>
      <!--学校简介-->
      <div class="latestActivity">
        <h1>最新活动</h1>
        <h2>ACTIVITIES</h2>
        <div class="latestActivityContent"></div>
      </div>
      <!--课堂展示-->
      <div class="classDisplay">
        <h1>课堂展示</h1>
        <h2>CLASS DISPLAY</h2>
        <div class="classDisplayContent"></div>
      </div>
      <!--教学环境-->
      <div class="environment">
        <h1>教学环境</h1>
        <h2>ENVIRONMENT</h2>
        <div class="environmentContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    data(){
      return{
        headerImgStyle:{
          background:"url("+ require("@/assets/img/schoolStyle.jpg") +") no-repeat 100% 100%"
        },
      }
    },
  }
</script>

<style scoped>
  header{
    height: 170px;
  }
  .classDisplay,.mainServices{
    padding: 50px 0 50px 0;
    background-color: #ffffff;
  }
  .environment,.latestActivity{
    padding: 50px 0 50px 0;
    background-color: #f7f7f7;
  }
  .schoolIntroduce>h1,.latestActivity>h1,.mainServices>h1,.environment>h1,.classDisplay>h1{
    text-align: center;
    color: #15609d;
    font: 25px/30px "微软雅黑";
    font-weight: bold;
  }
  .schoolIntroduce>h2,.mainServices>h2,.environment>h2,.classDisplay>h2,.latestActivity>h2{
    text-align: center;
    color: #000;
    font: 12px/24px "微软雅黑";
  }
  .environmentContent,.mainServicesContent,.classDisplayContent,.latestActivityContent{
    margin: 0 auto;
    width: 1200px;
  }
</style>
