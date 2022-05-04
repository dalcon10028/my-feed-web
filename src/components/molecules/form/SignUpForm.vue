<script setup lang="ts">
  import * as yup from 'yup';
  import { computed, ref } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import { AtSymbolIcon, EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
  import { userSignUp } from '@/apis/users';
  import axios, { type AxiosError } from 'axios';

  const loginSchema = yup.object({
    username: yup.string().required('아이디를 입력해주세요').email('이메일 형식으로 입력해주세요'),
    nickname: yup.string().required('닉네임을 입력해주세요').min(2, '닉네임은 2글자 이상이여야 합니다.'),
    password1: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 8글자 이상이여야 합니다'),
    password2: yup.string().oneOf([yup.ref('password1'), null], '비밀번호가 일치하지 않습니다')
  });

  const { errors } = useForm({ validationSchema: loginSchema });

  const { value: username } = useField<string>('username');
  const { value: nickname } = useField<string>('nickname');
  const { value: password1 } = useField<string>('password1');
  const { value: password2 } = useField<string>('password2');

  const existError = computed(() => errors.value.username || errors.value.password1 || errors.value.password2);

  /** 비밀번호 보기 */
  const passwordType = ref('password');
  const passwordEye = computed(() => passwordType.value === 'password');
  const togglePasswordType = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
  };

  /* 회원 가입 */
  const signUp = async () => {
    try {
      const result = await userSignUp({
        username: username.value,
        nickname: nickname.value,
        password: password1.value
      });
    } catch (error) {
      const err = error as Error | AxiosError;
      if (axios.isAxiosError(err)) {
        alert(err.response?.data.message);
      } else {
        alert(err);
      }
    }
  };
</script>

<template>
  <div v-if="existError" class="p-4 text-red-700 bg-red-50 rounded border border-red-900/10" role="alert">
    <strong class="text-sm font-medium">{{ errors.username || errors.password1 || errors.password2 }}</strong>
  </div>
  <div>
    <label for="email" class="text-sm font-medium">이메일</label>

    <div class="relative my-2">
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
    <label for="nickname" class="text-sm font-medium">닉네임</label>

    <div class="relative my-2">
      <input
        id="nickname"
        v-model="nickname"
        type="text"
        class="p-4 pr-12 w-full text-sm rounded-lg border-gray-200 shadow-sm"
        placeholder="닉네임을 입력해주세요"
      />
    </div>
  </div>

  <div>
    <label for="password" class="text-sm font-medium">비밀번호</label>

    <div class="relative my-2">
      <input
        id="password"
        v-model="password1"
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

  <div>
    <label for="password" class="text-sm font-medium">비밀번호 확인</label>

    <div class="relative my-2">
      <input
        id="password"
        v-model="password2"
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

  <button class="block py-3 px-5 my-3 w-full text-sm font-medium text-white bg-primary-500 rounded-lg" @click="signUp">
    회원가입
  </button>
</template>
