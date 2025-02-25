<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted } from 'vue'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTop()

const input1 = ref()
const input2 = ref()
const input3 = ref()
</script>

<template>
    <UserLayout>
        <div class="flex my-[60px]">
            <div class="max-lg:hidden block w-[50%] ">
                <img src="/src/assets/svg/background.svg" alt="">
            </div>
            <div class="w-[50%] max-lg:w-full flex justify-center items-center">
                <div>
                    <div class="mb-[48px]">
                        <p class="text-[36px] font-medium">Create an account</p>
                        <p class="text-[16px]">Enter your details below</p>
                    </div>
                    <div class="h-[176px] flex flex-col justify-between mb-[40px]">
                        <el-input class="border-b-2 border-[#d3d3d3]" v-model="input1" style="width: 370px; height: 32px;" placeholder="Name" />
                        <el-input class="border-b-2 border-[#d3d3d3]" v-model="input2" style="width: 370px; height: 32px;" placeholder="Email or Phone Number" />
                        <el-input class="border-b-2 border-[#d3d3d3]" v-model="input3" style="width: 370px; height: 32px;" placeholder="Password" show-password/>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="bg-[#DB4444] w-full py-[16px] rounded-[4px] mb-[16px]">
                            <p class="text-center font-medium text-white">Create Account</p>
                        </div>
                        <div class="flex justify-center bg-white border-2 border-[#d3d3d3] w-full py-[16px] rounded-[4px] mb-[32px]">
                            <img class="mr-[16px]" src="/src/assets/svg/google.svg" alt="">
                            <p class="text-center">Sign up with Google</p>
                        </div>
                        <div>
                            Already have account? <RouterLink class="underline underline-offset-3 ml-[5px]" to="/login">Login</RouterLink>
                        </div>
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
</style>
