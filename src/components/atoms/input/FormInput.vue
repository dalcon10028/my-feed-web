<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    id: string;
    type?: string;
    modelValue: string;
    label?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
  }

  /* props, emit, v-model */

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    label: '',
    modelValue: '',
    placeholder: '',
    error: false,
    errorMessage: ''
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string | undefined): void;
  }>();

  const modelValue = computed<string | undefined>({
    get(): string | undefined {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value as string | undefined);
    }
  });

  /* 에러 클래스 정의 */
  const labelClassObject = computed(() => ({
    'text-red-700': props.error
  }));

  const inputClassObject = computed(() => ({
    'bg-red-50': props.error,
    'border-red-500': props.error,
    'text-red-900': props.error,
    'placeholder-red-700': props.error,
    'focus:ring-red-500': props.error,
    'focus:border-red-500': props.error,
    'border-gray-200': !props.error
  }));
</script>

<template>
  <div class="h-28">
    <label :for="props.id" class="text-sm font-medium" :class="labelClassObject">{{ label }}</label>

    <div class="relative my-2">
      <input
        :id="props.id"
        v-model="modelValue"
        :type="props.type"
        class="p-4 pr-12 w-full text-sm rounded-lg shadow-sm"
        :class="inputClassObject"
        :placeholder="props.placeholder"
      />

      <slot name="icon" />
    </div>

    <p class="mt-2 text-sm text-red-700">{{ props.errorMessage }}</p>
  </div>
</template>
