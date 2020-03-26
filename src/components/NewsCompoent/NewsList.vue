<template>
  <div>
    <div class="container">
      <!--头部背景图-->
      <div class="title" :style="newsTitleBgStyle"></div>
      <!--中间内容-->
      <div class="content">
        <el-row>
          <!--左面导航栏-->
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <ul class="newsLeftNav">
                <li v-for="item in 4">
                  <router-link to="">学校新闻</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <!--右侧新闻列表-->
          <el-col :span="19">
            <div class="grid-content bg-purple-light">
              <div class="rightNewsList">
                <router-view/>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import NewsDetail from '@/components/NewsCompoent/NewsDetail';
  export default {
    name : "HomePage",
    compoents:{
      NewsDetail,
    },
    data() {
      return{
        newsTitleBgStyle:{
          background:"url("+ require("@/assets/img/newsTitleBg.png") +")" +"no-repeat 100% 100%",
        },
      }
    },
  }
</script>

<style scoped>
  .title{
    height: 180px;
    background: no-repeat;
  }
  .content{
    margin: 0 auto;
    width: 1200px;
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
  }
  .newsLeftNav{
    margin: 50px auto 0;
  }
  .newsLeftNav>li>a{
    display: block;
    height: 70px;
    width: 200px;
    margin: 0 auto 10px;
    background-color: #7bb0e7;
    border-radius: 3px;
    text-align: center;
    font: 15px/70px "微软雅黑";
    color: #ffffff;
  }
  .newsLeftNav>li>a:hover{
    background-color: #81b8f2;
  }
  .rightNewsList{
    padding: 60px 0 0 60px;
  }
</style>
