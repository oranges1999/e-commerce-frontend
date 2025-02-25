<template>
    <UserLayout>
      <div class="flex justify-between my-[80px]">
          <div class="flex mb-[32px]">
              <p class="text-[14px] opacity-[50%]">Home</p>
              <p class="text-[14px] mx-[10px]">/</p>
              <p class="text-[14px]">Contact</p>
          </div>    
      </div>
      <div class="grid grid-cols-1 sm:max-xl:grid-cols-3 xl:grid-cols-4 gap-[30px] mb-[80px]">
        <div class="max-sm:flex sm:max-xl:col-span-2 xl:col-span-3 px-[30px] py-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[4px] hidden flex-col">
          <div class="grid grid-cols-3 gap-[16px] mb-[32px]">
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.first_name" placeholder="Your Name *"></el-input>
            </div>
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.mail" placeholder="Your Email *"></el-input>
            </div>
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.phone" placeholder="Your Phone *"></el-input>
            </div>
          </div>
          <div class="h-full">
            <el-input
              v-model="textarea"
              class="w-full"
              :rows="8"
              type="textarea"
              placeholder="Your Massage"
              resize="none"
            />
          </div>
          <div class="flex justify-end mt-[32px]">
            <button class="">
              <div class="py-[16px] px-[48px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
                <p class="text-[16px] text-white font-medium">Send Massage</p>
              </div>
            </button>
          </div>
        </div>
        <div class="px-[35px] py-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[4px]">
          <div>
            <div class="flex items-center mb-[24px]">
              <img src="/src/assets/svg/phone-red.svg" alt="">
              <p class="ml-[16px] font-medium">Call To Us</p>
            </div>
            <p class="mb-[16px] text-[14px]">We are available 24/7, 7 days a week.</p>
            <p class="text-[14px]">Phone: +8801611112222</p>
          </div>
          <div class="w-full h-[1px] bg-[#D9D9D9] my-[16px]"></div>
          <div>
            <div class="flex items-center mb-[24px]">
              <img src="/src/assets/svg/email-red.svg" alt="">
              <p class="ml-[16px] font-medium">Write To US</p>
            </div>
            <p class="mb-[16px] text-[14px]">Fill out our form and we will contact you within 24 hours.</p>
            <p class="mb-[16px] text-[14px]">Emails: customer@exclusive.com</p>
            <p class="text-[14px]">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div class="max-sm:hidden sm:max-xl:col-span-2 xl:col-span-3 px-[30px] py-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[4px] flex flex-col">
          <div class="grid grid-cols-3 gap-[16px] mb-[32px]">
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.first_name" placeholder="Your Name *"></el-input>
            </div>
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.mail" placeholder="Your Email *"></el-input>
            </div>
            <div>
              <el-input class="h-[50px] rounded-[4px]" v-model="form.phone" placeholder="Your Phone *"></el-input>
            </div>
          </div>
          <div class="h-full">
            <el-input
              v-model="textarea"
              class="w-full"
              :rows="8"
              type="textarea"
              placeholder="Your Massage"
              resize="none"
            />
          </div>
          <div class="flex justify-end mt-[32px]">
            <button class="">
              <div class="py-[16px] px-[48px] flex justify-center items-center bg-[#DB4444] rounded-[4px] cursor-pointer"> 
                <p class="text-[16px] text-white font-medium">Send Massage</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </UserLayout>
  </template>
  
  <script setup>
  import UserLayout from '@/assets/layouts/UserLayout.vue';
  import { ref } from 'vue'
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  scrollToTop()

  const form = ref({})
  </script>
  
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  ::v-deep(.el-carousel__mask){
    opacity: 0.75;
  }

  ::v-deep(.el-input__wrapper , .el-input__wrapper:focus){
    box-shadow: none !important;
    background-color: #F5F5F5;
    border-radius: 4px;
  }

  ::v-deep(.el-textarea__inner){
    box-shadow: none !important;
    background-color: #F5F5F5;
    border-radius: 4px;
  }
  </style>