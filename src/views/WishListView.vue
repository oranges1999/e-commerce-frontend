<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted } from 'vue'

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
])
</script>

<template>
    <UserLayout>
        <div class="my-[60px]">
            <div class="flex items-center justify-between mb-[60px]">
                <p class="text-[20px]">Wishlist ({{ flashSale.length }})</p>
                <div class="border-2 border-[#d3d3d3] py-[16px] px-[48px]">
                    <p>Move All To Bag</p>
                </div>
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
            </div>
        </div>
        <div class="mb-[60px]">
            <div class="flex items-center justify-between mb-[60px]">
                <div class="flex items-center">
                    <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                    <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Just For You</p>
                </div>
                <div class="border-2 border-[#d3d3d3] py-[16px] px-[48px]">
                    <p>See All</p>
                </div>
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
            </div>
        </div>
    </UserLayout>
</template>

<style scoped>
::v-deep(.el-input .el-input__wrapper){
    box-shadow: none;
    padding: 0;
}
</style>
