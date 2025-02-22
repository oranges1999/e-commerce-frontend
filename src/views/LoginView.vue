<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
import { ref, onMounted } from 'vue'

const input2 = ref()
const input3 = ref()
</script>

<template>
    <UserLayout>
        <div class="flex my-[60px]">
            <div class="w-[50%]">
                <img src="/src/assets/svg/background.svg" alt="">
            </div>
            <div class="w-[50%] flex justify-center items-center">
                <div>
                    <div class="mb-[48px]">
                        <p class="text-[36px] font-medium">Log in to Exclusive</p>
                        <p class="text-[16px]">Enter your details below</p>
                    </div>
                    <div class="h-[104px] flex flex-col justify-between mb-[40px]">
                        <el-input class="border-b-2 border-[#d3d3d3]" v-model="input2" style="width: 370px; height: 32px;" placeholder="Email or Phone Number" />
                        <el-input class="border-b-2 border-[#d3d3d3]" v-model="input3" style="width: 370px; height: 32px;" placeholder="Password" show-password/>
                    </div>
                    <div class="flex items-center justify-between">
                        <RouterLink to="/?login=true" class="bg-[#DB4444] px-[48px] py-[16px] rounded-[4px]">
                            <p class="text-center font-medium text-white">Log In</p>
                        </RouterLink>
                        <div>
                            <p class="text-[#DB4444]">Forget Password?</p>
                        </div>
                    </div>
                    <div class="mt-[20px]">
                        <p class="text-center">
                            Don't have an account? <RouterLink class="underline underline-offset-3 ml-[5px]" to="/signup">Sign up</RouterLink>
                        </p>
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
