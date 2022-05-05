<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import SignUpForm from '@/components/molecules/form/SignUpForm.vue';
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <template #title>회원가입</template>
      <template #description><br /></template>
      <SignUpForm />
    </LoginBox>
  </DefaultLayout>
</template>
