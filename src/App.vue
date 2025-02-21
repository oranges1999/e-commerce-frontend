<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const navLinks = ref([
  {
    title: 'Home',
    link:'',
  },
  {
    title: 'Contact',
    link:'',
  },
  {
    title: 'About',
    link:'',
  },
  {
    title: 'Sign up',
    link:'',
  },
])

const footerLinks = ref([
  {
    title: 'My Account',
    link:'',
  },
  {
    title: 'Login / Register',
    link:'',
  },
  {
    title: 'Cart',
    link:'',
  },
  {
    title: 'Wishlist',
    link:'',
  },
  {
    title: 'Shop',
    link:'',
  },
])

const quickLinks = ref([
  {
    title: 'Privacy Policy',
    link:'',
  },
  {
    title: 'Terms Of Use',
    link:'',
  },
  {
    title: 'FAQ',
    link:'',
  },
  {
    title: 'Contact',
    link:'',
  },
])
</script>

<template>
  <header>
    <div class="h-[48px] flex justify-center items-center bg-black">
      <p class="text-[14px] text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="underline !font-bold" href="">ShopNow</a>
      </p>
    </div>
    <div class="container py-[40px] mx-auto w-full max-w-[1280px] flex justify-between items-center">
      <h1 class="text-[24px] font-bold cursor-pointer">Exclusive</h1>
      <div class="w-[367px] flex justify-between">
        <RouterLink v-for="link, index in navLinks" :to="link.link">{{ link.title }}</RouterLink>
      </div>
      <div class="flex w-[347px]">
        <div class="relative bg-[#F5F5F5] rounded-[4px] w-[283px] flex justify-center">
          <input class="w-[211px] h-[38px] " type="text" placeholder="What are you looking for?">
          <img class="absolute right-[20px] top-[10px] cursor-pointer" src="/src/assets/svg/magnifying-glass.svg" alt="">
        </div>
        <img class="cursor-pointer mx-[16px]" src="/src/assets/svg/heart.svg" alt="">
        <img class="cursor-pointer" src="/src/assets/svg/cart.svg" alt="">
      </div>
    </div>
  </header>

  <div class="mx-auto px-4 w-full max-w-[1280px]">
    <RouterView />
  </div>

  <footer>
    <div class="h-[440px] flex justify-center items-center bg-black">
      <div class="mx-auto px-4 w-full max-w-[1280px] flex justify-between">
        <div>
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Exclusive</p>
            <p class="text-[20px] font-medium my-[24px]">Subcribe</p>
            <p class="text-[16px]">Get 10% off your first order</p>
          </div>
          <div class="relative bg-[black] border border-white rounded-[4px] w-[217px]">
            <input id="email" class="ml-[20px] w-[130px] h-[38px] " type="text" placeholder="Enter your email">
            <img class="absolute right-[20px] top-[6px] cursor-pointer" src="/src/assets/svg/paper-plane.svg" alt="">
          </div>
        </div>
        <div>
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Support</p>
            <p class="text-[16px] mt-[20px]">Hoang Mai, Ha Noi</p>
            <p class="text-[16px] mt-[20px]">exclusive@gmail.com</p>
            <p class="text-[16px] mt-[20px]">0123456789</p>
          </div>
        </div>
        <div>
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Account</p>
            <div class="flex flex-col">
              <RouterLink class="text-[16px] mt-[20px] !text-white" v-for="link in footerLinks">{{ link.title }}</RouterLink>
            </div>
          </div>
        </div>
        <div>
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Quick Link</p>
            <div class="flex flex-col">
              <RouterLink class="text-[16px] mt-[20px] !text-white" v-for="link in footerLinks">{{ link.title }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#email::placeholder{
  color: white;
  opacity: 40%;
}

#email:focus{
  border: none;
}
</style>
