<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted } from 'vue'

const radio = ref()
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
            <div class="grid min-[854px]:grid-cols-2 min-[854px]:gap-[173px] px-[20px]">
                <div class="min-[854px]:hidden flex flex-col items-center w-full">
                    <p class="min-[854px]:hidden block w-full text-[36px] mb-[48px]">Billing Details</p>
                    <div class=" min-sm:w-[470px] max-sm:w-full">
                        <div class="grid grid-rows-2 gap-[32px] mb-[32px]">
                            <template v-for="product in flashSale">
                                <div>
                                    <div class="flex justify-between">
                                        <div class="flex items-center">
                                            <img width="50px" :src="product.image" alt="">
                                            <p class="ml-[24px]">{{ product.name }}</p>
                                        </div>
                                        <p>${{ product.originalPrice }}</p>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div class="flex flex-col w-full max-sm:mt-[24px] p-[24px border-black mb-[32px]">
                            <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                                <p>Shipping:</p>
                                <p>$Free</p>
                            </div>
                            <div class="flex justify-between h-[50px] items-center">
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>
                        </div>
                        <div class="">
                            <el-radio-group class="w-full" v-model="radio">
                                <div class="w-full flex flex-col">
                                    <div class="mb-[32px] w-full flex justify-between">
                                        <el-radio :value="3">Bank</el-radio>
                                        <img src="/src/assets/svg/bank-icon.svg" alt="">
                                    </div>
                                    <el-radio class="mb-[32px]" :value="6">Cash on delivery</el-radio>   
                                </div>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="flex max-[1089px]:flex-col min-[1089px]:flex-row mb-[32px] min-sm:w-[470px] max-sm:w-full">
                        <div class="border-2 border-black rounded-[4px] max-[1089px]:w-full">
                            <input class="mx-[24px] my-[16px]" type="text" placeholder="Coupon Code">
                        </div>
                        <div class="flex justify-center items-center rounded-[4px] min-[1089px]:ml-[16px] max-[1089px]:mt-[16px] bg-[#db4444] cursor-pointer">
                            <p class="text-[16px] text-white mx-[48px] my-[16px]">Apply Coupon</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full sm:max-[854px]:items-center">
                    <p class="min-[854px]:block hidden text-[36px] mb-[48px]">Billing Details</p>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">First Name <span class="text-[#db4444]">*</span></p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Company Name</p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Street Address <span class="text-[#db4444]">*</span></p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Apartment, floor, etc. (optional)</p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Town/City <span class="text-[#db4444]">*</span></p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Phone Number <span class="text-[#db4444]">*</span></p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="mb-[32px]">
                        <p class="opacity-[40%]">Email Address <span class="text-[#db4444]">*</span></p>
                        <input class="bg-[#F5F5F5] h-[50px] min-sm:w-[470px] max-sm:w-full" type="text">
                    </div>
                    <div class="flex items-center">
                        <el-checkbox v-model="checked1" size="large" />
                        <p class="ml-[16px]">Save this information for faster check-out next time</p>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-start sm:max-[854px]:items-center">
                    <div class="min-[854px]:block hidden">
                        <div class="grid grid-rows-2 gap-[32px] mb-[32px]">
                            <template v-for="product in flashSale">
                                <div>
                                    <div class="flex justify-between">
                                        <div class="flex items-center">
                                            <img width="50px" :src="product.image" alt="">
                                            <p class="ml-[24px]">{{ product.name }}</p>
                                        </div>
                                        <p>${{ product.originalPrice }}</p>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div class="flex flex-col w-full max-sm:mt-[24px] p-[24px border-black mb-[32px]">
                            <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                                <p>Shipping:</p>
                                <p>$Free</p>
                            </div>
                            <div class="flex justify-between h-[50px] items-center">
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>
                        </div>
                        <div>
                            <el-radio-group class="w-full" v-model="radio">
                                <div class="w-full flex flex-col">
                                    <div class="mb-[32px] w-full flex justify-between">
                                        <el-radio :value="3">Bank</el-radio>
                                        <img src="/src/assets/svg/bank-icon.svg" alt="">
                                    </div>
                                    <el-radio class="mb-[32px]" :value="6">Cash on delivery</el-radio>   
                                </div>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="min-[854px]:flex hidden max-[1089px]:flex-col min-[1089px]:flex-row mb-[32px] w-full">
                        <div class="border-2 border-black rounded-[4px] max-[1089px]:w-full">
                            <input class="mx-[24px] my-[16px]" type="text" placeholder="Coupon Code">
                        </div>
                        <div class="flex justify-center items-center rounded-[4px] min-[1089px]:ml-[16px] max-[1089px]:mt-[16px] bg-[#db4444] cursor-pointer">
                            <p class="text-[16px] text-white mx-[48px] my-[16px]">Apply Coupon</p>
                        </div>
                    </div>
                    <div class="w-full flex justify-start sm:max-[854px]:w-[470px]">
                        <RouterLink class="max-[1089px]:w-full flex justify-center items-center rounded-[4px] bg-[#db4444] cursor-pointer" to="/?order=true">
                            <p class="text-[16px] text-white mx-[48px] my-[16px]">Place Order</p>
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
    left: 9px;
}

::v-deep(.el-checkbox__input.is-checked .el-checkbox__inner){
    background-color: #DB4444 ;
    border-color: #DB4444;
}

::v-deep(.el-radio__inner){
    width: 24px;
    height: 24px;
}

::v-deep(.el-radio__inner::before){
    background-color: white;
}

::v-deep(.el-radio__inner::after){
    width: 14px;
    height: 14px;
    background-color: black;
}

::v-deep(.el-radio__input.is-checked .el-radio__inner){
    background-color: white;
    border-color: #dcdfe6;
}

::v-deep(.el-radio__input.is-checked+.el-radio__label){
    color: #606266
}

::v-deep(.el-radio__label){
    padding-left: 16px;
    font-size: 16px;
}
</style>
