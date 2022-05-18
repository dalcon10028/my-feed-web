<script setup lang="ts">
  import * as yup from 'yup';
  import { computed, reactive, ref, type ComputedRef } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import { AtSymbolIcon, EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
  import FormInput from '@/components/atoms/input/FormInput.vue';
  import { userSignUp } from '@/apis/users';
  import axios from 'axios';
  import { useStore } from 'vuex';
  import type { ModalMessage } from '@/store/interfaces';
  import { OPEN_MODAL } from '@/store/mutation-types';
  import { useRouter } from 'vue-router';

  const store = useStore();
  const router = useRouter();

  /* 회원가입 정보 */
  const signUpSchema = yup.object({
    username: yup.string().required('아이디를 입력해주세요').email('이메일 형식으로 입력해주세요'),
    nickname: yup.string().required('닉네임을 입력해주세요').min(2, '닉네임은 2글자 이상이여야 합니다.'),
    password1: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 8글자 이상이여야 합니다'),
    password2: yup.string().oneOf([yup.ref('password1'), null], '비밀번호가 일치하지 않습니다')
  });

  const { errors, validate } = useForm({ validationSchema: signUpSchema });

  const { value: username } = useField<string>('username');
  const { value: nickname } = useField<string>('nickname');
  const { value: password1 } = useField<string>('password1');
  const { value: password2 } = useField<string>('password2');

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

  /* 회원 가입 */
  const signUpError = ref('');

  const signUp = async () => {
    const { valid } = await validate();
    if (!valid) return;
    try {
      await userSignUp({
        username: username.value,
        nickname: nickname.value,
        password: password1.value
      });
      store.commit(OPEN_MODAL, {
        title: '회원가입 성공',
        description: '회원가입이 완료되었습니다.'
      } as ModalMessage);
      router.replace('/login/email');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response?.data as { message: string };
        signUpError.value = message;
      }
    }
  };
</script>

<template>
  <div v-if="signUpError" class="p-4 text-red-700 bg-red-50 rounded border border-red-900/10" role="alert">
    <strong class="text-sm font-medium">{{ signUpError }}</strong>
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
    id="nickname"
    v-model="nickname"
    :error="!!errors.nickname"
    :error-message="errors.nickname"
    label="닉네임"
    type="text"
    placeholder="닉네임을 입력해주세요"
  >
  </FormInput>

  <FormInput
    id="password1"
    v-model="password1"
    :error="!!errors.password1"
    :error-message="errors.password1"
    label="비밀번호"
    :type="passwordLook.type"
    placeholder="비밀번호를 입력해주세요"
  >
    <template #icon>
      <button class="inline-flex absolute inset-y-0 right-4 items-center" @click="passwordLook.toggle">
        <EyeOffIcon
          v-if="passwordLook.eyes"
          class="w-5 h-5"
          :class="`text-${!!errors.password1 ? 'red-600' : 'gray-400'}`"
        />
        <EyeIcon v-else class="w-5 h-5" :class="`text-${!!errors.password1 ? 'red-600' : 'gray-400'}`" />
      </button>
    </template>
  </FormInput>

  <FormInput
    id="password2"
    v-model="password2"
    :error="!!errors.password2"
    :error-message="errors.password2"
    label="비밀번호확인"
    :type="passwordLook.type"
    placeholder="비밀번호를 입력해주세요"
  >
    <template #icon>
      <button class="inline-flex absolute inset-y-0 right-4 items-center" @click="passwordLook.toggle">
        <EyeOffIcon
          v-if="passwordLook.eyes"
          class="w-5 h-5"
          :class="`text-${!!errors.password2 ? 'red-600' : 'gray-400'}`"
        />
        <EyeIcon v-else class="w-5 h-5" :class="`text-${!!errors.password2 ? 'red-600' : 'gray-400'}`" />
      </button>
    </template>
  </FormInput>

  <button class="btn-signup" @click="signUp">회원가입</button>
</template>

<style scoped>
  .btn-signup {
    @apply block py-3 px-5 my-3 w-full text-sm font-medium text-white bg-primary-500 rounded-lg;
  }
</style>
