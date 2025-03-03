<template>
  <UserLayout>
    <div class="flex justify-between my-[80px]">
        <div class="flex mb-[32px]">
            <p class="text-[14px] opacity-[50%]">Home</p>
            <p class="text-[14px] mx-[10px]">/</p>
            <p class="text-[14px]">About</p>
        </div>    
    </div>
    <div class="flex max-xl:flex-col  sm:max-xl:items-center flex-row justify-between mb-[80px]">
      <div class="">
        <div class="xl:w-[525px]">
          <p class="text-[54px] font-bold mb-[40px]">Our Story</p>
          <p class="text-[16px] mb-[24px] text-wrap max-sm:w-screen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut est commodi nesciunt soluta tenetur consequatur omnis magni! Ratione dicta labore non culpa vero delectus corrupti sequi inventore, modi molestias!</p>
          <p class="text-[16px] text-wrap max-sm:w-screen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia! Quaerat sit rerum quod ad minima esse veritatis. Illum accusamus, dolor dolore ad nam deserunt eveniet impedit quam amet culpa.</p>
        </div>
      </div>
      <img class="max-sm:w-screen sm:max-xl:w-[525px]" src="/src/assets/svg/background-right.svg" alt="">
    </div>
    <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-[30px] mb-[80px]">
      <div class="group hover:bg-[#DB4444] flex flex-col items-center justify-center px-[50px] py-[30px] border-2 border-[#d3d3d3] rounded-[4px]">
        <img class="w-[80px] h-[80px] group-hover:hidden block" src="/src/assets/svg/store-icon.svg" alt="">
        <img class="w-[80px] h-[80px] group-hover:block hidden" src="/src/assets/svg/store-icon-white.svg" alt="">
        <p class="text-[32px] font-bold group-hover:text-white">10.5k</p>
        <p class="text-[16px] group-hover:text-white">Sellers active our site</p>
      </div>
      <div class="group hover:bg-[#DB4444] flex flex-col items-center justify-center px-[50px] py-[30px] border-2 border-[#d3d3d3] rounded-[4px]">
        <img class="w-[80px] h-[80px] group-hover:hidden block" src="/src/assets/svg/money-sign.svg" alt="">
        <img class="w-[80px] h-[80px] group-hover:block hidden" src="/src/assets/svg/money-sign-white.svg" alt="">
        <p class="text-[32px] font-bold group-hover:text-white">33k</p>
        <p class="text-[16px] group-hover:text-white">Monthly Produduct Sale</p>
      </div>
      <div class="group hover:bg-[#DB4444] flex flex-col items-center justify-center px-[50px] py-[30px] border-2 border-[#d3d3d3] rounded-[4px]">
        <img class="w-[80px] h-[80px] group-hover:hidden block" src="/src/assets/svg/bag.svg" alt="">
        <img class="w-[80px] h-[80px] group-hover:block hidden" src="/src/assets/svg/bag-white.svg" alt="">
        <p class="text-[32px] font-bold group-hover:text-white">45.5k</p>
        <p class="text-[16px] group-hover:text-white">Customer active in our site</p>
      </div>
      <div class="group hover:bg-[#DB4444] flex flex-col items-center justify-center px-[50px] py-[30px] border-2 border-[#d3d3d3] rounded-[4px]">
        <img class="w-[80px] h-[80px] group-hover:hidden block" src="/src/assets/svg/money-bag.svg" alt="">
        <img class="w-[80px] h-[80px] group-hover:block hidden" src="/src/assets/svg/money-bag-white.svg" alt="">
        <p class="text-[32px] font-bold group-hover:text-white">25k</p>
        <p class="text-[16px] group-hover:text-white">Annual gross in our site</p>
      </div>
    </div>
    <div class="mb-[80px]">
      <el-carousel indicator-position="none" type="card" :direction="lessThan1280?'vertical':'horizontal'">
        <el-carousel-item v-for="employee, index in employees" :key="index">
          <div class="rounded-[14px] bg-white h-full flex">
            <img class="h-full rounded-[14px]" :src="employee.image" alt="">
            <div class="ml-[10px]">
              <p class="text-[32px] font-medium">{{ employee.name }}</p>
              <p class="text-[16px] mb-[10px]">{{ employee.position }}</p>
              <div class="flex gap-3" >
                <img src="/src/assets/svg/twitter.svg" alt="">
                <img src="/src/assets/svg/instagram.svg" alt="">
                <img src="/src/assets/svg/linkedin.svg" alt="">
              </div>
              <div class="flex mt-[20px]">
                <div class="w-[24px]">
                  <img class="min-w-[24px] h-[24px]" src="/src/assets/svg/quote-left-svgrepo-com.svg" alt="">
                </div>
                <p class="max-xl:text-nowrap xl:text-wrap max-xl:truncate max-xl:max-w-[60%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam dolores veritatis quos deserunt, recusandae dolorem consequuntur dicta facere aut reiciendis doloribus ut consectetur ea rem iure accusantium pariatur quam. 
                </p>
                <div class="w-[24px] flex items-end">
                  <img class="min-w-[24px] h-[24px]" src="/src/assets/svg/quote-right-svgrepo-com.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="grid grid-cols-3 mb-[80px]">
      <div class="flex flex-col justify-center items-center">
        <img class="mb-[24px]" src="/src/assets/svg/delivery.svg" alt="">
        <p class="font-bold text-[20px] text-center">FREE AND FAST DELIVERY</p>
        <p class="mt-[8px] text-[14px] text-center">Free delivery for all orders over $140</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img class="mb-[24px]" src="/src/assets/svg/customer-service.svg" alt="">
        <p class="font-bold text-[20px] text-center">24/7 CUSTOMER SERVICE</p>
        <p class="mt-[8px] text-[14px] text-center">Friendly 24/7 customer support</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img class="mb-[24px]" src="/src/assets/svg/after-service.svg" alt="">
        <p class="font-bold text-[20px] text-center">MONEY BACK GUARANTEE</p>
        <p class="mt-[8px] text-[14px] text-center">We return money within 30 days</p>
      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted, onUnmounted } from 'vue'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTop()

const lessThan1280 = ref(false)
const check = () => {
  if(window.innerWidth < 1280){
    lessThan1280.value = true
  } else {
    lessThan1280.value = false
  }
  console.log(lessThan1280.value)
}
check()

onMounted(() => {
  window.addEventListener('resize', check);
})

onUnmounted(() => {
  window.removeEventListener('resize', check);
})

const employees = ref([
  {
    name: 'Nguyen Van A',
    position: 'Founder & Chairman',
    image: '/src/assets/svg/avatar/person1.svg'
  },
  {
    name: 'Nguyen Van B',
    position: 'Managing Director',
    image: '/src/assets/svg/avatar/person2.svg'
  },
  {
    name: 'Nguyen Van C',
    position: 'Product Designer',
    image: '/src/assets/svg/avatar/person3.svg'
  },
  {
    name: 'Nguyen Van D',
    position: 'Lead Salesman',
    image: '/src/assets/svg/avatar/person1.svg'
  },
  {
    name: 'Nguyen Van E',
    position: 'Marketing manager',
    image: '/src/assets/svg/avatar/person3.svg'
  },
  {
    name: 'Nguyen Van G',
    position: 'IT Manager',
    image: '/src/assets/svg/avatar/person2.svg'
  },
])
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

::v-deep(.el-carousel__mask){
  opacity: 0.75;
}
</style>