<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { h, ref } from 'vue'
import { ElNotification } from 'element-plus'

const props=defineProps(['param'])
if(props.param?.login && props.param?.login == 'true'){
  ElNotification({
    duration:2000,
    title: 'Login success',
    message: h('i', { style: 'color: teal' }, 'You have logged in successfully'),
  })
}

if(props.param?.order && props.param?.order == 'true'){
  ElNotification({
    duration:2000,
    title: 'Order have been placed',
    message: h('i', { style: 'color: teal' }, 'Your order have been placed successfully'),
  })
}
const navLinks = ref([
  {
    title: 'Home',
    link:'/',
  },
  {
    title: 'Contact',
    link:'/contact',
  },
  {
    title: 'About',
    link:'/about',
  },
  {
    title: 'Sign up',
    link:'/signup',
  },
])

const footerLinks = ref([
  {
    title: 'My Account',
    link:'/profile',
  },
  {
    title: 'Login / Register',
    link:'/login',
  },
  {
    title: 'Cart',
    link:'/cart',
  },
  {
    title: 'Wishlist',
    link:'/wishlist',
  },
])

const quickLinks = ref([
  {
    title: 'Privacy Policy',
    link:'/',
  },
  {
    title: 'Terms Of Use',
    link:'/',
  },
  {
    title: 'FAQ',
    link:'/',
  },
  {
    title: 'Contact',
    link:'/contact',
  },
])
</script>

<template>
  <header class="border-b-2 border-[#d3d3d3]">
    <div class="h-[48px] flex justify-center items-center bg-black">
      <p class="text-[14px] text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="underline !font-bold" href="">ShopNow</a>
      </p>
    </div>
  </header>

  <div class="container sm:py-[40px] mx-auto w-full max-w-[1280px] flex flex-col justify-between items-center sm:flex-row px-[10px]">
      <RouterLink to="/">
        <h1 class="text-[24px] font-bold cursor-pointer">Exclusive</h1>
      </RouterLink>

      <div class="w-[367px] flex justify-around my-[20px] sm:my-[0px]">
        <template v-for="link, index in navLinks">
            <router-link v-if="!(link.title == 'Sign up' && param?.login == 'true')" :to="link.link">{{ link.title }}</router-link>
        </template>
      </div>

      <div class="flex">
        <div class="relative bg-[#F5F5F5] rounded-[4px] px-[20px] flex justify-center">
          <input class="w-[211px] h-[38px] " type="text" placeholder="What are you looking for?">
          <img class="absolute right-[10px] top-[10px] cursor-pointer" src="/src/assets/svg/magnifying-glass.svg" alt="">
        </div>
        <RouterLink class="flex relative mx-[16px]" to="/wishlist">
            <img class="cursor-pointer" style="max-width: fit-content; width: 32px !important;" src="/src/assets/svg/heart.svg" alt="">
            <div v-if="param?.login && param?.login == 'true'" class="absolute right-[-5px] w-[16px] h-[16px] bg-[#db4444] flex justify-center items-center rounded-[50%]">
                <p class="text-[white] text-[12px] font-bold">4</p>
            </div>
        </RouterLink>
        <RouterLink class="flex relative" to="/cart"> 
            <img class=" cursor-pointer" style="max-width: fit-content; width: 32px !important;" src="/src/assets/svg/cart.svg" alt="">
            <div v-if="param?.login && param?.login == 'true'" class="absolute right-[-5px] w-[16px] h-[16px] bg-[#db4444] flex justify-center items-center rounded-[50%]">
                <p class="text-[white] text-[12px] font-bold">4</p>
            </div>
        </RouterLink>
        <template v-if="param?.login && param?.login == 'true'">
          <el-dropdown class="ml-[16px]" placement="bottom-end" trigger="click">
            <img style="width: 32px !important; max-width: fit-content;" class="cursor-pointer el-dropdown-link" src="/src/assets/svg/profile.svg" alt="">
            <template #dropdown>
              <el-dropdown-menu class="!bg-[#F6F6F6]">
                <el-dropdown-item>
                  <RouterLink to="/profile" class="flex items-center">
                    <img class="w-[24px] h-[24px]" src="/src/assets/svg/profile.svg" alt="">
                    <p class="ml-[10px]">
                      Manage My Account
                    </p>
                  </RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <RouterLink to="/profile" class="flex items-center">
                    <img class="w-[24px] h-[24px]" src="/src/assets/svg/order.svg" alt="">
                    <p class="ml-[10px]">
                      My Order
                    </p>
                  </RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <RouterLink to="/profile" class="flex items-center">
                    <img class="w-[24px] h-[24px]" src="/src/assets/svg/close.svg" alt="">
                    <p class="ml-[10px]">
                      My Cancellations
                    </p>
                  </RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <RouterLink to="/profile" class="flex items-center">
                    <img class="w-[24px] h-[24px]" src="/src/assets/svg/star.svg" alt="">
                    <p class="ml-[10px]">
                      My Reviews
                    </p>
                  </RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <RouterLink to="/?login=false" class="flex items-center">
                    <img class="w-[24px] h-[24px]" src="/src/assets/svg/logout.svg" alt="">
                    <p class="ml-[10px]">
                      Logout
                    </p>
                  </RouterLink>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
    </div>

  <div class="mx-auto w-full max-w-[1280px]">
    <slot></slot>
  </div>

  <footer>
    <div class=" flex justify-center items-center bg-black">
      <div class="my-[30px] mx-auto w-full max-w-[1280px] grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4">
        <div class="mx-[20px] md:flex md:justify-center">
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
        </div>
        <div class="mx-[20px] md:flex md:justify-center">
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Support</p>
            <p class="text-[16px] mt-[20px]">Hoang Mai, Ha Noi</p>
            <p class="text-[16px] mt-[20px]">exclusive@gmail.com</p>
            <p class="text-[16px] mt-[20px]">0123456789</p>
          </div>
        </div>
        <div class="mx-[20px] md:flex md:justify-center">
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Account</p>
            <div class="flex flex-col">
              <RouterLink class="text-[16px] mt-[20px] !text-white" v-for="link in footerLinks" :to="link.link">{{ link.title }}</RouterLink>
            </div>
          </div>
        </div>
        <div class="mx-[20px] md:flex md:justify-center">
          <div class="text-white mb-[10px]">
            <p class="text-[24px] font-bold">Quick Link</p>
            <div class="flex flex-col">
              <RouterLink class="text-[16px] mt-[20px] !text-white" v-for="link in quickLinks" :to="link.link">{{ link.title }}</RouterLink>
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
