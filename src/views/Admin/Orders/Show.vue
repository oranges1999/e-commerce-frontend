<template>
    <AdminLayout :data="linkSelected" :params="queryParams">
        <div class="flex justify-between items-center">
            <p class="text-[24px] font-bold">Orders Details</p>
            <p>Home > Order List > Order Details</p>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <div class="flex justify-start items-center">
                    <p class="font-bold text-[20px]">Orders ID: #6743</p>
                    <p v-if="!isAccepted" class="ml-[24px] p-[8px] bg-[#FFA52F] rounded-[8px]">Pending</p>
                    <p v-else class="ml-[24px] p-[8px] bg-[#003F62] rounded-[8px] text-white">Delivering</p>
                </div>
                <div class="flex">
                    <el-select
                    v-model="value"
                    placeholder="Select"
                    style="width: 240px; height: 100% !important;"
                    >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                    <div class="ml-[20px] cursor-pointer p-[16.5px] bg-[#F4F2F2] rounded-[8px] text-[14px] font-bold">
                        <p>Save</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-[16px] mt-[24px]">
                <div class="py-[16px] px-[22px] flex justify-start items-start border-2 border-[#E7E7E3] rounded-[16px]">
                    <div class="p-[16px] mr-[16px] bg-black rounded-[8px]">
                        <img src="/src/assets/svg/profile-black.svg" alt="">
                    </div>
                    <div>
                        <p class="font-bold text-[18px]">Customer</p>
                        <p class="font-bold text-[14px] text-[#70706E]">Full Name: Huy</p>
                        <p class="font-bold text-[14px] text-[#70706E]">Email: huy@gmail.com</p>
                        <p class="font-bold text-[14px] text-[#70706E]">Phone: 0123456789</p>
                    </div>
                </div>
                <div class="py-[16px] px-[22px] flex justify-start items-start border-2 border-[#E7E7E3] rounded-[16px]">
                    <div class="p-[16px] mr-[16px] bg-black rounded-[8px]">
                        <img src="/src/assets/svg/shopping-basket.svg" alt="">
                    </div>
                    <div>
                        <p class="font-bold text-[18px]">Order Info</p>
                        <p v-if="!isAccepted" class="font-bold text-[14px] text-[#70706E]">Shipper: <span class="underline underline-offset-2 cursor-pointer" @click="toggleAccept">Accept Order</span></p>
                        <p v-else class="font-bold text-[14px] text-[#70706E] inline-flex items-center">Shipper: Admin <span class="ml-[10px]" @click="toggleAccept"><img class="h-[14px] cursor-pointer" src="/src/assets/svg/close.svg" alt=""></span></p>
                        <p class="font-bold text-[14px] text-[#70706E]">Payment Method: Bank</p>
                        <p class="font-bold text-[14px] text-[#70706E]">Status: {{ isAccepted ? 'Delivering' : 'Pending' }}</p>
                    </div>
                </div>
                <div class="py-[16px] px-[22px] flex justify-start items-start border-2 border-[#E7E7E3] rounded-[16px]">
                    <div class="p-[16px] mr-[16px] bg-black rounded-[8px]">
                        <img class="w-[24px]" src="/src/assets/svg/location-sign-svgrepo-com.svg" alt="">
                    </div>
                    <div>
                        <p class="font-bold text-[18px]">Deliver to</p>
                        <p class="font-bold text-[14px] text-[#70706E] text-wrap">Address: Hoang Mai, Ha Noi, Viet Nam</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <el-table :data="orders" style="width: 100%">
                <el-table-column align="left" property="product" label="Product"/>
                <el-table-column align="center" property="id" label="Order ID"/>
                <el-table-column align="center" property="stock" label="Quantity"/>
                <el-table-column align="center" label="Price">
                    <template #default="scope">
                        <p>đ{{ scope.row.price }}</p>
                    </template>
                </el-table-column>
                <el-table-column align="right" label="Total">
                    <template #default="scope">
                        <p>đ{{ scope.row.price * scope.row.stock }}</p>
                    </template>
                </el-table-column>
            </el-table>
            <div class="flex justify-end mt-[20px] mr-[12px]">
                <table>
                    <tbody>
                        <tr>
                            <td><p class="text-[16px]">Subtotal</p></td>
                            <td class="w-[50px]"></td>
                            <td><p class="text-[16px] text-end">đ{{ orderTotal }}</p></td>
                        </tr>
                        <tr>
                            <td><p class="text-[16px]">Discount</p></td>
                            <td></td>
                            <td><p class="text-[16px] text-end">đ0</p></td>
                        </tr>
                        <tr>
                            <td> <p class="text-[16px]">Shipping Rate</p></td>
                            <td></td>
                            <td><p class="text-[16px] text-end">đ0</p></td>
                        </tr>
                        <tr>
                            <td><p class="text-[24px]">Total</p></td>
                            <td></td>
                            <td><p class="text-[24px] text-end">đ{{orderTotal}}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import { ElNotification } from 'element-plus';
import {h, ref, watch} from 'vue'
import { useRoute } from 'vue-router';

const linkSelected = {
    id: 2,
}

const route = useRoute();
const queryParams = route.query;
const value = ref()
const isAccepted = ref(false)
const toggleAccept = () => {
    isAccepted.value = !isAccepted.value
}

watch(
    () => isAccepted.value,
    () => {
        let notificationContent = {
            duration: 2000,
            title:'',
            message:''
        }
        if(isAccepted.value == true){
            notificationContent.title = 'Order Accepted'
            notificationContent.message = h('i', { style: 'color: green' }, 'You have successfully accepted an order')
        } else {
            notificationContent.title = 'Order Rejected'
            notificationContent.message = h('i', { style: 'color: red' }, 'You have rejected an order')
        }
        ElNotification(notificationContent)
    }
)

const orders = ref([])
let orderTotal = ref(0)
const renderOrder = () => {
    for (let i = 0; i < 3; i++) {
        let stock = Math.floor(Math.random() * 10) + 1
        let price = Math.floor(Math.random() * 1000) + 1
        orderTotal.value += stock * price
        orders.value.push({
            product_image:'/src/assets/images/fryer/fryer3.jpeg',
            product:'Lorem Ipsum',
            id:'#6743',
            stock:stock,
            price:price,
        })
    }
}
renderOrder()
</script>

<style scoped>
::v-deep(.el-select__wrapper){
    height: 100%;
    background: #F4F2F2;
    border-radius: 8px !important;
}
</style>