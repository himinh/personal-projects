<script setup lang="ts"></script>

<template>
  <div class="vip-banner-sidebar">
    <div class="text">Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
    <a
      class="zm-btn is-medium is-outlined is-upper button"
      tabindex="0"
      href="https://zingmp3.vn/vip?utm_source=desktop&amp;utm_campaign=VIP&amp;utm_medium=sidebar"
      target="_blank"
      >Nâng cấp tài khoản</a
    >
  </div>
</template>

<style lang="scss" scoped>
.vip-banner-sidebar {
  padding: 15px 8px;
  border-radius: 8px;
  margin: 20px 20px;
  text-align: center;
  background-image: linear-gradient(117deg, #5a4be7, #c86dd7 102%);
}

.vip-banner-sidebar .text {
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: 600;
  border-color: #ffdb00;
  line-height: 1.67;
  color: var(--white);
}

.vip-banner-sidebar .zm-btn {
  background-color: #ffdb00;
  border-color: #ffdb00;
  color: #32323d;
  text-decoration: none;
  display: inline-block;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 600;
  border: 0;
  border-radius: 999px;
  line-height: normal;
  text-align: center;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
}
</style>
