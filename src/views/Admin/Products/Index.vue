<template>
    <AdminLayout :link_selected="linkSelected">
        <div class="flex justify-between items-center">
            <p>Home > All Products</p>
            <RouterLink to="/admin/all-products/create" class=" flex px-[26px] py-[16px] bg-[#232321] rounded-[8px]">
                <img src="/src/assets/svg/add-button.svg" alt="">
                <p class="ml-[8px] text-white">ADD NEW PRODUCT</p>
            </RouterLink>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <p class="font-bold text-[20px]">All Products</p>
                <img src="/src/assets/svg/setting.svg" alt="">
            </div>
            <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
            <el-table :data="orders" style="width: 100%">
                <el-table-column property="product" label="Product"/>
                <el-table-column property="date" label="Date" />
                <el-table-column property="stock" label="Stock" />
                <el-table-column label="Status">
                    <template #default="scope">
                        <div class="flex items-center">
                            <div v-if="scope.row.status == 1" class="w-[8px] h-[8px] rounded-[50%] bg-[green]"></div>
                            <div v-else class="w-[8px] h-[8px] rounded-[50%] bg-[red]"></div>
                            <p class="ml-[8px]">{{ scope.row.status == 0?'Hidden':'Active' }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Price">
                    <template #default="scope">
                        <p>đ{{ scope.row.price }}</p>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import {ref} from 'vue'

const linkSelected = {
    id: 1,
}

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
            amount:'đ200',
            stock:Math.floor(Math.random() * 2000) + 1,
            price:Math.floor(Math.random() * 1000) + 1,
        })
    }
}
renderOrder()
</script>

<style scoped>

</style>