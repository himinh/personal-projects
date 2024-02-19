<script setup lang="ts">
const { greaterOrEqual, lg, sm, md, xl } = useResponsiveBreakpoints()
const isExpanded = greaterOrEqual('lg')
</script>

<template>
  <div class="h-screen!">
    <slot></slot>

    <!-- sidebar  -->
    <!-- <Sidebar /> -->

    <!-- main -->
    <!-- <div class="main-layout" :class="{ 'is-sidebar-expanded': isExpanded }"> -->
    <!-- <Header /> -->

    <!-- <el-main>
        lg:
        {{ lg }}, sm: {{ sm }}, md: {{ md }}, lg: {{ lg }}, xl: {{ xl }}
      </el-main>
      <el-footer>Footer</el-footer>
    </div> -->

    <!-- <DialogAddPlaylist /> -->
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  @apply bg-[var(--layout-bg)];
  margin-left: var(--sidebar-width-sm);

  &.is-sidebar-expanded {
    margin-left: var(--sidebar-width-md);
  }
}
</style>
