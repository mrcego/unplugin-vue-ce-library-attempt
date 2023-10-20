<script setup lang="ts">
withDefaults(
  defineProps<{
    backgroundColor?: string
  }>(),
  {
    backgroundColor: 'bg-white',
  },
)
</script>

<template>
  <div
    class="px-4 py-6 rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200"
    :class="backgroundColor"
  >
    <slot name="default">
      <div>Default / info alert</div>
    </slot>

    <AlertClose>
      <slot name="close" />
    </AlertClose>
  </div>
</template>

<style lang="scss" scoped></style>
