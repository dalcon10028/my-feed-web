<script setup lang="ts">
  import * as yup from 'yup';
  import { computed } from 'vue';
  import ko from 'yup-locale-ko';
  import { useForm, useField } from 'vee-validate';
  import DefaultLayout from './layout/DefaultLayout.vue';

  yup.setLocale(ko);
  const loginSchema = yup.object({
    username: yup.string().required().email().label('아이디'),
    password: yup.string().required().min(8).label('비밀번호')
  });

  const { errors } = useForm({ validationSchema: loginSchema });

  const { value: username } = useField('username');
  const { value: password } = useField('password');

  const existError = computed(() => errors.value.username || errors.value.password);
</script>

<template>
  <DefaultLayout>
    <div class="py-16 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">My Feed</h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          나를 위한 RSS 피드 My Feed에 오신걸 환영합니다!<br />회원가입을 하시면 더 많은 서비스를 이용하실 수 있습니다.
        </p>

        <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
          <div v-if="existError" class="p-4 text-red-700 bg-red-50 rounded border border-red-900/10" role="alert">
            <strong class="text-sm font-medium">{{ errors.username || errors.password }}</strong>
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
                v-model="password"
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
            로그인
          </button>

          <p class="text-sm text-center text-gray-500">
            <router-link to="/signup">회원가입</router-link> |
            <router-link to="/forgot-password">비밀번호 찾기</router-link>
          </p>
        </form>
      </div>
    </div>
  </DefaultLayout>
</template>
