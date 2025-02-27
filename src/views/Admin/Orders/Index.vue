<template>
    <AdminLayout :data="linkSelected" :params="queryParams">
        <div class="flex justify-between items-center">
            <p>Home > Order List</p>
            <el-select
            v-model="value"
            placeholder="Select"
            size="large"
            style="width: 240px"
            @change="handleChange($event)"
            >
            <el-option
                :label="'All'"
                :value="99"
            />
            <el-option
                :label="'Pending'"
                :value="2"
            />
            <el-option
                :label="'Delivering'"
                :value="3"
            />
            <el-option
                :label="'Delivered'"
                :value="1"
            />
            <el-option
                :label="'Cancel'"
                :value="0"
            />
            </el-select>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <p class="font-bold text-[20px]">All Orders</p>
                <img src="/src/assets/svg/setting.svg" alt="">
            </div>
            <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
            <el-table :data="orders" style="width: 100%">
                <el-table-column property="id" label="Order ID"/>
                <el-table-column property="date" label="Date" />
                <el-table-column label="Customer Name">
                    <template #default="scope">
                        <div class="flex items-center">
                            <img :src="scope.row.customer_avatar" alt="">
                            <p>{{ scope.row.customer_name }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Status">
                    <template #default="scope">
                        <div class="flex items-center">
                            <div v-if="scope.row.status == 0" class="w-[8px] h-[8px] rounded-[50%] bg-[#FFA52F]"></div>
                            <div v-else class="w-[8px] h-[8px] rounded-[50%] bg-[#003F62] "></div>
                            <p class="ml-[8px]">{{ label(scope.row.status) }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Total">
                    <template #default="scope">
                        <p>đ{{ scope.row.price }}</p>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="">
                    <template #default>
                       <RouterLink to="/admin/orders/show">Show</RouterLink>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const linkSelected = {
    id: 2,
}

const route = useRoute();
const queryParams = route.query;
const value = ref()

const orders = ref([])
const allOrders = ref([])
const pendingOrders = ref([])
const deliveringOrders = ref([])
const deliveredOrders = ref([])
const cancelOrders = ref([])

const label = (status) => {
    switch (status) {
        case 0: return 'Canceled'
        case 1: return 'Delivered'
        case 2: return 'Pending'
        case 3: return 'Delivering'
    }
}

const renderOrder = () => {
    for (let i = 0; i < 6; i++) {
        allOrders.value.push({
            product:'Lorem Ipsum',
            id:'#' + Math.floor(Math.random() * 99999),
            date: randomDate(new Date(2025, 0, 1), new Date()).toDateString(),
            customer_name:'Kevin',
            customer_avatar:'/src/assets/images/avatar/Ellipse1.png',
            status:Math.floor(Math.random() * 4),
            amount:'đ200',
            stock:Math.floor(Math.random() * 2000) + 1,
            price:Math.floor(Math.random() * 1000) + 1,
        })
    }
    deliveringOrders.value = allOrders.value.filter((order) => order.status == 3)
    pendingOrders.value = allOrders.value.filter((order) => order.status == 2)
    deliveredOrders.value = allOrders.value.filter((order) => order.status == 1)
    cancelOrders.value = allOrders.value.filter((order) => order.status == 0)
}
renderOrder()

const handleChange = (data) => {
    switch (data) {
        case 3: return orders.value = deliveringOrders.value
        case 2: return orders.value = pendingOrders.value
        case 1: return orders.value = deliveredOrders.value
        case 0: return orders.value = cancelOrders.value
        default: return orders.value = allOrders.value
    }
}
handleChange()

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
</script>

<style scoped>

</style>