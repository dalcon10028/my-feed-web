<script setup lang="ts">
  import * as yup from 'yup';
  import { computed } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';

  const loginSchema = yup.object({
    username: yup.string().required('아이디를 입력해주세요').email('이메일 형식으로 입력해주세요'),
    password1: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 8글자 이상이여야 합니다'),
    password2: yup.string().oneOf([yup.ref('password1'), null], '비밀번호가 일치하지 않습니다')
  });

  const { errors } = useForm({ validationSchema: loginSchema });

  const { value: username } = useField('username');
  const { value: password1 } = useField('password1');
  const { value: password2 } = useField('password2');

  const existError = computed(() => errors.value.username || errors.value.password1 || errors.value.password2);
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <template #title>회원가입</template>
      <template #description><br /></template>
      <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
        <div v-if="existError" class="p-4 text-red-700 bg-red-50 rounded border border-red-900/10" role="alert">
          <strong class="text-sm font-medium">{{ errors.username || errors.password1 || errors.password2 }}</strong>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">이메일</label>

          <div class="relative mt-1">
            <input
              id="email"
              v-model="username"
              type="email"
              class="p-4 pr-12 w-full text-sm rounded-lg border-gray-200 shadow-sm"
              placeholder="이메일 주소를 입력해주세요"
            />

            <span class="inline-flex absolute inset-y-0 right-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">비밀번호</label>

          <div class="relative mt-1">
            <input
              id="password"
              v-model="password1"
              type="password"
              class="p-4 pr-12 w-full text-sm rounded-lg border-gray-200 shadow-sm"
              placeholder="비밀번호를 입력해주세요"
            />

            <span class="inline-flex absolute inset-y-0 right-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">비밀번호 확인</label>

          <div class="relative mt-1">
            <input
              id="password"
              v-model="password2"
              type="password"
              class="p-4 pr-12 w-full text-sm rounded-lg border-gray-200 shadow-sm"
              placeholder="비밀번호를 입력해주세요"
            />

            <span class="inline-flex absolute inset-y-0 right-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button type="submit" class="block py-3 px-5 w-full text-sm font-medium text-white bg-indigo-600 rounded-lg">
          회원가입
        </button>
      </form>
    </LoginBox>
  </DefaultLayout>
</template>
