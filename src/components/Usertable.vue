<template>
  <div>
    <UserForm />
    <q-table :rows="users" :columns="columns">
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn icon="edit" @click="startEdit(props.row)" />
          <q-btn icon="delete" @click="deleteUser(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '../axiosConfig.js';
import UserForm from './UserForm.vue';

const users = ref([]);

const columns = [
  {
    name: 'name',
    required: true,
    label: '姓名',
    align: 'left',
    field: (row) => row.name,
  },
  { name: 'age', label: '年齡', align: 'left', field: (row) => row.age },
  { name: 'action', label: '', align: 'center' },
];

const fetchUsers = async () => {
  try {
    const response = await axios.get('/a');
    users.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`/${id}`);
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
};

const startEdit = (user) => {
  UserForm.name.value = user.name;
  UserForm.age.value = user.age;
  UserForm.isEditing.value = true;
  UserForm.editingId.value = user.id;
};

onMounted(fetchUsers);
</script>
