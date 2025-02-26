<template>
    <AdminLayout :link_selected="linkSelected">
        <div class="">
            <p class="font-bold text-[24px]">Product Details</p>
            <p>Home > All Products > Add New Product</p>
        </div>
        <div class="grid grid-cols-2 gap-[55px] p-[24px] bg-white mt-[24px] rounded-[16px]">
            <div id="form">
                <div class="child">
                    <p class="font-bold text-[20px]">Product Name</p>
                    <el-input v-model="input1" size="large" placeholder="Please input" />
                </div>
                <div class="child">
                    <p class="font-bold text-[20px]">Description</p>
                    <el-input v-model="textarea" :rows="10" type="textarea" placeholder="Please input" resize="none"/>
                </div>
                <div class="child">
                    <p class="font-bold text-[20px]">Category</p>
                    <el-input v-model="input2" size="large" placeholder="Please input" />
                </div>
                <div class="child">
                    <p class="font-bold text-[20px]">Brand Name</p>
                    <el-input v-model="input3" size="large" placeholder="Please input" />
                </div>
                <div class="child grid grid-cols-2 gap-[24px]">
                    <div>
                        <p class="font-bold text-[20px]">SKU</p>
                        <el-input v-model="input4" size="large" placeholder="Please input" />
                    </div>
                    <div>
                        <p class="font-bold text-[20px]">Stock Quantity</p>
                        <el-input v-model="input5" size="large" placeholder="Please input" />
                    </div>
                </div>
                <div class="child grid grid-cols-2 gap-[24px]">
                    <div>
                        <p class="font-bold text-[20px]">Regular Price</p>
                        <el-input v-model="input6" size="large" placeholder="Please input" />
                    </div>
                    <div>
                        <p class="font-bold text-[20px]">Sale Price</p>
                        <el-input v-model="input7" size="large" placeholder="Please input" />
                    </div>
                </div>
                <div class="child">
                    <p class="font-bold text-[20px]">Tag</p>
                    <el-select
                    v-model="value1"
                    multiple
                    placeholder="Select"
                    style=""
                    >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                </div>
            </div>
            <div>
                <div class="mb-[24px]">
                    <p class="font-bold text-[20px]">Product Avatar</p>
                    <div
                    v-if="profileImageUrl"
                    class="relative"
                    >
                        <img 
                        :src="profileImageUrl" 
                        class="w-full aspect-square"
                        alt="product-avatar"
                        >
                        <img class="absolute top-0 right-0 cursor-pointer" src="/src/assets/svg/close.svg" alt="" @click="removeImage">
                    </div>
                    <div v-else class="rounded-[8px] flex justify-center items-center w-full aspect-square bg-black opacity-[20%] cursor-pointer" @click="triggerFileUpload">
                        <img class="w-[100px]" src="/src/assets/svg/add-button.svg" alt="">
                    </div>
                    <input 
                    type="file" 
                    class="file-upload" 
                    ref="fileUploadRef"
                    @change="onFileChange($event)" 
                    style="display: none;"
                    >
                </div>
                <div>
                    <p class="font-bold text-[20px]">Product Gallery</p>
                    <div 
                        class="drop-zone"
                        @dragover.prevent
                        @dragenter.prevent="dragActive = true"
                        @dragleave="dragActive = false"
                        @drop.prevent="handleDrop"
                        :class="{ 'active-drop-zone': dragActive }"
                    >
                        <div class="border-2 border-dashed rounded-[8px] flex flex-col justify-center items-center">
                            <img src="/src/assets/svg/image.svg" alt="">
                            <div>
                                <p class="text-[#70706e] font-bold text-center">Drop your imager here, or browse</p>
                                <p class="text-[#70706e] font-bold text-center">Jpeg, png are allowed</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="imageUrls.length > 0">
                        <template v-for="url in imageUrls">
                            <img :src="url" alt="">
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
import {onBeforeUnmount, onMounted, ref} from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const linkSelected = {
    id: 1,
}
const imageUrl = ref('')
const {
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    textarea,
    } = ref()
const value1 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const profileImageUrl = ref('');
const fileUploadRef = ref(null);

const onFileChange = (event) => {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImageUrl.value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

const triggerFileUpload = () => {
  fileUploadRef.value.click();
};

const removeImage = () => {
    profileImageUrl.value = null
}

const dragActive = ref(false);
const imageUrls = ref([]);

const handleDrop = (event) => {
  dragActive.value = false;
  const droppedFiles = Array.from(event.dataTransfer.files);
  if (droppedFiles) {
    createImageUrls(droppedFiles);
  }
};

const createImageUrls = (files) => {
  const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
  imageFiles.forEach(file => {
    const url = URL.createObjectURL(file);
    imageUrls.value.push(url);
  });
};

onBeforeUnmount(() => {
  imageUrls.value.forEach(url => URL.revokeObjectURL(url));
});
</script>

<style scoped>
#form .child{
    margin: 24px 0 ;
}

#form .child:last-child{
    margin-bottom: 0px;
}

#form .child:first-child{
    margin-top: 0px;
}
</style>