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
                    <div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import {ref} from 'vue'
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

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

</script>

<style scoped>

</style>