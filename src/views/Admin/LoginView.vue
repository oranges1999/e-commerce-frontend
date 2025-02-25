<template>
    <div class="w-screen h-screen flex mx-auto max-w-[1280px]">
        <div class="w-[50%]">
            <img class="h-full object-cover" src="/src/assets/images/MATTIEN.jpg" alt="">
        </div>
        <div class="w-[50%] flex justify-center items-center">
            <div class="w-full flex justify-center items-center">
                <div>
                    <div class="mb-[48px]">
                        <p class="text-[32px] font-bold">Log in</p>
                        <RouterLink class="text-[16px] font-bold underline underline-offset-2 text-[#70706E]" to="/">Forgot your password</RouterLink>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="border-2 border-black px-[16px] py-[14.5px] rounded-[14px] mb-[14px]">
                            <el-input v-model="input2" style="width: 370px; height: 32px;" placeholder="Email" /> 
                        </div>
                        <div class="border-2 border-black px-[16px] py-[14.5px] rounded-[14px] mb-[14px]">
                            <el-input v-model="input3" style="width: 370px; height: 32px;" placeholder="Password" show-password/>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <RouterLink to="/admin/dashboard?login=true" class="bg-[#70706E] px-[48px] py-[16px] rounded-[4px]">
                            <p class="text-center font-medium text-white">Log In</p>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
::v-deep(.el-input .el-input__wrapper){
    box-shadow: none;
    padding: 0;
}
</style>