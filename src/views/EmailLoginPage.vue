<script setup lang="ts">
  import * as yup from 'yup';
  import { computed, ref } from 'vue';
  import { useForm, useField } from 'vee-validate';

  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import { AtSymbolIcon, EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';

  const loginSchema = yup.object({
    username: yup.string().required('아이디를 입력해주세요').email('이메일 형식으로 입력해주세요'),
    password: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 8글자 이상이여야 합니다')
  });

  const { errors } = useForm({ validationSchema: loginSchema });

  const { value: username } = useField('username');
  const { value: password } = useField('password');

  const existError = computed(() => errors.value.username || errors.value.password);

  /** 비밀번호 보기 */
  const passwordType = ref('password');
  const passwordEye = computed(() => passwordType.value === 'password');
  const togglePasswordType = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
  };
</script>

<template>
  <DefaultLayout>
    <LoginBox>
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
            <AtSymbolIcon class="w-5 h-5 text-gray-400" />
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="text-sm font-medium">비밀번호</label>

        <div class="relative mt-1">
          <input
            id="password"
            v-model="password"
            :type="passwordType"
            class="p-4 pr-12 w-full text-sm rounded-lg border-gray-200 shadow-sm"
            placeholder="비밀번호를 입력해주세요"
          />

          <button class="inline-flex absolute inset-y-0 right-4 items-center" @click="togglePasswordType">
            <EyeOffIcon v-if="passwordEye" class="w-5 h-5 text-gray-400" />
            <EyeIcon v-else class="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <button class="block py-3 px-5 my-5 w-full text-sm font-medium text-white bg-primary-500 rounded-lg">
        로그인
      </button>

      <p class="text-sm text-center text-gray-500">
        <router-link to="/signup">회원가입</router-link> |
        <router-link to="/forgot-password">비밀번호 찾기</router-link>
      </p>
    </LoginBox>
  </DefaultLayout>
</template>
