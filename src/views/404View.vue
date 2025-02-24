<template>
    <UserLayout>
        <div class="flex justify-between my-[80px]">
            <div class="flex mb-[32px]">
                <RouterLink to="/" class="text-[14px] opacity-[50%]">Home</RouterLink>
                <p class="text-[14px] mx-[10px]">/</p>
                <p class="text-[14px]">404 Error</p>
            </div>    
        </div>
        <div class="flex flex-col items-center mb-[80px]">
            <p class="text-[110px] font-medium">404 Not Found</p>
            <p class="text-[16px]">Your visited page not found. You may go home page.</p>
            <RouterLink class="mt-[96px]" to="/">
              <div class="py-[16px] px-[48px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
                <p class="text-[16px] text-white font-medium">Back to home page</p>
              </div>
            </RouterLink>
        </div>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/assets/layouts/UserLayout.vue';
// import { ref } from 'vue'
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTop()
</script>

<style scoped>

</style>