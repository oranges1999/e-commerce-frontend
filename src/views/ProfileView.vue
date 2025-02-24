<template>
    <UserLayout>
        <div class="flex justify-between my-[80px]">
            <div class="flex">
                <RouterLink to="/" class="text-[14px] opacity-[50%]">Home</RouterLink>
                <p class="text-[14px] mx-[10px]">/</p>
                <p class="text-[14px]">My Account</p>
            </div>
            <p>Welcome! <span class="text-[#DB4444]">{{ form.first_name + ' ' + form.last_name }}</span></p>
        </div>
        <div class="grid grid-cols-3 mb-[80px]">
            <div>
                <p class="text-[16px] font-medium">Manage My Account</p>
                <div class="ml-[35px] my-[16px] flex flex-col">
                    <RouterLink class="text-[16px] mb-[8px] text-[#DB4444]">My Profile</RouterLink>
                    <RouterLink class="text-[16px] mb-[8px]">Address Book</RouterLink>
                    <RouterLink class="text-[16px] mb-[8px]">My Payment Options</RouterLink>
                </div>
                <p class="text-[16px] font-medium">My Orders</p>
                <div class="ml-[35px] my-[16px] flex flex-col">
                    <RouterLink class="text-[16px] mb-[8px]">My Returns</RouterLink>
                    <RouterLink class="text-[16px] mb-[8px]">My Cancellations</RouterLink>
                </div>
                <p class="text-[16px] font-medium">My WishList</p>
            </div>
            <div class="col-span-2 px-[80px] py-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[4px]">
                <p class="text-[20px] font-medium text-[#DB4444] mb-[16px]">Edit Your Profile</p>
                <div class="">
                    <div class="w-full flex justify-between mb-[24px]">
                        <div>
                            <p class="text-[16px]">First Name</p>
                            <el-input class="h-[50px] !w-[330px]" v-model="form.first_name"></el-input>
                        </div>
                        <div>
                            <p class="text-[16px]">Last Name</p>
                            <el-input class="h-[50px] !w-[330px]" v-model="form.last_name"></el-input>
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-[24px]">
                        <div>
                            <p class="text-[16px]">Email</p>
                            <el-input class="h-[50px] !w-[330px]" v-model="form.email"></el-input>
                        </div>
                        <div>
                            <p class="text-[16px]">Address</p>
                            <el-input class="h-[50px] !w-[330px]" v-model="form.address"></el-input>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="mb-[8px] text-[16px]">Password Changes</p>
                        <el-input class="mb-[16px] h-[50px]" v-model="form.old_pass" placeholder="Current Password"></el-input>
                        <el-input class="h-[50px] mb-[16px]" v-model="form.new_pass" placeholder="New Password"></el-input>
                        <el-input class="h-[50px] mb-[16px]" v-model="form.confirm_pass" placeholder="Confirm New Password"></el-input>
                    </div>
                </div>
                <div class="flex justify-end items-center mt-[8px]">
                    <RouterLink to="/" class="text-[16px] mr-[16px]">Cancel</RouterLink>
                    <button>
                        <div class="w-[234px] h-[56px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
                            <p class="text-[16px] text-white font-medium">Save Changes</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref } from 'vue';

const form = ref({
    first_name: 'Huy',
    last_name: 'Nguyen',
    email: 'nhuhuy1999@gmail.com',
    address: 'abc xyz',
    old_pass:'',
    new_pass:'',
    confirm_pass:'',
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTop()
</script>

<style scoped>
::v-deep(.el-input__wrapper , .el-input__wrapper:focus){
    box-shadow: none !important;
    background-color: #F5F5F5;
    border-radius: 4px;
}
</style>    