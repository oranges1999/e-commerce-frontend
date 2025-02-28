<template>
    <AdminLayout :data="linkSelected" :params="queryParams">
        <div class="">
            <p class="text-[24px] font-bold">Users Details</p>
            <p>Home > Users List > User</p>
        </div>
        <div class="mt-[24px] grid grid-cols-3 gap-[16px]">
            <div class="p-[16px] bg-white rounded-[16px]">
                <img class="rounded-[8px]" :src="user.avatar" alt="fill">
            </div>
            <div class="col-span-2 p-[16px] bg-white rounded-[16px]"  >
                <p class="text-[20px] font-medium">Information</p>
                <div class="h-[1px] w-full bg-[#232321] my-[20px]"></div>
                <div class="grid grid-cols-2">
                    <div><p><span class="font-bold">Name:</span> {{ user.name }}</p></div> 
                    <div><p><span class="font-bold">Gender:</span> {{ user.gender }}</p></div> 
                </div>
                <div class="grid grid-cols-2">
                    <div><p><span class="font-bold">Phone number:</span> {{ user.phone }}</p></div> 
                    <div><p><span class="font-bold">Email:</span> {{ user.email }}</p></div> 
                </div>
                <div><p><span class="font-bold">Ward:</span> {{ user.ward }}</p></div> 
                <div><p><span class="font-bold">District:</span> {{ user.district }}</p></div> 
                <div><p><span class="font-bold">City:</span> {{ user.city }}</p></div> 
                <div><p><span class="font-bold">Nation:</span> {{ user.nation }}</p></div> 
                <div><p><span class="font-bold">Address:</span> {{ user.address }}</p></div>
            </div>
        </div>
        <div class="mt-[24px] grid grid-cols-4 gap-[16px]">
            <template v-for="tab in vitals">
                <div class="px-[16px] py-[24px] rounded-[16px] bg-white">
                    <div class="mb-[8px] flex justify-between">
                        <p class="text-[14px]">{{ tab.title }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center bg-[#003F62]">
                                <img class="w-[20px]" :src="tab.icon" alt="">
                            </div>
                            <p class="ml-[16px] text-[16px] font-bold">đ126.500</p>
                        </div>
                        <div class="flex items-center">
                            <img src="/src/assets/svg/arrow-up.svg" alt="">
                            <p class="text-[14px]">34.7%</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-end text-[12px]">Compared to Oct 2023</p>
                    </div>
                </div>
            </template>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <p class="font-bold text-[20px]">All Orders</p>
                <img src="/src/assets/svg/setting.svg" alt="">
            </div>
            <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
            <el-table :data="allOrders" style="width: 100%">
                <el-table-column property="id" label="Order ID"/>
                <el-table-column property="date" label="Date" />
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
    id: 3,
}

const vitals = [
    {
        title: 'Total Orders',
        icon:'/src/assets/svg/shopping-basket.svg'
    },
    {
        title: 'Cancel Orders',
        icon: '/src/assets/svg/cancel-order.svg'
    },
    {
        title: 'Completed Orders',
        icon: '/src/assets/svg/complete-orders.svg'
    },
    {
        title: 'Total Spent',
        icon: '/src/assets/svg/total-spent.svg'
    },
    
]

const route = useRoute();
const queryParams = route.query;
const user = ref({
    avatar:'/src/assets/images/avatar/photo-1554629947-334ff61d85dc.avif',
    name:'Kevin',
    phone:'0123456789',
    email:'huynn@rabiloo.com',
    gender:'Male',
    address:'264 đường Trường Chinh, phường Khương Thượng, quận Đống Đa, thành phố Hà Nội, Việt Nam',
    ward:'Khương Thượng',
    district:'Đống Đa',
    city:'Hà Nội',
    nation:'Việt Nam'
})

const label = (status) => {
    switch (status) {
        case 0: return 'Canceled'
        case 1: return 'Delivered'
        case 2: return 'Pending'
        case 3: return 'Delivering'
    }
}

const allOrders = ref([])
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
}
renderOrder()
console.log(allOrders)


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
</script>

<style scoped>

</style>