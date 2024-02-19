<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const buttonRef = ref()
const popoverRef = ref()

const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
const input = ref()
</script>

<template>
  <header class="sticky top-0 w-full">
    <div class="flex w-full justify-between">
      <div class="flex items-center flex-1 mr-4">
        <div class="mr-2">
          <el-icon :size="26">
            <Icon name="bx:left-arrow-alt" />
          </el-icon>
        </div>

        <div class="mx-2">
          <el-icon :size="26">
            <Icon name="bx:right-arrow-alt" />
          </el-icon>
        </div>

        <form class="form-search flex-1 ml-4">
          <div class="flex relative">
            <div
              class="absolute h-full flex items-center justify-center w-[40px]"
            >
              <el-icon :size="26">
                <Icon name="bx:search" />
              </el-icon>
            </div>

            <input
              v-model="input"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              class="pl-9! border-0! max-w-[400px]"
              v-popover="popoverRef"
              v-click-outside="onClickOutside"
            />

            <el-popover
              ref="popoverRef"
              trigger="click"
              title="With title"
              virtual-triggering
              persistent
              placement="bottom-start"
              :popper-style="{ width: '300px' }"
            >
              <span class="w-full!"> {{ input }} </span>
            </el-popover>
          </div>
        </form>
      </div>

      <div class="header-right ml-4">
        <el-icon
          :size="38"
          class="rounded-full bg-[var(--alpha-bg)] p-2 cursor-pointer"
        >
          <Icon name="lucide:settings" />
        </el-icon>

        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply flex items-center px-[var(--padding-section-sm)];

  background-color: var(--layout-header-bg);
  height: var(--header-height);

  @screen lg {
    @apply px-[var(--padding-section)];
  }
}

.header-left {
  @apply flex items-center;
}

input {
  @apply w-full h-[40px]  text-sm text-[var(--text-primary)]  placeholder:text-[var(--text-placeholder)] px-3 rounded-full outline-0;

  background-color: var(--alpha-bg) !important;

  border: 1px solid var(--border-primary);
}
</style>
