<template>
  <div>
    <q-input v-model="name" label="姓名" />
    <q-input v-model="age" label="年齡" type="number" />
    <q-btn @click="handleSubmit">{{ isEditing ? '更新' : '新增' }}</q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../axiosConfig.js';

const name = ref('');
const age = ref('');
const isEditing = ref(false);
const editingId = ref(null);

const handleSubmit = async () => {
  if (name.value && age.value) {
    const payload = {
      name: name.value,
      age: age.value,
    };

    try {
      if (isEditing.value) {
        await axios.patch(`/${editingId.value}`, payload);
      } else {
        await axios.post('/', payload);
      }
    } catch (error) {
      console.error(error);
    }

    // Reset form
    name.value = '';
    age.value = '';
    isEditing.value = false;
    editingId.value = null;
  }
};
</script>
