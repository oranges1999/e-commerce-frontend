<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const queryParams = route.query;
const category = ref([
  {
    title: 'Fryer',
    link:'/',
    icon:'/src/assets/svg/fryer.svg',
    icon_white:'/src/assets/svg/fryer_white.svg',
  },
  {
    title: 'Hotpot',
    link:'/',
    icon:'/src/assets/svg/hot-pot.svg',
    icon_white:'/src/assets/svg/hot-pot_white.svg'
  },
  {
    title: 'Iron',
    link:'/',
    icon:'/src/assets/svg/iron.svg',
    icon_white:'/src/assets/svg/iron_white.svg'
  },
  {
    title: 'Heater',
    link:'/',
    icon:'/src/assets/svg/heater.svg',
    icon_white:'/src/assets/svg/heater_white.svg'
  },
  {
    title: 'Hyrdroelectric tank',
    link:'',
    icon:'/src/assets/svg/hydroelectric-tank.svg',
    icon_white:'/src/assets/svg/hydroelectric-tank_white.svg'
  },
])

const flashSale = ref([
  {
    id: 1,
    name: 'Fryer 1',
    image: '/src/assets/images/fryer/fryer1.avif',
    salePrice: 80,
    originalPrice: 160,
    discount: 50,
    rating: 5,
    reviews: 88,
    link:'/'
  },
  {
    id: 2,
    name: 'Fryer 2',
    image: '/src/assets/images/fryer/fryer2.webp',
    salePrice: 580,
    originalPrice: 1160,
    discount: 50,
    rating: 4,
    reviews: 75,
    link:'/'
  },
  {
    id: 3,
    name: 'Fryer 3',
    image: '/src/assets/images/fryer/fryer3.jpeg',
    salePrice: 200,
    originalPrice: 400,
    discount: 50,
    rating: 5,
    reviews: 99,
    link:'/'
  },
  {
    id: 4,
    name: 'Fryer 4',
    image: '/src/assets/images/fryer/fryer4.webp',
    salePrice: 200,
    originalPrice: 400,
    discount: 50,
    rating: 4,
    reviews: 99,
    link:'/'
  },
  {
    id: 5,
    name: 'Fryer 5',
    image: '/src/assets/images/fryer/fryer5.avif',
    salePrice: 200,
    originalPrice: 400,
    discount: 50,
    rating: 5,
    reviews: 99,
    link:'/'
  }
])

const currentSlide = ref(0)
const itemsToShow = 4

const countDownToTime = new Date("Sep 26, 2029 00:00:00").getTime()
const daysLeft = ref(null)
const hoursLeft = ref(null)
const minutesLeft = ref(null)
const secondsLeft = ref(null)

const startTimer = () => {
  const timeNow = new Date().getTime()
  const timeDifference = countDownToTime - timeNow
  
  const millisecondsInOneSecond = 1000
  const millisecondsInOneMinute = millisecondsInOneSecond * 60
  const millisecondsInOneHour = millisecondsInOneMinute * 60
  const millisecondsInOneDay = millisecondsInOneHour * 24
  
  const differenceInDays = timeDifference / millisecondsInOneDay
  const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour
  const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute
  const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond
  
  daysLeft.value = Math.floor(differenceInDays)
  hoursLeft.value = Math.floor(remainderDifferenceInHours)
  minutesLeft.value = Math.floor(remainderDifferenceInMinutes)
  secondsLeft.value = Math.floor(remainderDifferenceInSeconds)
}

onMounted(() => {
  setInterval(startTimer, 1000)
})

const slide = (direction) => {
  if (direction === 'next' && currentSlide.value < flashSale.value.length - itemsToShow) {
    currentSlide.value++
  } else if (direction === 'prev' && currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<template>
  <UserLayout :login="queryParams.login">
    <!-- Category & Carousel -->
    <div>
      <div class="flex justify-between w-full mb-[120px]">
        <div class="pt-[40px]">
          <div class="flex flex-col">
            <RouterLink v-for="link in category" class="w-[300px] flex justify-between items-center" :to="link.link">
              <div class="my-[8px] text-[16px] category" to="{{ link.link }}">
                {{ link.title }}
              </div>
              <img src="/src/assets/svg/arrow-right.svg" alt="">
            </RouterLink>
          </div>
        </div>
        <div class="!h-[344px] w-[2px] bg-[#d3d3d3]">
        </div>
        <div class="pt-[40px] block w-[892px] h-[344px] text-center">
          <el-carousel trigger="click">
            <el-carousel-item>
              <img class="w-full h-full" src="/src/assets/images/banner-dm-loai-2-copy-noi-chien-khong-dau-dXBsb2FkYmFubmVyYmFubmVyLWRhbmgtbXVj-medium.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="w-full h-full" src="/src/assets/images/collection_banner.webp" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img class="w-full h-full" src="/src/assets/images/poster-Rapido-1-1.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="border-b-2 border-[#d3d3d3] mb-[60px]">
      <div class="flex items-center">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Featured</p>
      </div>
      <div>
        <div class="flex justify-between items-end mb-[40px]">
          <div class="flex items-end">
            <p class="text-[36px] font-bold mr-[87px]">New Arrival</p>
          </div>
        </div>
        <div class="flex">
          <div class="h-[600px] w-[50%] pr-[15px]">
            <div class="relative bg-black h-full w-full">
              <img class="absolute bottom-[50px] right-0" src="/src/assets/images/fryer/fryer-no-background.png" alt="">
              <div class="absolute bottom-[32px] left-[32px] text-white h-[122px] flex flex-col justify-between">
                <p class="text-[24px] font-bold">Fryer</p>
                <p class="text-[14px]">Lorem ipsum dolor sit amet consectetu<br> Nemo quas aut atque corporis</p>
                <p class="text-[16px] underline cursor-pointer">Shop Now</p>
              </div>
            </div>
          </div>
          <div class="h-[600px] w-[50%] pl-[15px]">
            <div class="h-full w-full">
              <div class="w-full h-[50%] pb-[15px]">
                <div class=" relative bg-black h-full w-full">                  
                  <img class="absolute h-full right-10" src="/src/assets/images/hotpot/hotpot-no-background.png" alt="">
                  <div class="absolute bottom-[32px] left-[32px] text-white h-[122px] flex flex-col justify-between">
                    <p class="text-[24px] font-bold">Hotpot</p>
                    <p class="text-[14px]">Lorem ipsum dolor sit amet consectetu<br> Nemo quas aut atque corporis</p>
                    <p class="text-[16px] underline cursor-pointer">Shop Now</p>
                  </div>
                </div>
              </div>
              <div class="w-full h-[50%] pt-[15px] flex">
                <div class="pr-[15px] h-full w-[50%]">
                  <div class="relative bg-black h-full w-full">
                    <img class="absolute h-full w-full" src="/src/assets/images/heater/heater2.png" alt="">                    
                    <div class="absolute bottom-[32px] left-[32px] text-white h-[122px] flex flex-col justify-between">
                      <p class="text-[24px] font-bold">Heater</p>
                      <p class="text-[14px]">Lorem ipsum dolor sit amet consectetu<br> Nemo quas aut atque corporis</p>
                      <p class="text-[16px] underline cursor-pointer">Shop Now</p>
                    </div>
                  </div>
                </div>
                <div class="pl-[15px] h-full w-[50%]">
                  <div class="relative bg-black h-full w-full">
                    <img class="absolute h-full w-full" src="/src/assets/images/iron/image-removebg-preview.png" alt="">                    
                    <div class="absolute bottom-[32px] left-[32px] text-white h-[122px] flex flex-col justify-between">
                      <p class="text-[24px] font-bold">Iron</p>
                      <p class="text-[14px]">Lorem ipsum dolor sit amet consectetu<br> Nemo quas aut atque corporis</p>
                      <p class="text-[16px] underline cursor-pointer">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b-2 border-[#d3d3d3] mb-[60px]">
      <div class="flex items-center">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Today’s</p>
      </div>
      <div>
        <div class="flex justify-between items-end mb-[40px]">
          <div class="flex items-end">
            <p class="text-[36px] font-bold mr-[87px]">Flash Sales</p>
            <div class="flex">
              <div>
                <p class="text-[12px] font-medium">Days</p>
                <p class="text-[32px] font-bold">{{ daysLeft }}</p>
              </div>
              <p class="text-[32px] mx-[17px] pt-[12px] text-[#DB4444]">:</p>
              <div>
                <p class="text-[12px] font-medium">Hours</p>
                <p class="text-[32px] font-bold">{{ hoursLeft }}</p>
              </div>
              <p class="text-[32px] mx-[17px] pt-[12px] text-[#DB4444]">:</p>
              <div>
                <p class="text-[12px] font-medium">Minutes</p>
                <p class="text-[32px] font-bold">{{ minutesLeft }}</p>
              </div>
              <p class="text-[32px] mx-[17px] pt-[12px] text-[#DB4444]">:</p>
              <div>
                <p class="text-[12px] font-medium">Seconds</p>
                <p class="text-[32px] font-bold">{{ secondsLeft }}</p>
              </div>
            </div>
          </div>
          <div class="flex gap-2 mb-[10px]">
            <button 
              @click="slide('prev')"
              class="p-2 rounded-full border hover:bg-gray-100"
              :disabled="currentSlide === 0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              @click="slide('next')"
              class="p-2 rounded-full border hover:bg-gray-100"
              :disabled="currentSlide >= flashSale.length - itemsToShow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div class="relative overflow-hidden">
          <div 
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }"
          >
            <div 
              v-for="product in flashSale" 
              :key="product.id"
              :style="{ flex: `0 0 ${100 / itemsToShow}%` }"
              class="px-2"
            >
              <RouterLink class="group relative bg-white  rounded-lg relative" :to="product.link">
                <div class=" relative w-[304px] h-[304px] z-[0]">
                  <div class="absolute top-0 left-0 z-[10] m-[10px] w-[55px] h-[26px] bg-[#DB4444] rounded-[4px] flex justify-center items-center">
                    <p class="text-[12px] text-[white]">-{{ product.discount }}</p>
                  </div>
                  <div class="absolute top-0 right-0 z-[20] m-[10px]">
                    <div class="bg-[white] rounded-[50%] cursor-pointer mb-[10px]">
                      <img src="/src/assets/svg/heart.svg" alt="">
                    </div>
                    <div class="bg-[white] aspect-square flex justify-center items-center rounded-[50%] cursor-pointer">
                      <img src="/src/assets/svg/eye.svg" alt="">
                    </div>
                  </div>
                  <img 
                    :src="product.image" 
                    :alt="product.name"
                    class="w-full h-full "
                  >
                  <div class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button class="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div class="z-[1] bg-white">
                  <h3 class="font-medium mb-2">{{ product.name }}</h3>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-red-500 font-bold">${{ product.salePrice }}</span>
                    <span class="text-gray-400 line-through">${{ product.originalPrice }}</span>
                  </div>
                  <div class="flex items-center gap-1 mb-3">
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-sm text-gray-500">({{ product.reviews }})</span>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center py-[60px]">
        <button>
          <div class="w-[234px] h-[56px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
            <p class="text-[16px] text-white font-medium">View All Products</p>
          </div>
        </button>
      </div>
    </div>

    <div class="border-b-2 border-[#d3d3d3] mb-[60px]">
      <div class="flex items-center">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Categories</p>
      </div>
      <div class="">
        <p class="text-[36px] font-bold">Browse By Category</p>
        <div class="flex justify-between my-[60px]">
          <RouterLink v-for="link in category" class="group w-[170px] h-[145px] rounded-[4px] flex justify-center items-center border-2 border-[#d3d3d3] hover:border-0 hover:bg-[#DB4444]" :to="link.link" >
            <div class="flex flex-col items-center">
              <img :src="link.icon" alt="" class="block group-hover:!hidden w-[56px] aspect-square">
              <img :src="link.icon_white" alt="" class="hidden group-hover:!block w-[56px] aspect-square">
              <p class="text-black group-hover:text-white">{{ link.title }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="mb-[60px]">
      <div class="flex items-center">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">This Month</p>
      </div>
      <div class="flex justify-between mb-[60px]">
        <p class="text-[36px] font-bold">Best Selling Products</p>
        <button>
          <div class="py-[16px] px-[48px] flex justify-center items-center bg-[#DB4444] rounded-[4px]"> 
            <p class="text-[16px] text-white font-medium">View All</p>
          </div>
        </button>
      </div>
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }"
        >
          <div 
            v-for="product in flashSale" 
            :key="product.id"
            :style="{ flex: `0 0 ${100 / itemsToShow}%` }"
            class="px-2"
          >
            <RouterLink class="group relative bg-white  rounded-lg" :to="product.link">
              <div class=" relative w-[304px] h-[304px] z-[0]">
                <div class="absolute top-0 right-0 z-[20] m-[10px]">
                  <div class="bg-[white] rounded-[50%] cursor-pointer mb-[10px]">
                    <img src="/src/assets/svg/heart.svg" alt="">
                  </div>
                  <div class="bg-[white] aspect-square flex justify-center items-center rounded-[50%] cursor-pointer">
                    <img src="/src/assets/svg/eye.svg" alt="">
                  </div>
                </div>
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full "
                >
                <div class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button class="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="z-[1] bg-white">
                <h3 class="font-medium mb-2">{{ product.name }}</h3>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-gray-400">${{ product.originalPrice }}</span>
                </div>
                <div class="flex items-center gap-1 mb-3">
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-500">({{ product.reviews }})</span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    
    <div class="relative mb-[60px]">
      <div class="absolute left-[160px] top-[88.1px]">
        <p class="text-[#00FF66] text-[16px] font-bold">Categories</p>
        <p class="text-white text-[48px] font-bold">Enhance Your <br> Home Experience</p>
        <div class="mt-[32px] mb-[40px] flex justify-between w-[320px]">
          <div class="bg-white w-[62px] h-[62px] flex flex-col justify-center items-center rounded-[50%]">
            <p class="text-[16px] font-bold">{{ daysLeft }}</p>
            <p class="text-[11px]">Days</p>
          </div>
          <div class="bg-white w-[62px] h-[62px] flex flex-col justify-center items-center rounded-[50%]">
            <p class="text-[16px] font-bold">{{ hoursLeft }}</p>
            <p class="text-[11px]">Hours</p>
          </div>
          <div class="bg-white w-[62px] h-[62px] flex flex-col justify-center items-center rounded-[50%]">
            <p class="text-[16px] font-bold">{{ minutesLeft }}</p>
            <p class="text-[11px]">Minutes</p>
          </div>
          <div class="bg-white w-[62px] h-[62px] flex flex-col justify-center items-center rounded-[50%]">
            <p class="text-[16px] font-bold">{{ secondsLeft }}</p>
            <p class="text-[11px]">Seconds</p>
          </div>
        </div>
        <button>
          <div class="px-[48px] py-[16px] flex justify-center items-center bg-[#00FF66] rounded-[4px] cursor-pointer"> 
            <p class="text-[16px] text-[gray] font-medium">Buy Now!</p>
          </div>
        </button>
      </div>
      <img class="absolute w-[400px] top-[73.5px] right-[200px]" src="/src/assets/images/heater/heater1.png" alt="">
      <img src="/src/assets/svg/background-banner.svg" alt="" class="w-full aspect-auto">
    </div>

    <div class="mb-[60px]">
      <div class="flex items-center">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Our Products</p>
      </div>
      <div class="flex justify-between mb-[60px]">
        <p class="text-[36px] font-bold">Explore Our Products</p>
      </div>
      <div class="flex flex-col items-center">
        <div 
          class="flex flex-wrap"
          :style="{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }"
        >
          <div 
            v-for="product in flashSale" 
            :key="product.id"
            :style="{ flex: `0 0 ${100 / itemsToShow}%` }"
            class="px-2"
          >
            <RouterLink class="group bg-white  rounded-lg relative" :to="product.link">
              <div class=" relative w-[304px] h-[304px] z-[0]">
                <div class="absolute top-0 right-0 z-[20] m-[10px]">
                  <div class="bg-[white] rounded-[50%] cursor-pointer mb-[10px]">
                    <img src="/src/assets/svg/heart.svg" alt="">
                  </div>
                  <div class="bg-[white] aspect-square flex justify-center items-center rounded-[50%] cursor-pointer">
                    <img src="/src/assets/svg/eye.svg" alt="">
                  </div>
                </div>
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full "
                >
                <div class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button class="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="z-[1] bg-white">
                <h3 class="font-medium mb-2">{{ product.name }}</h3>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-gray-400">${{ product.originalPrice }}</span>
                </div>
                <div class="flex items-center gap-1 mb-3">
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-500">({{ product.reviews }})</span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <button class="mt-[60px]">
          <div class="py-[16px] px-[48px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
            <p class="text-[16px] text-white font-medium">View All Products</p>
          </div>
        </button>
      </div>
    </div>

  </UserLayout>
</template>

<style scoped>
.category:last-child{
  margin-bottom: 0;
}
</style>
