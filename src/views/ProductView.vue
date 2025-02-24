<template>
    <UserLayout>
        <div class="flex justify-between my-[80px]">
            <div class="flex mb-[32px]">
                <RouterLink to="/" class="text-[14px] opacity-[50%]">Home</RouterLink>
                <p class="text-[14px] mx-[10px]">/</p>
                <p class="text-[14px] opacity-[50%]">Gaming</p>
                <p class="text-[14px] mx-[10px]">/</p>
                <p class="text-[14px]">Fryer 2</p>
            </div>    
        </div>
        <div class="flex grid grid-cols-10 gap-[30px]">
            <div class="grid grid-flow-col grid-rows-4 gap-[16px]">
                <div v-for="image, index in productInfo.image" :key="index" class="cursor-pointer" @click="setImage(index)">
                    <img class="w-[100px] aspect-auto" :src="image.link" alt="">
                </div>
            </div>
            <div class="col-span-5 flex items-center justify-center">
                <img :src="bigImage.link" alt="">
            </div>
            <div class="col-span-4">
                <p class="text-[24px] font-bold">{{ productInfo.name }}</p>
                <div class="flex items-center gap-1 mb-3">
                    <div class="flex">
                        <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= productInfo.rating ? 'text-yellow-400' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="text-sm text-gray-500">({{ productInfo.reviews }} Reviews) | <span class="text-[#00FF66]">In stock</span></p>
                </div>
                <p class="text-[24px]">${{ productInfo.originalPrice }}</p>
                <p class="text-[14px]">{{ productInfo.content }}</p>
                <div class="h-[1px] w-full bg-black my-[24px]"></div>
                <div class="flex items-center mb-[24px]">
                    <p class="mr-[20px] text-[20px]">Colors:</p>
                    <el-radio-group id="color" v-model="radio1">
                        <el-radio id="option1" value="1" size="large"></el-radio>
                        <el-radio id="option2" value="2" size="large"></el-radio>
                    </el-radio-group>
                </div>
                <div class="flex items-center mb-[24px]">
                    <p class="mr-[20px] text-[20px]">Version:</p>
                    <el-radio-group v-model="radio2">
                        <el-radio id="option3" value="1" size="large" border>Option A</el-radio>
                        <el-radio id="option4" value="2" size="large" border>Option B</el-radio>
                    </el-radio-group>
                </div>
                <div class="flex">
                    <el-input-number size="large" class="" v-model="num" :min="1" :max="10" @change="handleChange" />
                    <div class="flex justify-center items-center ml-[20px]">
                        <button>
                            <div class="px-[48px] py-[10px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
                                <p class="text-[16px] text-white font-medium">Buy Now</p>
                            </div>
                        </button>
                    </div>
                    <RouterLink to="/wishlist" class="ml-[20px]">
                        <img class="h-full w-full" src="/src/assets/svg/heart-with-frame.svg" alt="">
                    </RouterLink>
                </div>
                <div class="w-full border-2 border-[#d3d3d3] py-[24px] px-[16px] mt-[40px] rounded-[4px]">
                    <div class="flex items-center">
                        <img class="w-[40px] h-[40px]" src="/src/assets/svg/truck.svg" alt="">
                        <div class="ml-[16px]">
                            <p class="text-[16px] font-medium">Free Delivery</p>
                            <p class="text-[12px]">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div class="my-[16px] w-full h-[1px] bg-[#d3d3d3]"></div>
                    <div class="flex items-center">
                        <img class="w-[40px] h-[40px]" src="/src/assets/return.svg" alt="">
                        <div class="ml-[16px]">
                            <p class="text-[16px] font-medium">Return Delivery</p>
                            <p class="text-[12px]">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-[60px]">
            <div class="flex items-center">
                <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                <p class="text-[16px] font-bold text-[#DB4444] ml-[16px]">Related Item</p>
            </div>
            <div class="flex flex-col items-center mt-[40px]">
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

<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { onMounted, ref } from 'vue'

const radio1 = ref()
const radio2 = ref()
const num = ref()

const productInfo = ref({
    id: 1,
    name: 'Fryer 2',
    image:[
        {
            link: '/src/assets/images/fryer/product/noi-chien-khong-dau-locknlock-visible-air-fryer-cube-ejf996blk-1.png'
        },
        {
            link: '/src/assets/images/fryer/product/noi-chien-khong-dau-locknlock-visible-air-fryer-cube-ejf996blk-2.png'
        },
        {
            link: '/src/assets/images/fryer/product/noi-chien-khong-dau-locknlock-visible-air-fryer-cube-ejf996blk-3.png'
        },
        {
            link: '/src/assets/images/fryer/product/noi-chien-khong-dau-locknlock-visible-air-fryer-cube-ejf996blk-4.png'
        },
    ],
    originalPrice: 160,
    discount: 50,
    rating: 5,
    reviews: 88,
    content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed reprehenderit ratione fugiat dolorum, quibusdam magni laborum hic possimus provident temporibus aspernatur molestiae, in dignissimos ipsum dolores facilis? Deserunt, doloremque.',
    link:'/'
})

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
    link:'/product'
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
    link:'/product'
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
    link:'/product'
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
    link:'/product'
  },
])

const id = ref(0)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTop()

const bigImage = ref()

const setImage = (index) => {
    bigImage.value = productInfo.value.image[index]
}
setImage(id.value)

const cyclePicture = () => {
    if(id.value == 3){
        id.value = 0
    } else {
        id.value = id.value + 1
    }
    setImage(id.value)
}

onMounted(() => {
  setInterval(cyclePicture, 3000)
})
</script>

<style scoped>
#option1 :deep(.el-radio__inner), #option2 :deep(.el-radio__inner){
    height: 30px ;
    width: 30px ;
}

#option1 :deep(.el-radio__inner){
    background-color: brown;
}

#option2 :deep(.el-radio__inner){
    background-color: chocolate;
}

#option1 :deep(.el-radio__inner::after), #option2 :deep(.el-radio__inner::after){
    display: none;
}

::v-deep(.el-radio__input.is-checked .el-radio__inner){
    background: none;
    border-color: black
}

#option1.el-radio{
    margin: 0;
}

#option3 :deep(.el-radio__inner), #option4 :deep(.el-radio__inner){
    display: none;
}

#option3.el-radio.is-bordered.is-checked, #option4.el-radio.is-bordered.is-checked{
    background:#DB4444;
    border-color: #DB4444;
}

#option3 :deep(.el-radio__input.is-checked+.el-radio__label),
#option4 :deep(.el-radio__input.is-checked+.el-radio__label){
    color: white;
}
</style>