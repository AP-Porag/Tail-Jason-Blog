<template>
<div class="home_page">
  <div class="banner_box">
    <div class="banner_image_box">
      <img src="~assets/image 2.png" class="banner_image" alt="">
    </div>
    <div class="banner_text_box">
      <h1 class="banner_text">
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <p class="banner_text_p">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
    </div>
  </div>
  <div class="container" style="margin: 0 auto">
    <div class="post_box text-center">
      <h3 class="all_articles">All Articles</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div class="text-center" v-for="(post, index) in posts">
          <NuxtLink :to="`/post/${post.id}`">
            <img src="~assets/Rectangle 12.png" alt="parasite" class="hover:opacity-75 transition ease-in-out duration-150">
          </NuxtLink>
          <div class="mt-2">
            <NuxtLink :to="`/post/${post.id}`" class="post_title hover:text-gray-300 text-center">{{post.title}}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {
      posts:data,
    }
  }

}
</script>
<style>
.banner_box{
  width: 44%;
  margin: 0 auto;
}
.banner_image_box{
  margin-bottom: 50px;
}
.banner_text_box{

}
.banner_text{
  margin-bottom: 50px;
  font-family: New York Extra Large;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 100%;
  text-align: center;
  color: #000000;
}

.banner_text_p{
  margin-bottom: 50px;
  font-family: SF Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  color: #000000;
}
.container{
  width: 44%;
  margin: 0 auto;
}

.post_box{
  border-top: 2px solid #000000;
  margin-left: 100px;
  margin-right: 100px;
  padding-bottom: 100px;
}
.all_articles{
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: New York Extra Large;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 53px;
  text-align: center;
  color: #000000;
}
.post_title{
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  text-transform: capitalize;
}
/* For Mobile */
@media screen and (max-width: 540px) {
  .banner_box {
    width: 100%;
  }
  .banner_text{
    margin-bottom: 30px;
    font-family: New York Extra Large;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
  }
  .banner_text_p{
    margin-bottom: 30px;
    font-family: SF Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    color: #000000;
  }
  .all_articles{
    font-family: New York Extra Large;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #000000;
  }
  .post_title{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
    color: #000000;
  }
}
</style>