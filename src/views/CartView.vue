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
</script>

<template>
    <UserLayout>
        <div class="mb-[40px]">
            <div class="flex my-[60px]">
                <p class="text-[14px] opacity-[50%]">Home</p>
                <p class="mx-[10px]">/</p>
                <p class="text-[14px]">Cart</p>
            </div>
            <div class="w-full">
                <div class="w-full flex justify-center">
                    <table class="custom-width">
                        <thead style="height: 50px;">
                            <th class="text-start w-[345px] font-medium">Product</th>
                            <th class="text-start w-[323px] font-medium">Price</th>
                            <th class="text-start w-[353px] font-medium">Quantity</th>
                            <th class="text-start font-medium">Subtotal</th>
                        </thead>
                        <tbody>
                            <tr style="height: 150px;" class="" v-for="product in flashSale">
                                <td class="">
                                    <div class="flex flex-col sm:flex-row max-sm:justify-center sm:items-center">
                                        <img :src="product.image" alt="" class="w-[50px]">
                                        <p class="sm:ml-[20px]">{{ product.name }}</p>
                                    </div>
                                </td>
                                <td>${{ product.originalPrice }}</td>
                                <td>
                                    <el-input-number
                                        class="border-2 border-[#d3d3d3] rounded-[4px] !w-[100px]"
                                        v-model="product.qty"
                                        :min="1"
                                        :max="10"
                                        controls-position="right"
                                        size="large"
                                        @change="handleChange"
                                    />
                                </td>
                                <td>${{ product.originalPrice * product.qty }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex justify-between">
                <RouterLink to="/" class="border-2 border-[#d3d3d3] rounded-[4px] py-[10px] px-[20px] sm:py-[16px] sm:px-[48px] cursor-pointer">
                    <p>Return To Shop</p>
                </RouterLink>
                <div class="border-2 border-[#d3d3d3] rounded-[4px] py-[10px] px-[20px] sm:py-[16px] sm:px-[48px] cursor-pointer">
                    <p>Update Cart</p>
                </div>
            </div>
            <div class="sm:flex justify-around lg:justify-between mt-[80px]">
                <div class="lg:flex">
                    <div>
                        <div class="border-2 border-black rounded-[4px]">
                            <input class="mx-[24px] my-[16px]" type="text" placeholder="Coupon Code">
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center items-center rounded-[4px] lg:ml-[16px] max-lg:mt-[16px] bg-[#db4444] cursor-pointer">
                            <p class="text-[16px] text-white mx-[48px] my-[16px]">Apply Coupon</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full sm:w-[470px] max-sm:mt-[24px] p-[24px] border-2 border-black">
                    <p>Cart Total</p>
                    <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                        <p>Subtotal</p>
                        <p>$1750</p>
                    </div>
                    <div class="flex justify-between h-[50px] items-center border-b-2 border-[#d3d3d3]">
                        <p>Subtotal</p>
                        <p>$Free</p>
                    </div>
                    <div class="flex justify-between h-[50px] items-center">
                        <p>Subtotal</p>
                        <p>$1750</p>
                    </div>
                    <div class=" flex justify-center items-center">
                        <RouterLink to="/checkout" class="text-[16px] text-white px-[48px] py-[16px] bg-[#db4444] rounded-[4px] cursor-pointer">Procees to checkout</RouterLink>
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
.custom-width{
    width: calc(100% - 80px)
}
</style>
