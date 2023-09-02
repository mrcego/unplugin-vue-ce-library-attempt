<script setup lang="ts">
withDefaults(
  defineProps<{
    iconBackgroundColor?: string
    bodyBackgroundColor?: string
    containerWidth?: string
    containerShadow?: string
    containerRadius?: string
  }>(),
  {
    containerWidth: 'w-96',
    containerShadow: 'shadow-lg',
    containerRadius: 'rounded-lg',
  },
)
</script>

<template>
  <div class="flex" :class="[containerWidth, containerShadow, containerRadius]">
    <AlertIcon :background-color="iconBackgroundColor">
      <slot name="icon"></slot>
    </AlertIcon>
    <AlertBody :background-color="bodyBackgroundColor">
      <slot name="body"></slot>

      <template #close>
        <slot name="close" />
      </template>
    </AlertBody>
  </div>
</template>

<style lang="scss" scoped>
@import url('@src/style.css');
</style>
