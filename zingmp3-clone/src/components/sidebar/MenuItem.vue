<script setup lang="ts">
interface Menu {
  id: number
  path: string
  title: string
  icon?: string
  play?: string
  isLive?: boolean
  iconClass?: string
  isPortal?: boolean
}

interface IProp {
  menu: Menu
  isExpanded: boolean
  onlyActiveText?: boolean
  wrapperClass?: string | any[]
}

defineProps<IProp>()

const showPortal = ref('-1')
</script>

<template>
  <el-menu-item
    :index="menu.path"
    class="sidebar-menu-item menu-item"
    :class="[
      {
        'is-expanded': isExpanded,
        'only-active-text': onlyActiveText,
        'text-[var(--primary)]!': showPortal === menu.path,
      },
      wrapperClass,
    ]"
  >
    <el-icon v-if="menu.icon" :size="24" :class="menu.iconClass">
      <Icon :name="menu.icon" opacity="0.8" />
    </el-icon>

    <span class="title"
      >{{ menu.title }}
      <img
        v-if="menu.isLive"
        class="ml-1 md:inline hidden pb-0.5"
        :class="{ 'inline!': isExpanded }"
        src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
        alt=""
      />
    </span>

    <el-icon v-if="menu.play" :size="20" class="play-button">
      <Icon name="bx:play-circle" />
    </el-icon>

    <SidebarPortal v-if="menu.isPortal" @hide="showPortal = '-1'">
      <span
        class="portal-icon -hidden"
        :class="{ '-show': showPortal === menu.path }"
        @click="showPortal = menu.path"
      >
        <el-tooltip effect="dark" content="Khác" placement="top">
          <el-icon :size="20">
            <Icon name="bx:dots-horizontal-rounded" />
          </el-icon>
        </el-tooltip>
      </span>
    </SidebarPortal>
  </el-menu-item>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

$menu-item-height: 48px;

.menu-item {
  @include hover-focus-color(var(--text-item-hover));
  @apply flex items-center bg-transparent text-[var(--navigation-text)] leading-5 font-medium px-3 py-5;

  border-left: 3px solid transparent;
  height: $menu-item-height;

  &:hover {
    background-color: transparent;
  }

  .title {
    @apply hidden overflow-hidden ml-1.5;
  }

  .play-button {
    @apply hidden;
  }

  &.is-active {
    @apply bg-[var(--alpha-bg)];
    color: var(--text-item-hover);
  }
}

.menu-item.is-expanded {
  .title {
    @apply inline flex-1;
  }

  .play-button {
    @apply display-inherit invisible opacity-0 transition-all;
  }

  &:hover .play-button {
    @apply visible opacity-100;
  }

  &.is-active {
    @apply border-l-[var(--purple-primary)];
  }
}

.only-active-text {
  @include hover-focus-color(var(--text-item-hover));

  background-color: transparent !important;
  border-color: transparent !important;
  color: var(--navigation-text);
}

.portal-icon {
  &.-hidden {
    @apply invisible opacity-0;
  }

  &.-show {
    @apply visible opacity-100;
  }
}

.menu-item:hover .portal-icon {
  @apply visible opacity-100;
}
</style>
