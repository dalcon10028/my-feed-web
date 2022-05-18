<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
  import { useStore } from 'vuex';
  import { CLOSE_MODAL } from '@/store/mutation-types';

  const store = useStore();
  const modal = reactive({
    title: computed(() => store.state.modal.title),
    description: computed(() => store.state.modal.description)
  });
  const isOpen = computed(() => store.getters.isModalOpen);
  const closeModal = () => store.commit(CLOSE_MODAL);
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="overflow-y-auto fixed inset-0">
        <div class="flex justify-center items-center p-4 min-h-full text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="overflow-hidden p-6 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                {{ modal.title }}
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {{ modal.description }}
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 hover:bg-blue-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                  @keydown.enter="closeModal"
                >
                  확인
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
