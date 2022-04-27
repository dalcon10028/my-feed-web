<template>
  <div class="flex flex-row pt-6 pb-8">
    <label for="new">
      <input id="new" class="peer hidden" type="checkbox" name="new" />
      <div
        class="flex relative justify-center items-center m-1 mr-2 w-12 h-12 text-xl text-white peer-checked:text-white peer-checked:bg-red-700 hover:bg-primary-300 rounded-full border-2 border-primary-300 border-dashed"
      >
        new
      </div>
    </label>
    <div
      class="flex relative justify-center items-center m-1 mr-2 w-12 h-12 text-xl text-white bg-orange-500 rounded-full"
    >
      N
    </div>
    <div
      class="flex relative justify-center items-center m-1 mr-2 w-12 h-12 text-xl text-white bg-orange-500 rounded-full"
    >
      N
    </div>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'SuncheonB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/SuncheonB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  div {
    font-family: 'SuncheonB';
  }
</style>
