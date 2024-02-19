<script setup lang="ts">
const emits = defineEmits(['hide'])

const onHide = () => {
  emits('hide', true)
}
</script>

<template>
  <el-popover
    placement="top-end"
    :width="250"
    trigger="click"
    :show-arrow="false"
    effect="portal"
    @hide="onHide"
  >
    <template #reference>
      <slot></slot>
    </template>

    <el-menu class="portal-menu">
      <el-menu-item class="portal-menu-item" index="1">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="ph:music-notes-plus" />
        </el-icon>

        <span>Thêm vào danh sách phát</span>
      </el-menu-item>

      <el-menu-item class="portal-menu-item" index="2">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="solar:download-minimalistic-outline" />
        </el-icon>

        <span>Tải xuống</span>
      </el-menu-item>

      <el-menu-item class="portal-menu-item" index="3">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="bi:link-45deg" />
        </el-icon>

        <span>Sao chép link</span>
      </el-menu-item>

      <el-menu-item class="portal-menu-item" index="4">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="tabler:share-3" />
        </el-icon>

        <span>Chia sẻ</span>

        <el-icon :size="16" class="rounded-full mr-0.5 flex-1 justify-end!">
          <Icon name="ic:baseline-keyboard-arrow-right" />
        </el-icon>
      </el-menu-item>

      <el-menu-item class="portal-menu-item" index="5">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="ic:outline-edit" />
        </el-icon>

        <span>Chỉnh sửa playlist</span>
      </el-menu-item>

      <el-menu-item class="portal-menu-item" index="6">
        <el-icon :size="16" class="rounded-full mr-0.5">
          <Icon name="solar:trash-bin-2-linear" />
        </el-icon>

        <span>Xóa playlist</span>
      </el-menu-item>
    </el-menu>
  </el-popover>
</template>

<style lang="scss">
.el-popover.is-portal {
  box-shadow: var(--portal-menu-box-shadow) !important;
  background-color: var(--primary-bg) !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 5px var(--portal-menu-box-shadow) !important;
  border: none !important;
  padding-inline: 0 !important;
}

.portal-menu {
  @apply bg-transparent border-r-0 px-0;
}

.portal-menu-item {
  @apply bg-transparent text-[var(--navigation-text)] flex items-center h-inherit leading-5 w-full;
  padding: 10px 20px 10px 14px;

  &:hover {
    background-color: var(--alpha-bg);
    color: var(--text-item-hover);
  }

  &.is-active {
    color: var(--text-item-hover);
    background-color: transparent;

    &:hover {
      background-color: var(--alpha-bg);
    }
  }
}
</style>
