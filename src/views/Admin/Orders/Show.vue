<template>
    <AdminLayout :data="linkSelected" :params="queryParams">
        
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';
const linkSelected = {
    id: 2,
}
</script>

<style scoped>

</style>