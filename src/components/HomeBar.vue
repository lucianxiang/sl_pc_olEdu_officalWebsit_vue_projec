<template>
  <div>
    <div class="container">
      <!--顶部-->
      <header>
        <div class="headBox">
          <!--头部左-->
          <span class="logoBox">
            <a class="headLogo" href="javascript:;">
              <img class="headLogoImg" src="@/assets/img/cloudEdu.png" alt="logo图片">
            </a>
          </span>
          <!--头部右-->
          <div class="headNavBox">
            <ul class="headNav clearfix">
              <li
                @click="clickHeadNav(item,index)"
                v-for="(item,index) in navMenuList"
                :key="index"
              >
                <router-link class="clearfix navA" to="">
                  <span :class="[{active:(activeIndex==index)}]">
                    {{item.navMenuItem}}
                  </span>
                </router-link>
                <ul class="hoveroption">
                  <li
                    v-for="(item,index) in optionsList"
                    :key="index"
                    @click="clickHomeNav(item,index)"
                  >
                    <router-link to=""><span>{{item.optionItem}}</span></router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!--router-view-->
      <router-view/>
      <!--底部-->
      <footer>
        <!--地址栏-->
        <div class="address">
          <div class="addressBox clearfix">
            <!--扫描二维码-->
            <div class="codeBox">
              <div class="code">
                <img height="100%" width="100%" src="@/assets/img/saomaguanzhunew.png" alt="">
              </div>
            </div>
            <!--学校地址-->
            <div class="schoolBox">
              <h1>学校地址</h1>
              <ul>
                <li><strong>学校地址：</strong><span>成都市金牛区一品天下大街172号2楼</span></li>
                <li><strong>古城教学点：</strong><span>成都市郫县古城镇蜀源大道四段96号</span></li>
                <li><strong>八医院教学点：</strong><span>成都市金牛区蓉都大道1120号</span></li>
              </ul>
            </div>
            <!--联系我们-->
            <div class="relationBox">
              <h1>联系我们</h1>
              <ul>
                <li><strong>咨询电话：</strong><span>18980048009(微信同号)</span></li>
                <li><strong>咨询QQ：</strong><span>506130234</span></li>
                <li><strong>服务邮箱：</strong><span>506130234@qq.com</span></li>
              </ul>
            </div>
          </div>
        </div>
        <!--版权-->
        <div class="copyright">
          <div class="copyrightBox">
            <span>© 版权 - 泸州胜蓝职业技能培训学校     备案号：蜀ICP备18022090号</span>
          </div>
        </div>
      </footer>
      <!--右部导航-->
      <ul class="rightNav clearfix">
        <li class="rightNavPhone">
          <router-link to=""><img :src="require('@/assets/img/phone.png')" alt=""></router-link>
          <div>
            <h1>咨询电话</h1>
            <h2>13888888888</h2>
            <i></i>
          </div>
        </li>
        <li class="rightNavQQ">
          <router-link to=""><img :src="require('@/assets/img/qq.png')" alt=""></router-link>
          <div>
            <div><router-link to=""><img :src="require('@/assets/img/qqIcon.gif')" alt=""></router-link></div>
            <i></i>
          </div>
        </li>
        <li class="rightNavWexin">
          <router-link to="">
            <img :src="require('@/assets/img/wxicon.png')" alt="">
          </router-link>
          <div>
            <img :src="require('@/assets/img/erweima.jpg')" alt="">
            <h1>扫描有惊喜</h1>
            <i></i>
          </div>
        </li>
        <li class="rightNavBacktop">
          <router-link to="" @click.native="FnBackTop">
            <div class="backTop"></div>
            <h1>返回顶部</h1>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NewsDetail from '@/components/NewsCompoent/NewsDetail';
  import HomePage from '@/components/HomePage';
  import NewsList from '@/components/NewsCompoent/NewsList';
  export default {
    compoents:{
      NewsDetail,
      NewsList,
      HomePage,
    },
    name: "HomeBar",
    data:function(){
      return {
        navTo:'',
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
            url:require('@/assets/img/searchImg.png'),
            registName:'咨询报名',
            registContent:'189-8004-8009',
          },
          {
            url:require('@/assets/img/searchImg.png'),
            registName:'开设课程',
            registContent:'众多热门课程任你选',
          },
          {
            url:require('@/assets/img/searchImg.png'),
            registName:'学校动态',
            registContent:'了解学校好窗口',
          },
          {
            url:require('@/assets/img/searchImg.png'),
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
            navMenuItem:"首页"
          },
          {
            navMenuItem:"新闻"
          },
          {
            navMenuItem:"关于我们"
          },
          {
            navMenuItem:"留言页"
          },
          {
            navMenuItem:"学校风采"
          },
        ]
      };
    },
    methods: {
      clickHeadNav(item, index) {
        this.activeIndex = index;
        /*根据index切换页面*/
        switch (index) {
          case 0 :
            this.$router.push({name: 'HomePage'});
            break;
          case 1 :
            this.$router.push({name: 'NewsListChild'});
            break;
          case 2 :
            this.$router.push({name: 'SinglePage'});
            break;
          case 3 :
            this.$router.push({name: 'LeaveWord'});
            break;
          case 4 :
            this.$router.push({name: 'ShowPage'});
            break;
        }
      },
      clickHomeNav(item, index) {

      },

      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      FnBackTop() {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop() {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 60) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      },


    },
    mounted(){
      window.addEventListener('scroll', this.scrollToTop);
    },
    destroyed(){
      window.removeEventListener('scroll', this.scrollToTop);
    },
  }
</script>

<style scoped>
  .container{
    position: relative;
  }
  header{
    height: 90px;
  }
  .content{
    min-height: 630px;
  }
  .headBox{
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .logoBox{
    float: left;
    color: #1a72ba;
  }
  .logoBox>a{
    display: block;
  }
  .navA{
    position: relative;
  }
  .headLogo{
    width: 190px;
    height: 90px;
    display: block;
    padding-top: 20px;
  }
  .headLogoImg{
    display: block;
    width: 190px;
    height: 57px;
  }
  .hoveroption{
    width: 200px;
    display: none;
    position: absolute;
    left: 0;
    z-index: 100;
    top: 90px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
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
  .headNav{
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
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
  .address{
    background-color: rgb(52,82,126);
    padding: 25px 0;
  }
  .copyright{
    background-color: rgb(97,97,97);
  }
  .copyrightBox{
    height: 50px;
    width: 1200px;
    margin: 0 auto;
    padding: 15px 50px;
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .bigImgBox{
    height: 300px;
  }
  .addressBox{
    margin: 0 auto;
    width: 1200px;
  }
  .codeBox{
    width: 400px;
    height: 200px;
    float: left;
    padding: 35px 0;
  }
  .code{
    height: 130px;
    width: 150px;
  }
  .schoolBox{
    width: 400px;
    height: 200px;
    float: left;
    padding: 40px 0 50px 70px;
  }
  .schoolBox>h1{
    font: 14px/28px "微软雅黑";
    color: #fff;
  }
  .schoolBox>ul>li{
    color: #fff;
    font: 14px/20px "微软雅黑";
  }
  .relationBox{
    width: 400px;
    height: 200px;
    float: left;
    padding: 40px 0 50px 70px;
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
  .rightNav{
    width: 80px;
    position: fixed;
    top: 270px;
    right: 0;
    z-index: 10000;
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
    padding: 27px 0 0 0;
  }
  .rightNav>li>a>img{
    height: 25px;
    width: 30px;
    display: block;
    margin: 0 auto;
  }


  .rightNavPhone>div{
    width: 150px;
    height: 80px;
    background-color: white;
    text-align: center;
    padding: 20px 0;
  }
  .rightNavPhone>div>h1,.rightNavPhone>div>h2{
    font: 14px/20px "微软雅黑";
  }
  .rightNav>li>div>i{
    display: block;
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-left-color: white;
    position: absolute;
    right: -14px;
    top: 30px;
  }
  .rightNav>li>div{
    position: absolute;
    right: 87px;
    top: 0;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    display: none;
    -webkit-animation: testB 2s;
  }
  .rightNav>li:hover .rightNav>li:nth-child(4)>a>div{
/*    border-top: 2px solid white;
    border-right: 2px solid white;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    padding: 5px;
    position: absolute;
    right: 35px;
    top: 20px;*/
  }

  .rightNav>li:hover div{
    display: block;
    /*-webkit-transition: all 0.6s;*/
    -webkit-animation: testA 1.5s;
    -webkit-transform: perspective(600px) rotateY(0deg);
    -webkit-transform-origin:right 0;
  }
  @keyframes testA {
    from {
      -webkit-transform : rotateY(-90deg);
    }
    to {
      -webkit-transform : rotateY(0deg);
    }
  }
  @keyframes testB {
    from {
      -webkit-transform : rotateY(0deg);
    }
    to {
      -webkit-transform : rotateY(-90deg);
    }
  }
  .rightNavQQ>div{
    width: 150px;
    height: 80px;
    background-color: white;
  }
  .rightNavQQ>div>div>a>img{
    display: block;
    width: 77px;
    height: 22px;
    margin: 29px auto;
  }
  .rightNavWexin>div{
    width: 150px;
    height: 180px;
    background-color: white;
  }
  /*.rightNavWexin>a>img{*/
  /*  display: block;*/
  /*  width: 5px;*/
  /*  height: 5px;*/
  /*  margin: 0 auto;*/
  /*}*/
  .rightNavWexin>div>img{
    display: block;
    width: 130px;
    height: 130px;
    margin: 0 auto;
  }
  .rightNavWexin>div>h1{
    text-align: center;
    font: 14px/28px "微软雅黑";
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
  .rightNavBacktop>a{
    position: relative;
  }
  .rightNavBacktop>a>h1{
    color: #ffffff;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 40px;
  }
  .backTop{
    border-top: 2px solid white;
    border-right: 2px solid white;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    padding: 5px;
    position: absolute;
    right: 35px;
    top: 20px;
  }

</style>






























