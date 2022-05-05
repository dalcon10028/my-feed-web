<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import EmailLoginForm from '@/components/molecules/form/EmailLoginForm.vue';
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <EmailLoginForm />
      <p class="text-sm text-center text-gray-500">
        <router-link to="/signup">회원가입</router-link> |
        <router-link to="/forgot-password">비밀번호 찾기</router-link>
      </p>
    </LoginBox>
  </DefaultLayout>
</template>
