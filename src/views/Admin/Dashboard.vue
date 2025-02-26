<template>
    <AdminLayout :link_selected="linkSelected">
        <p class="font-bold text-[24px]">Dashboard</p>
        <div class="flex justify-between items-center mb-[24px]">
            <p class="font-bold text-[16px]">Home > Dashboard</p>
            <div class="flex items-center">
                <img src="/src/assets/svg/calendar.svg" alt="">
                <p class="ml-[8px]">Oct 11,2023 - Nov 11,2022</p>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-[14px]">
            <template v-for="tab in vitals">
                <div class="px-[16px] py-[24px] rounded-[16px] bg-white">
                    <div class="mb-[8px] flex justify-between">
                        <p class="text-[14px]">{{ tab.title }}</p>
                        <img src="/src/assets/svg/setting.svg" alt="">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center bg-[#003F62]">
                                <img src="/src/assets/svg/shopping-basket.svg" alt="">
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
        <div class="grid grid-cols-3 gap-[14px] mt-[24px]">
            <div class="col-span-2 px-[24px] py-[19.5px] rounded-[16px] bg-white">
                <div>
                    <div class="flex justify-between items-center">
                        <p class="text-[20px] font-bold">Sale Graph</p>
                        <div>
                            <router-link to="/" class="px-[16px] py-[7.5px] rounded-[10px] border-2">WEEKLY</router-link>
                            <router-link to="/" class="px-[16px] py-[7.5px] rounded-[10px] border-2 mx-[15px]">MONTHLY</router-link>
                            <router-link to="/" class="px-[16px] py-[7.5px] rounded-[10px] border-2">YEARLY</router-link>
                        </div>
                    </div>
                    <div class="h-[1px] w-full bg-[#232321] mt-[16px] mb-[36px]"></div>
                    <div class="h-[254px]">
                        <Chart :data="data"/>
                    </div>
                </div>
            </div>
            <div class="px-[24px] py-[16px] rounded-[16px] bg-[white]">
                <div class="flex justify-between">
                    <p class="font-bold text-[20px]">Best Sellers</p>
                    <img src="/src/assets/svg/setting.svg" alt="">
                </div>
                <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
                <div id="best-sellers">
                    <template v-for="item in 4">
                        <div class="flex items-center justify-between my-[16px]">
                            <div class="flex items-center">
                                <img class="w-[64px] h-[64px] rounded-[8px]" src="/src/assets/images/fryer/fryer1.avif" alt="">
                                <div>
                                    <p class="text-[16px] font-bold">Lorem Ipsum</p>
                                    <p class="text-[14px] font-bold opacity-[60%]">đ126.500</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-[16px] font-bold">đ126.50</p>
                                <p class="text-[14px] font-bold opacity-[60%]">999 sales</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <p class="font-bold text-[20px]">Best Sellers</p>
                <img src="/src/assets/svg/setting.svg" alt="">
            </div>
            <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
            <el-table :data="orders" style="width: 100%">
                <el-table-column type="selection"/>
                <el-table-column property="product" label="Product"/>
                <el-table-column property="id" label="Order ID" />
                <el-table-column property="date" label="Date" />
                <el-table-column label="Customer  Name">
                    <template #default="scope">
                        <div class="flex items-center">
                            <img class="w-[24px] h-[24px]" :src="scope.row.customer_avatar" alt="">
                            <p class="ml-[8px]">{{ scope.row.customer_name }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Status">
                    <template #default="scope">
                        <div class="flex items-center">
                            <div v-if="scope.row.status == 1" class="w-[8px] h-[8px] rounded-[50%] bg-[#003F62]"></div>
                            <div v-else class="w-[8px] h-[8px] rounded-[50%] bg-[#FFA52F]"></div>
                            <p class="ml-[8px]">{{ scope.row.status == 0?'Canceled':'Delivered' }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="amount" label="Amount" />
            </el-table>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import Chart from '@/components/Chart.vue';
import {ref, onMounted} from 'vue'

const linkSelected = {
    id: 0,
}

const vitals = [
    {
        title: 'Total Orders'
    },
    {
        title: 'Active Orders'
    },
    {
        title: 'Completed Orders'
    },
    {
        title: 'Return Orders'
    },
    
]

const getRandomInt = () => {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}

const randomData = () => ({
  labels: [
    'January' + getRandomInt(),
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt()
      ]
    }
  ]
})

const data = ref(randomData())

onMounted(() => {
  setInterval(() => {
    data.value = randomData()
  }, 3000)
})
const orders = ref([])
const renderOrder = () => {
    for (let i = 0; i < 6; i++) {
        orders.value.push({
            product:'Lorem Ipsum',
            id:'#23456',
            date:'Nov 8th,2023',
            customer_name:'Kevin',
            customer_avatar:'/src/assets/images/avatar/Ellipse1.png',
            status:Math.floor(Math.random() * 2),
            amount:'đ200'
        })
    }
}
renderOrder()
</script>

<style scoped>
#best-sellers div:last-child{
    margin-bottom: 0px !important;
}
</style>