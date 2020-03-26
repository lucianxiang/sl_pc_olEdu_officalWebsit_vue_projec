<template>
  <div>
    <div class="container">
      <header :style="headerImgStyle"></header>
      <!--学校简介-->
      <div class="schoolIntroduce">
        <h1>学校简介</h1>
        <h2>INTRODUCTION</h2>
        <div class="schoolIntroduceContent"></div>
      </div>
      <!--学校愿景-->
      <div class="schoolVisionBox">
        <h1>学校愿景</h1>
        <h2>VISION</h2>
        <div class="schoolVisionContent"></div>
      </div>
      <!--组织架构-->
      <div class="organizationChart">
        <h1>组织架构</h1>
        <h2>ORGANIZATION</h2>
        <div class="organizationChartContent"></div>
      </div>
      <!--主要服务-->
      <div class="mainServices">
        <h1>主要服务</h1>
        <h2>MAIN SERVICES</h2>
        <div class="mainServicesContent"></div>
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
          background:"url("+ require("@/assets/img/aboutTitle.jpg") +") no-repeat 100% 100%"
        },
      }
    },
  }
</script>

<style scoped>
  header{
    height: 350px;
  }
  .schoolIntroduce{
    padding: 50px 0 50px 0;
    background-color: #f7f7f7;
  }
  .schoolVisionBox{
    padding: 50px 0 50px 0;
    background-color: #ffffff;
  }
  .organizationChart{
    padding: 50px 0 50px 0;
    background-color: #f7f7f7;
  }
  .mainServices{
    padding: 50px 0 50px 0;
    background-color: #ffffff;
  }
  .schoolIntroduce>h1{
    text-align: center;
    color: #15609d;
    font: 25px/30px "微软雅黑";
    font-weight: bold;
  }
  .mainServices>h1{
    text-align: center;
    color: #15609d;
    font: 25px/30px "微软雅黑";
    font-weight: bold;
  }
  .organizationChart>h1{
    text-align: center;
    color: #15609d;
    font: 25px/30px "微软雅黑";
    font-weight: bold;
  }
  .schoolVisionBox>h1{
    text-align: center;
    color: #15609d;
    font: 25px/30px "微软雅黑";
    font-weight: bold;
  }
  .schoolIntroduce>h2{
    text-align: center;
    color: #000;
    font: 12px/24px "微软雅黑";
  }
  .mainServices>h2{
    text-align: center;
    color: #000;
    font: 12px/24px "微软雅黑";
  }
  .organizationChart>h2{
    text-align: center;
    color: #000;
    font: 12px/24px "微软雅黑";
  }
  .schoolVisionBox>h2{
    text-align: center;
    color: #000;
    font: 12px/24px "微软雅黑";
  }
  .schoolIntroduceContent{
    margin: 0 auto;
    width: 1200px;
  }
  .organizationChartContent{
    margin: 0 auto;
    width: 1200px;
  }
  .mainServicesContent{
    margin: 0 auto;
    width: 1200px;
  }
  .schoolVisionContent{
    margin: 0 auto;
    width: 1200px;
  }
</style>
