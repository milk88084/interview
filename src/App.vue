<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="q-pa-md">
        <UserForm />
        <UserTable />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import UserForm from './components/UserForm.vue';
import UserTable from './components/UserTable.vue';
</script>
