<template>
  <div>
    <!--中间内容-->
    <div class="content">
      <!--大图走马灯-->
      <div class="bigImgBox">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item
            v-for="(item,index) in bigImgList"
            :key="index">
            <h3>
              <img height="300px" width="100%" :src="item.url" alt="">
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--咨询报名-->
      <div class="registration">
        <div class="registBox">
          <ul class="littleRegistBox clearfix">
            <li
              class="clearfix"
              v-for="(item,index) in registList"
              :key="index"
            >
              <div class="littleRegistBoxLeft">
                <img height="50" width="50" :src="item.url" alt="">
              </div>
              <div class="littleRegistBoxRight">
                <h1><router-link to="">{{item.registName}}</router-link></h1>
                <h2>{{item.registContent}}</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--详细内容-->
      <div class="detailContent">
        <el-row>
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <!--新闻动态-->
              <div class="newsHeadBox">
                <h1>新闻动态</h1>
                <p>NEWS</p>
              </div>
              <!--新闻图片-->
              <div class="newsPic">
                <el-carousel indicator-position="inside" height="250px">
                  <el-carousel-item v-for="(item,index) in newsPicList" :key="index">
                    <h3 style="line-height: 250px;position:relative;">
                      <img height="100%" width="100%" :src="item.url" alt="">
                      <span class="outDiv">
                        政策红利 | 受疫情影响中小企业开展职工线上培训可享全额补贴！
                      </span>
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!--新闻内容-->
              <div class="newContent clearfix">
                <div>
                  <p
                    v-for="(item,index) in newsContentList"
                    :key="index"
                  >
                    <router-link to="">{{item.newsDtailTitle}}</router-link>
                  </p>
                </div>
                <router-link to="" class="lookMore">查看更多</router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="grid-content bg-purple-light">
              <!--热门课程-->
              <div class="hotCourses">
                <h1>热门课程</h1>
                <p>HOT COURSES</p>
              </div>
              <!--热门课程内容-->
              <div class="hotCoursesContent">
                <!--热门课程内容上部分-->
                <div class="clearfix">
                  <div v-for="(item,index) in horCoursesTopList">
                    <div>
                      <router-link to="">
                        <img class="hotCoursesHover" height="150px" width="150px" :src="item.url" alt="">
                        <div></div>
                        <h2><img :src="require('@/assets/img/middleN.png')" height="20" width="20" alt=""></h2>
                      </router-link>
                    </div>
                    <div>
                      <h1>
                        <router-link to="">{{item.hotCoursesTitle}}</router-link>
                      </h1>
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
                <!--热门课程内容下部分-->
                <div class="clearfix">
                  <div v-for="(item,index) in horCoursesBotList">
                    <div>
                      <router-link to="">
                        <img height="150px" width="150px" :src="item.url" alt="">
                        <div></div>
                        <h2><img :src="require('@/assets/img/middleN.png')" height="20" width="20" alt=""></h2>
                      </router-link>
                    </div>
                    <div>
                      <h1>
                        <router-link to="">{{item.hotCoursesTitle}}</router-link>
                      </h1>
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--疑问解答-->
      <div class="answer">
        <h1>告别疑虑，您的所有问题我们为您解答</h1>
        <h2>无门槛，易学会，多种课程总有一门适合您</h2>
        <div class="anserBoxs clearfix">
          <div>
            <div class="anserBox"
                 v-for="(item,index) in anserList"
                 :key="index">
              <div class="answerTitle">{{item.anserTitle}}</div>
              <div class="answerContent">{{item.anserContent}}</div>
            </div>
          </div>
        </div>
        <router-link to="">
          更多问题请点击咨询
        </router-link>
      </div>
      <!--科学-->
      <div class="science" :style="scienceBgImgStyle">
        <h1>科学的教学模式，铸就行业高端品质</h1>
        <h2>多元化课程，实战教学，与企业无缝对接</h2>
        <ul class="scienceBoxs">
          <li
            v-for="(item,index) in scienceList"
            :key="index"
          >
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
      <!--技能-->
      <div class="skill" :style="skillBgImgStyle">
        <h1>技能+就业，他们只是先一步选择</h1>
        <h2>一技傍身，就业不愁！合格学员全部推荐就业，工作有保障，工资待遇好！</h2>
        <ul class="clearfix">
          <li
            v-for="(item,index) in skillList"
            :key="index"
          >
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
      <!--合作-->
      <div class="cooperation" :style="cooperationBgImgStyle" >
        <h1>合作共赢，打造培训就业创业一体化平台</h1>
        <h2>携手众多知名企业及单位，实训输送一站式解决</h2>
        <ul class="cooperationBoxs clearfix">
          <li
            v-for="(item,index) in cooperationList"
            :key="index"
          >
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsCompoent",
    data:function(){
      return {
        cooperationList:[
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
          {
            url:require('@/assets/img/cooperationPic.png'),
          },
        ],
        skillList:[
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
          {
            url:require('@/assets/img/skillpic.jpg'),
          },
        ],
        scienceList:[
          {
            url:require('@/assets/img/sciencelistpic.png'),
          },
          {
            url:require('@/assets/img/sciencelistpic.png'),
          },
          {
            url:require('@/assets/img/sciencelistpic.png'),
          },
          {
            url:require('@/assets/img/sciencelistpic.png'),
          },
        ],
        scienceBgImgStyle:{
          backgroundImage: "url(" + require("@/assets/img/science.jpg") + ")",
        },
        skillBgImgStyle:{
          backgroundImage: "url(" + require("@/assets/img/skillBgImg.jpg") + ")",
        },
        cooperationBgImgStyle:{
          backgroundImage: "url(" + require("@/assets/img/cooperationBgImg.jpg") + ")",
        },
        anserList:[
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
          {
            anserTitle:"学费是多少？",
            anserContent:"不同专业课程收费不一样，具体可以电话咨询或者QQ微信咨询"
          },
        ],
        horCoursesBotList:[
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
        ],
        horCoursesTopList:[
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
          {
            url:require('@/assets/img/hotcourseImg.png'),
            content:"又称育儿嫂，是用现代教育观念和科学方法对0-3岁婴儿进行生活照料、护理科学教育及保育工作的专业人员",
            hotCoursesTitle:"育婴师",
          },
        ],
        newsContentList:[
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行蜀祥职校企业职工技能提升培训顺利举行蜀祥职校企业职工技能提升培训顺利举行"},
          {newsDtailTitle:"12/31 蜀祥职校企业职工技能提升培训顺利举行"},
        ],
        active:true,
        hoverOptionsIndex:true,
        activeIndex:0,
        newsPicList:[
          {
            url:require('@/assets/img/newsPic.jpg')
          },
          {
            url:require('@/assets/img/newsPic.jpg')
          },
          {
            url:require('@/assets/img/newsPic.jpg')
          },
          {
            url:require('@/assets/img/newsPic.jpg')
          },
        ],
        registList:[
          {
            url:require('@/assets/img/zixun.png'),
            registName:'咨询报名',
            registContent:'189-8004-8009',
          },
          {
            url:require('@/assets/img/kecheng.png'),
            registName:'开设课程',
            registContent:'众多热门课程任你选',
          },
          {
            url:require('@/assets/img/dongtai.png'),
            registName:'学校动态',
            registContent:'了解学校好窗口',
          },
          {
            url:require('@/assets/img/zi.png'),
            registName:'健康资讯',
            registContent:'健康不忧心',
          },
        ],
        bigImgList:[
          {url:require('@/assets/img/imgTest1.jpg')},
          {url:require('@/assets/img/imgTest2.jpg')},
          {url:require('@/assets/img/imgTest3.jpg')},
          {url:require('@/assets/img/imgTest4.jpg')},
          {url:require('@/assets/img/imgTest5.jpg')},
          {url:require('@/assets/img/imgTest6.jpg')},
        ],
        optionsList:[
          {
            optionItem:"课程总揽"
          },
          {
            optionItem:"茶艺师"
          },
          {
            optionItem:"员工职业技能提升培训"
          },
          {
            optionItem:"团队素质拓展训练"
          },
          {
            optionItem:"养老护理员"
          },
        ],
        navMenuList:[
          {
            // navMenuIndex:0,
            navMenuItem:"首页"
          },
          {
            // navMenuIndex:1,
            navMenuItem:"新闻列表页"
          },
          {
            // navMenuIndex:2,
            navMenuItem:"新闻详细页"
          },
          {
            // navMenuIndex:3,
            navMenuItem:"单页"
          },
          {
            // navMenuIndex:4,
            navMenuItem:"留言页"
          },
          {
            // navMenuIndex:5,
            navMenuItem:"图片或产品展示页"
          },
        ]
      };
    },
    methods:{
      clickHeadNav(item,index){
        this.activeIndex=index;
      },
      clickHomeNav(item,index){
        console.log(item,index)
      },
    }
  }
</script>

<style scoped>
  header{
    height: 90px;
  }
  .content{
    min-height: 630px;
  }
  .logoBox>a{
    display: block;
  }

  .hoveroption>li>a>span{
    display: block;
    line-height: 30px;
    padding: 8px 15px;
  }
  .hoveroption>li:hover{
    color: #333333;
    background-color: #f4f4f4;
  }
  .headNav>li{
    float: left;
    text-align: center;
    position: relative;
  }
  .headNav>li:hover .hoveroption{
    display: block;
  }
  .headNav>li>a{
    position: relative;
  }
  .headNav>li>a>span:hover{
    background-color: #006bb8;
    color: white;
  }
  .headNav>li>a>span{
    display: block;
    color: rgb(128,128,128);
    padding: 0 13px;
    height: 90px;
    width: 100%;
    font: 14px/90px "微软雅黑";
    font-weight: 600;
  }
  .headNav>li>a>span.active{
    border-bottom: 2px solid rgb(26,114,186);
    color: #000;
  }
  .headNav>li>a>span.active:hover{
    color: white;
  }
  footer{

  }
  .copyrightBox>span{
    color: white;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }



  .bigImgBox{
    height: 300px;
    border: 1px silver solid;
  }
  .schoolBox>h1{
    font: 14px/28px "微软雅黑";
    color: #fff;
  }
  .schoolBox>ul>li{
    color: #fff;
    font: 14px/20px "微软雅黑";
  }
  .relationBox>h1{
    font: 14px/28px "微软雅黑";
    color: #fff;
  }
  .relationBox>ul>li{
    color: #fff;
    font: 14px/20px "微软雅黑";
  }
  .registration{
    background-color: rgb(252,252,252);
  }
  .registBox{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .littleRegistBox>li{
    height: 50px;
    float: left;
  }
  .littleRegistBoxLeft{
    width: 50px;
    height: 50px;
    float: left;
  }
  .littleRegistBoxRight{
    float: left;
    width: 250px;
    height: 50px;
  }
  .littleRegistBoxRight>h1{
    height: 30px;
    font: 16px/30px "微软雅黑";
    padding-left: 30px;
  }
  .littleRegistBoxRight>h1>a{
    height: 30px;
    font: 16px/30px "微软雅黑";
    width: 100%;
    color: rgb(234,85,32);
    font-weight: 600;
  }
  .littleRegistBoxRight>h2{
    height: 20px;
    font: 12px/20px "微软雅黑";
    color: rgb(102,102,102);
    padding-left: 30px;
  }
  .rightNav>li{
    float: left;
    height: 80px;
    width: 80px;
    background-color: #1a72ba;
    border-top: 1px solid white;
    border-left: 1px solid white;
    position: relative;
  }
  .rightNav>li:last-child{
    border-bottom: 1px solid white;
  }
  .rightNav>li:hover a{
    background-color: #333333;
  }
  .rightNav>li>a{
    display: block;
    height: 100%;
    width: 100%;
  }
  .rightNav>li>a>img{
    height: 80px;
    width: 80px;
  }
  .rightNav>li>div{
    position: absolute;
    right: 80px;
    top: 0;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .rightNavPhone>div{
    width: 150px;
    height: 80px;
    background-color: white;
  }
  .rightNavQQ>div{
    width: 150px;
    height: 80px;
    background-color: white;
  }
  .rightNavWexin>div{
    width: 150px;
    height: 180px;
    background-color: white;
  }
  .rightNav>li:hover div{
    display: block;
  }
  .detailContent{
    width: 1200px;
    margin: 0 auto ;
  }
  .bg-purple {

  }
  .bg-purple-light {

  }
  .grid-content {

  }
  .newsHeadBox{
    height: 200px;
    padding: 50px;
  }
  .hotCourses{
    height: 200px;
    padding: 50px;
  }
  .newsHeadBox>h1{
    text-align: center;
    font: 33px/50px "微软雅黑";
    color: #454545;
  }
  .hotCourses>h1{
    text-align: center;
    font: 33px/50px "微软雅黑";
    color: #454545;
  }
  .newsHeadBox>p{
    text-align: center;
    font: 16px/30px "微软雅黑";
    color: black;
    font-weight: 400;
  }
  .hotCourses>p{
    text-align: center;
    font: 16px/30px "微软雅黑";
    color: black;
    font-weight: 400;
  }
  .newsPic{
    height: 250px;
  }
  .newContent{
    height: 400px;
    /*background-color: rosybrown;*/
    /*overflow: hidden;*/
  }
  .newContent>div>p{
    margin-top: 15px;
  }
  .newContent>div>p>a{
    color: #1a72ba;
    font: 14px/28px "微软雅黑";
  }
  .newContent>div>p>a:hover{
    text-decoration: #1a72ba;
    text-decoration: underline;
  }
  .newContent>div{
    max-height: 300px;
    /*background-color: royalblue;*/
    overflow: hidden;
  }
  .lookMore{
    display: block;
    height: 35px;
    width: 90px;
    background-color: #f4f4f4;
    color: #666666;
    border-radius: 3px;
    padding: 9px 10px 7px;
    text-align: center;
    margin: 20px 0 0 100px;
    float: right;
    border: 1px solid #d5d5d5;
  }
  .lookMore:hover{
    background-color: #fff;
  }
  .outDiv{
    max-width: 350px;
    background-color: black;
    opacity: 0.7;
    position: absolute;
    top: 170px;
    left: 50px;
    color: white;
    padding: 10px 10px;
    font: 14px/16px "微软雅黑";
  }
  .hotCoursesContent{
    height: 650px;
    width: 750px;
    padding: 0 0 0 50px;
  }
  .hotCoursesContent>div{
    height: 300px;
  }
  .hotCoursesContent>div>div{
    height: 300px;
    width: 200px;
    float: left;
    padding: 0 0 0 0;
  }
  .hotCoursesContent>div>div:nth-child(1){
    margin-right: 50px;
  }
  .hotCoursesContent>div>div:nth-child(2){
    margin-right: 50px;
  }
  .hotCoursesContent>div>div>div:nth-child(1){
    height: 150px;
    text-align: center;
  }
  .hotCoursesContent>div>div>div:nth-child(2){
    height: 150px;
    /*background-color: rosybrown;*/
    padding: 10px 0 50px 0;
    overflow: hidden;
  }
  .hotCoursesContent>div>div>div:nth-child(2)>h1{
    text-align: center;
  }
  .hotCoursesContent>div>div>div:nth-child(2)>h1>a{
    color: #000;
    font: 16px/30px "微软雅黑";
    font-weight: 600;
  }
  .hotCoursesContent>div>div>div:nth-child(2)>div{
    line-height: 20px;
    color: #666666;
    text-align: center;
  }
  .answer{
    background-color: #f2f2f2;
    text-align: center;
    padding-bottom: 50px;
  }
  .answer>h1{
    padding-top: 50px;
    color: #000;
    font: 30px/50px "微软雅黑";
    font-weight: 500;
  }
  .answer>h2{
    color: #717171;
    font: 16px/30px "微软雅黑";
  }
  .anserBoxs{
    margin: 0 auto;
    width: 1200px;
  }
  .answer>a{
    display: block;
    height: 70px;
    width: 250px;
    margin: 50px auto 0;
    border: 3px solid rgba(0,0,0,0.6);
    text-align: center;
    font-size: 15px;
    line-height: 70px;
    color: #717171;
  }
  .anserBox{
    float: left;
    width: 280px;
    margin: 0 20px 0 0;
  }
  .answerTitle{
    background-color: #2b83cb;
    height: 50px;
    font: 16px/50px "微软雅黑";
    color: #ffffff;
    font-weight: 600;
  }
  .answerContent{
    background-color: #fff;
    font: 16px/25px "微软雅黑";
    color: #717171;
    padding: 10px ;
    height: 100px;
    overflow: hidden;
  }
  .science{
    height: 500px;
  }
  .skill{
    /*height: 500px;*/
  }
  .skill>ul{
    margin: 50px auto;
    width: 1200px;
  }
  .skill>ul>li{
    float: left;
    width: 240px;
    height: 200px;
  }
  .skill>ul>li>img{
    width: 240px;
    height: 200px;
  }
  .skill>h1{
    font-weight: bolder;
    color: #454545;
    font-size: 33px;
    line-height: 50px;
    padding: 40px 0 0;
    text-align: center;
  }
  .cooperation>h1{
    font-weight: bolder;
    color: #ffffff;
    font-size: 33px;
    line-height: 50px;
    padding: 40px 0 0;
    text-align: center;
  }
  .cooperationBoxs{
    margin: 0 auto;
    width: 1200px;
    padding-bottom: 50px;
  }

  .cooperationBoxs>li{
    margin: 50px 40px 0 0;
    float: left;
  }
  .cooperationBoxs>li{
    width: 200px;
    height: 150px;

  }
  .skill>h2{
    color: #828282;
    text-align: center;
    font: 16px/25px "微软雅黑";
  }
  .cooperation>h2{
    color: #bababa;
    text-align: center;
    font: 16px/25px "微软雅黑";
  }
  .science>h1{
    font-weight: bolder;
    color: #ffffff;
    font-size: 33px;
    line-height: 50px;
    padding: 40px 0 0;
    text-align: center;
  }
  .science>h2{
    color: #e5e5e5;
    text-align: center;
    font: 16px/25px "微软雅黑";
  }
  .scienceBoxs{
    margin: 80px auto 50px;
    width: 1200px;
  }
  .scienceBoxs>li{
    margin: 0 50px 0 0;
    float: left;
  }
  .scienceBoxs>li>img{
    width: 250px;
    height: 260px;
  }
  .hotCoursesContent>div>div>div>a{
    position: relative;
  }
  .hotCoursesContent>div>div>div>a:hover img{
    opacity: 0.5;
  }
  .hotCoursesContent>div>div>div>a:hover div{
    width: 70px;
    height: 70px;
    background: #1a72ba;
    position: absolute;
    top: -95px;
    right: 40px;
    border-radius: 100px;
    opacity: 0.5;
  }
  .hotCoursesContent>div>div>div>a>h2>img{
    display: none;
  }
  .hotCoursesContent>div>div>div>a:hover h2{
    display: block;
    width: 20px;
    height: 20px;
    /*background: black;*/
    position: absolute;
    top: -70px;
    right: 65px;
    /*opacity: 0.5;*/
  }
  .hotCoursesContent>div>div>div>a:hover h2>img{
    display: block;
  }


</style>
