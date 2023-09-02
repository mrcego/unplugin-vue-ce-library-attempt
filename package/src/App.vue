<script setup lang="ts"></script>

<template>
  Hello World!
  <div class="p-2">
    <AlertBase icon-background-color="bg-green-700" container-shadow="shadow-xl" container-width="w-full">
      <template #body> <strong>Te amo Goddy!</strong> </template>
    </AlertBase>
  </div>
</template>

<style lang="scss" scoped>
@import url('./style.css');
</style>
