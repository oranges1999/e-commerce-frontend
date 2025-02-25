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
    link:'/',
    qty: 2
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
    link:'/',
    qty:1
  },
])

const checked1 = ref()
</script>

<template>
    <UserLayout>
        <div class="mb-[40px]">
            <div class="flex my-[60px]">
                <p class="text-[14px] opacity-[50%]">Account</p>
                <p class="mx-[10px]">/</p>
                <p class="text-[14px] opacity-[50%]">My Account</p>
                <p class="mx-[10px]">/</p>
                <p class="text-[14px] opacity-[50%]">Product</p>
                <p class="mx-[10px]">/</p>
                <p class="text-[14px] opacity-[50%]">View Cart</p>
                <p class="mx-[10px]">/</p>
                <p class="text-[14px]">Check Out</p>
            </div>
            <div class="flex justify-between">
                <div>
                    <div>
                        <p class="text-[36px] mb-[48px]">Billing Details</p>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">First Name <span class="text-[#db4444]">*</span></p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Company Name</p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Street Address <span class="text-[#db4444]">*</span></p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Apartment, floor, etc. (optional)</p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Town/City <span class="text-[#db4444]">*</span></p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Phone Number <span class="text-[#db4444]">*</span></p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="mb-[32px]">
                            <p class="opacity-[40%]">Email Address <span class="text-[#db4444]">*</span></p>
                            <input class="bg-[#F5F5F5] h-[50px] w-[470px]" type="text">
                        </div>
                        <div class="flex items-center">
                            <el-checkbox v-model="checked1" size="large" />
                            <p class="ml-[16px]">Save this information for faster check-out next time</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        
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

::v-deep(.el-input-number__increase){
    border: none;
    background: none;
}

::v-deep(.el-input-number.is-controls-right .el-input-number__increase ){
    border-bottom: none;
}

::v-deep(.el-input-number__decrease){
    border-left: none;
    background: none;
}

::v-deep(.el-input-number.is-controls-right .el-input-number__decrease){
    border-left: none;
}

::v-deep(.el-checkbox__inner){
    width: 24px !important;
    height: 24px !important;
    border-radius: 4px;
}

::v-deep(.el-checkbox__inner::after){
    scale: 200%;
    top: 5px;
    left: 10px;
}

::v-deep(.el-checkbox__input.is-checked .el-checkbox__inner){
    background-color: #DB4444 ;
    border-color: #DB4444;
}
</style>
