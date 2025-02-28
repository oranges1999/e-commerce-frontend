<template>
    <AdminLayout :data="linkSelected" :params="queryParams">
        <div class="flex justify-between items-center">
            <p>Home > Users List</p>
            <el-select
            v-model="value"
            placeholder="Select"
            size="large"
            style="width: 240px"
            @change="handleChange($event)"
            >
            <el-option
                :label="'All'"
                :value="0"
                selected
            />
            <el-option
                :label="'Admin'"
                :value="1"
            />
            <el-option
                :label="'User'"
                :value="2"
            />  
            </el-select>
        </div>
        <div class="py-[24px] px-[16px] bg-white mt-[24px] rounded-[16px]">
            <div class="flex justify-between">
                <p v-if="value == 0" class="font-bold text-[20px]">All Users</p>
                <p v-else-if="value == 1" class="font-bold text-[20px]">Admin</p>
                <p v-else class="font-bold text-[20px]">Users</p>
            </div>
            <div class="h-[1px] w-full bg-[#232321] mt-[20px]"></div>
            <el-table :data="users" style="width: 100%">
                <el-table-column type="index" width="50" label="No."/>
                <el-table-column label="Customer Name">
                    <template #default="scope">
                        <div class="flex items-center">
                            <img :src="scope.row.customer_avatar" alt="">
                            <p>{{ scope.row.customer_name }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="date" label="Created at" />
                <el-table-column label="Role">
                    <template #default="scope">
                        {{ label(scope.row.role) }}
                    </template>
                </el-table-column>
                <el-table-column fixed="right">
                    <template #default="scope">
                        <RouterLink
                        to="/admin/users/show"
                        >
                        Show
                        </RouterLink>
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

const route = useRoute();
const queryParams = route.query;
const value = ref(0)

const users = ref([])
const allUsers = ref([])
const userRole = ref([])
const adminRole = ref([])

const label = (status) => {
    switch (status) {
        case 1: return 'Admin'
        case 2: return 'User'
    }
}

const renderOrder = () => {
    for (let i = 0; i < 12; i++) {
        allUsers.value.push({
            date: randomDate(new Date(2025, 0, 1), new Date()).toDateString(),
            customer_name:'Kevin',
            customer_avatar:'/src/assets/images/avatar/Ellipse1.png',
            role:Math.floor(Math.random() * 2) + 1,
        })
    }
    userRole.value = allUsers.value.filter((user) => user.role == 2)
    adminRole.value = allUsers.value.filter((user) => user.role == 1)
}
renderOrder()

const handleChange = (data) => {
    switch (data) {
        case 2: return users.value = userRole.value
        case 1: return users.value = adminRole.value
        // case 0: return users.value = cancelOrders.value
        default: return users.value = allUsers.value
    }
}
handleChange()

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
</script>

<style scoped>

</style>