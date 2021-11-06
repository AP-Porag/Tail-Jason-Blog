<template>
<div class="post-page">
  <div class="container">
    <div class="single_post_box">
      <div class="flex justify-between pt-6">
        <div class="author_box flex">
          <div class="author_image">
            <img src="~assets/image 3.png" alt="" class="author_name">
          </div>
          <h4>{{post.userId}}</h4>
        </div>
        <div class="social_box flex">
          <div class="social_icon_box">
            <img src="~assets/Vector.png" alt="" class="social_icon">
          </div>
          <div class="social_icon_box">
            <img src="~assets/Vector (1).png" alt="" class="social_icon">
          </div>
        </div>
      </div>
      <div class="single_post">
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
  <div class="border_div">
    <img src="~assets/border_face.png" alt="" class="border_image">
  </div>
  <div class="container newsletter_box">
    <div class="newsletter">
      <h4 class="newsletter-text">Sign up for the newsletter</h4>
      <p class="newsletter_p">If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
      <div class="submit-form flex items-center">
        <input type="text" class="" placeholder="Enter your email">
        <button class="submit_button bg-black text-white">Sign up</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "_id",
  data(){
    return{
      post:'',
    }
  },
  created() {
    this.getSinglePost();
  },
  methods: {
    async getSinglePost() {
      const data = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
      this.post = data;
    }
  }
}
</script>

<style scoped>
.container{
  width: 44%;
  margin: 0 auto;
}
.newsletter_box{
  padding: 100px
}
.single_post_box{
  margin-top: 100px;
  border-top: 2px solid #000000;
}
.author_image{
  width: 57px;
  height: 57px;
  border-radius: 50px;
}
.author_image img{
  width: 57px;
  height: 57px;
  border-radius: 50px;
}
.author_name{
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
}
.social_box{
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.24);
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.24);
  height: 37px;
}
.social_icon_box{
  border: 1px solid #777777;
  height: 37px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
}
.social_icon{
  height: 15px;
  width: 15px;
}
.single_post{
  margin-top: 59px;
}
.single_post p{
  font-family: New York Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  color: #000000;
}
.border_div{
  width: 100%;
  margin-top: 100px;
  margin-bottom: 30px;
}
.border_image{
  width: 100%;
}
.newsletter{
  text-align: center;
  padding: 60px;
  border-top: 7px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}
.newsletter-text{
  font-family: New York Extra Large;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 28px;
  text-align: center;
  color: #090909;
  margin-bottom: 30px;
}
.newsletter_p{
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #090909;
  margin-bottom: 30px;
}
.submit-form{
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.submit-form input{
  padding: 5px;
  border: 1px solid #777;
}
.submit_button{
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 8px;
}
@media screen and (max-width: 540px) {
  .container{
    width: 100%;
  }
  .single_post_box{
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .newsletter_box{
    padding: 30px;
  }
.newsletter{
  padding: 0;
}
.newsletter-text{
  font-size: 22px;
  margin-top: 30px;
}
.newsletter_p{
  font-size: 16px;
  margin-left: 15px;
  margin-right: 15px;
}
.submit-form input{
  margin-bottom: 30px;
}
}
</style>