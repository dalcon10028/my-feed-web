<script setup lang="ts">
  /* eslint-disable vue/valid-v-model */
  import * as yup from 'yup';
  import { computed, reactive, ref, type ComputedRef } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import { AtSymbolIcon, EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
  import { userLogin } from '@/apis/users';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import FormInput from '../../atoms/input/FormInput.vue';
  import { fetchToken } from '@/apis/instance';

  const router = useRouter();

  /* 로그인 폼 */
  interface LoginForm {
    username: string;
    password: string;
  }

  const loginSchema = yup.object({
    username: yup.string().required('이메일 주소를 입력해주세요').email('이메일 형식으로 입력해주세요'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
        '비밀번호는 하나의 이상의 문자, 숫자, 특수문자를 포함하여 8자리 이상이여야 합니다.'
      )
  });

  const { errors, validate } = useForm<LoginForm>({ validationSchema: loginSchema });

  const { value: username } = useField<string>('username');
  const { value: password } = useField<string>('password');

  /** 비밀번호 보기 */
  interface PasswordLook {
    type: string;
    eyes: ComputedRef;
    toggle: () => void;
  }

  const passwordLook: PasswordLook = reactive<PasswordLook>({
    type: 'password',
    eyes: computed(() => passwordLook.type === 'password'),
    toggle: () => {
      passwordLook.type = passwordLook.type === 'password' ? 'text' : 'password';
    }
  });

  /** 로그인 */
  const loginError = ref('');

  const login = async () => {
    const { valid } = await validate();
    if (valid) {
      try {
        const { token } = await userLogin({
          username: username.value,
          password: password.value
        }).then((res) => res.data);
        fetchToken(token);
        router.push('/');
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response?.data as { message: string };
          loginError.value = message;
        }
      }
    }
  };
</script>

<template>
  <div v-if="!!loginError" class="p-4 mb-2 text-red-700 bg-red-50 rounded border border-red-900/10" role="alert">
    <strong class="text-sm font-medium">{{ loginError }}</strong>
  </div>

  <FormInput
    id="email"
    v-model="username"
    :error="!!errors.username"
    :error-message="errors.username"
    label="이메일"
    type="email"
    placeholder="이메일 주소를 입력해주세요"
  >
    <template #icon>
      <span class="inline-flex absolute inset-y-0 right-4 items-center">
        <AtSymbolIcon class="w-5 h-5" :class="`text-${!!errors.username ? 'red-600' : 'gray-400'}`" />
      </span>
    </template>
  </FormInput>

  <FormInput
    id="password"
    v-model="password"
    :error="!!errors.password"
    :error-message="errors.password"
    label="비밀번호"
    :type="passwordLook.type"
    placeholder="비밀번호를 입력해주세요"
  >
    <template #icon>
      <button class="inline-flex absolute inset-y-0 right-4 items-center" @click="passwordLook.toggle">
        <EyeOffIcon
          v-if="passwordLook.eyes"
          class="w-5 h-5"
          :class="`text-${!!errors.password ? 'red-600' : 'gray-400'}`"
        />
        <EyeIcon v-else class="w-5 h-5" :class="`text-${!!errors.password ? 'red-600' : 'gray-400'}`" />
      </button>
    </template>
  </FormInput>

  <button class="btn-login" @click="login">로그인</button>
</template>

<style scoped>
  .btn-login {
    @apply block py-3 px-5 my-5 w-full text-sm font-medium text-white bg-primary-500 rounded-lg;
  }
</style>
