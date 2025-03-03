<template>
    <div class="mx-auto w-full max-w-[1280px]">
        <div class="common-layout">
            <el-container>
                <el-aside width="260px" class="h-screen border-r-2 border-[#232321]/20 border-op">
                    <div class="h-[96px] flex justify-center items-center">
                        <p class="text-[36px] font-bold">Exclusive</p>
                    </div>
                    <div>
                        <template v-for="link, index in asideLink" :key="index">
                            <RouterLink :to="link.link" class="flex items-center p-[18px] mx-[24px] my-[8px] rounded-[8px]" :class="{'bg-[#003F62] text-white': link.is_selected}">
                                <img class="w-[16px] h-[16px]" :src="link.is_selected?link.icon:link.icon_black" alt="">
                                <p class="ml-[8px] text-[14px]">{{ link.title }}</p>
                            </RouterLink>
                        </template>
                        <el-menu>
                            <el-sub-menu>
                                <template #title>
                                    <p class="text-[20px] font-bold">Categories</p>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item v-for="category in categories" index="index">
                                        <div class="w-full flex justify-between items-center">
                                            <p class="text-[16px] font-bold">{{ category.title }}</p>
                                            <div class="w-[41px] h-[35px] bg-[#E7E7E3] rounded-[4px] flex justify-center items-center" :class="{'bg-[#003F62]':category.category_selected}">
                                                <p class="text-[14px] font-bold" :class="{'text-white':category.category_selected}">{{ category.product_number }}</p>
                                            </div>
                                        </div>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-sub-menu>
                        </el-menu>
                    </div>
                </el-aside>
                <el-container>
                    <el-header height="96px" class="border-b-2 border-[#232321]/20">
                        <div class="flex justify-end mx-[40px] my-[28px]">
                            <div class="py-[11.5px] px-[16px] border-2 rounded-[14px]">
                                <p class="text-[14px] font-medium">ADMIN</p>
                            </div>
                        </div>
                    </el-header>
                    <el-main class="custom-h">
                        <slot></slot>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script setup>
import {h, ref} from 'vue'
import { ElNotification } from 'element-plus'

const props=defineProps(['data' , 'params'])

if(props.params?.product_created && props.params?.product_created == 'true'){
  ElNotification({
    duration:2000,
    title: 'Product have been created',
    message: h('i', { style: 'color: teal' }, 'You have successfully created a product'),
  })
}

if(props.params?.deleted && props.params?.deleted == 'true'){
  ElNotification({
    duration:2000,
    title: 'Product have been deleted',
    message: h('i', { style: 'color: teal' }, 'You have successfully deleted a product'),
  })
}

if(props.params?.updated && props.params?.updated == 'true'){
  ElNotification({
    duration:2000,
    title: 'Product have been updated',
    message: h('i', { style: 'color: teal' }, 'You have successfully updated a product'),
  })
}

const asideLink = ref([
    {
        title:'DASHBOARD',
        icon: '/src/assets/svg/dashboard.svg',
        icon_black: '/src/assets/svg/dashboard-black.svg',
        is_selected: false,
        link:'/admin/dashboard'
    },
    {
        title:'ALL PRODUCTS',
        icon: '/src/assets/svg/all-product.svg',
        icon_black: '/src/assets/svg/all-product-black.svg',
        is_selected: false,
        link:'/admin/all-products'
    },
    {
        title:'ORDER LIST',
        icon: '/src/assets/svg/order-list.svg',
        icon_black: '/src/assets/svg/order-list-black.svg',
        is_selected: false,
        link:'/admin/orders'
    },
    {
        title:'USER ACCOUNT',
        icon: '/src/assets/svg/profile-black.svg',
        icon_black: '/src/assets/svg/profile.svg',
        is_selected: false,
        link:'/admin/users'
    },
])

if(props.data && props.data.id != null){
    asideLink.value[props.data.id].is_selected = true
}

const categories = ref([
    {
        title:'Lorem Ipsum',
        product_number:22,
        is_selected:false
    },
    {
        title:'Lorem Ipsum',
        product_number:10,
        is_selected:false
    },
    {
        title:'Lorem Ipsum',
        product_number:7,
        is_selected:false
    },
    {
        title:'Lorem Ipsum',
        product_number:23,
        is_selected:false
    },
    {
        title:'Lorem Ipsum',
        product_number:18,
        is_selected:false
    },
    {
        title:'Lorem Ipsum',
        product_number:29,
        is_selected:false
    },
    
])

if(props.category_selected && props.category_selected.id != null){
    categories.value[props.category_selected.id].is_selected = true
}
</script>

<style scoped>
::v-deep(.el-menu){
    border-right: none;
}

::v-deep(.el-main){
    background-color: #e7e7e3;
}

.custom-h{
    height: calc(1dvh - 96px);
}
</style>