<template>
<div class="bg-black text-white text-center" style="width: 100%">
  <div class="scrolling_box mb-10">
    <marquee width="100%" direction="left" height="75px">
      <ul class="inline-flex p-6 justify-between">
        <li class="service_list">Digital product design</li>
        <li class="service_list">Remote work</li>
        <li class="service_list">UX design</li>
        <li class="service_list">Distributed teams</li>
        <li class="service_list">Creativity</li>
        <li class="service_list">Strategy</li>
        <li class="service_list">Suspense</li>
        <li class="service_list">Growth</li>
      </ul>
    </marquee>
  </div>
  <div class="content-center mb-6">
    <img src="~assets/NORDIC ROSE (1).png" alt="" style="margin: 0 auto" class="footer_logo">
  </div>
  <p class="footer_text items-center mb-6 md:w-1/4 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
  <ul class="inline-flex mb-5">
    <li><NuxtLink to="#" class="mr-4 underline footer_social_link">Twitter</NuxtLink></li>
    <li><NuxtLink to="#" class="mr-4 underline footer_social_link">LinkedIn</NuxtLink></li>
    <li><NuxtLink to="#" class="mr-4 underline footer_social_link">RSS</NuxtLink></li>
  </ul>
  <p class="copyright p-6">© 2012–2020 Nordic Rose Co.All rights reserved. </p>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.service_list{
  font-family: SF Pro Text;
  margin-right: 30px;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.service_list:nth-child(odd){
  font-weight: bold;
}
.footer_text{
  margin: 0 auto;
  padding-right: 15px !important;
  padding-left: 15px !important;
}
@media screen and (max-width: 540px) {
  .footer_logo{
    width: 236.37px;
    height: 22.18px;
  }
  .footer_text{
    font-family: New York Small;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
  }
  .footer_social_link{
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 170%;
    text-decoration-line: underline;
    color: #FFFFFF;
  }
  .copyright{
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
  }
}
</style>