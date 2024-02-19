<script setup lang="ts"></script>

<template>
  <div>
    <div class="logo cursor-pointer">
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    background-image: var(--logo-icon-url);
    background-repeat: no-repeat;
    background-size: contain;
    width: 45px;
    height: 45px;
  }
}

@media (min-width: 768px) {
  .logo {
    width: 240px;
    padding: 0 25px 0 28px;
    justify-content: inherit;

    > span {
      background-image: var(--logo-url);
      width: 120px;
      height: 40px;
    }
  }
}
</style>
