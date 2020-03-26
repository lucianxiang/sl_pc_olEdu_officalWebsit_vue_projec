<template>
  <div>
    <!--学校新闻-->
    <div class="schoolNews"><img :src="require('@/assets/img/schoolNews.png')" alt=""></div>
    <!--新闻列表-->
    <ul class="newsList">
      <li
        v-for="item in 5"
      >
        <el-row>
          <el-col :span="7"><div class="grid-content bg-purple">
            <div class="newsListPicBox">
              <router-link to="">
                <img :src="require('@/assets/img/newsListPic.jpg')" alt="">
              </router-link>
            </div>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple-light">
              <div class="newsListObj">
                <h1>
                  <router-link to="/NewsDetail">
                    成都蜀祥护工护理职业技能培训学校精准扶贫班开班
                  </router-link>
                </h1>
                <h2>2019年1月15日/在： <router-link to="/NewsDetail">学校新闻</router-link> /</h2>
                <p>文章转自《四川省人民医院》 1月9日，由我院邓绍平院长牵头与省能源投资集团等单位和社会力量共同携手成立的成都蜀 […]</p>
                <div>
                  <router-link to="/NewsDetail">阅读更多  ></router-link>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>

<style scoped>
  .schoolNews>img{
    width: 167px;
    height: 58px;
  }
  .bg-purple {

  }
  .bg-purple-light {

  }
  .grid-content {

  }
  .newsList>li{
    border-bottom: 1px silver solid;
  }
  .newsListPicBox{
    margin: 0 auto;
    padding: 20px 0;
  }
  .newsListPicBox>a>img{
    display: block;
    width: 250px;
    height: 100px;
    border-radius: 3px;
  }
  .newsListObj{
    padding: 40px 0 30px 10px;
  }
  .newsListObj>h1>a{
    font-weight: 900;
    color: black;
    font: 25px/30px "微软雅黑";
  }
  .newsListObj>h2{
    color: silver;
    font: 12px/24px "微软雅黑";
  }
  .newsListObj>h2>a{
    color: silver;
    font: 12px/24px "微软雅黑";
  }
  .newsListObj>p{
    color: #a0a0a0;
    font: 16px/24px "微软雅黑";
  }
  .newsListObj>div>a{
    color: #1a72ba;
  }
  .newsListObj>div{
    padding: 20px 0 0 0;
  }
</style>
