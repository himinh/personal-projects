<template>
  <span></span>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

span {
  @include logo-small;

  @screen lg {
    @include logo-medium;
  }
}
</style>
