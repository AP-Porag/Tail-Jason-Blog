<template>
  <nav class="border-b border-gray-200 w-full p-5">
    <div class="flex items-center justify-between">

      <!-- Header logo -->
      <div>
        <nuxt-link to="/">
          <img src="~assets/NORDIC ROSE.png" class="logo_big" alt="">
        </nuxt-link>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <li><NuxtLink to="/" class="nav_link">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav_link">About</NuxtLink></li>
          <li><NuxtLink to="/links" class="nav_link">Links</NuxtLink></li>
          <li><NuxtLink to="projects" class="nav_link">Projects</NuxtLink></li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg
                class="w-6 h-6"
                fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <nuxt-link to="/">
          <img src="~assets/NORDIC ROSE.png" class="logo_small" alt="">
        </nuxt-link>
        </span>

        <ul class="divide-y font-sans">
          <li><NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" @click="isOpen = false" class="my-4 inline-block">About</NuxtLink></li>
          <li><NuxtLink to="/links" @click="isOpen = false" class="my-4 inline-block">Links</NuxtLink></li>
          <li><NuxtLink to="projects" @click="isOpen = false" class="my-4 inline-block">Projects</NuxtLink></li>
        </ul>


      </aside>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
<style scoped>
nav{
  margin-bottom: 77px;
}
.logo_big{
  width: 350.83px;
  height: 37.53px;
}
.logo_small{
  width: 217px;
  height: 20px;
}
.nav_link{
  padding-bottom: 30px;
}
.nuxt-link-exact-active{
  border-bottom: 2px solid #000000;
}
@media screen and (max-width: 540px) {
  .logo_big{
    width: 217px;
    height: 20px;
  }
}

</style>