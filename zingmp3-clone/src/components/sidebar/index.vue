<script setup lang="ts">
const route = useRoute()
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

const { open } = useDialogAddPlaylist()
const { greaterOrEqual } = useResponsiveBreakpoints()
const isExpanded = greaterOrEqual('lg')

const activeMenu = ref(route.fullPath)

const mainMenus: Menu[] = [
  {
    id: 1,
    path: '/',
    title: 'Khám Phá',
    icon: 'material-symbols:explore-outline',
  },
  {
    id: 2,
    path: '/zing-chart',
    title: '#zingchart',
    icon: 'ic:baseline-auto-graph',
    play: '?q=',
  },
  {
    id: 3,
    path: '/radio',
    title: 'Radio',
    icon: 'mdi:music-circle-outline',
    play: '?q=',
    isLive: true,
  },
  {
    id: 4,
    path: '/library',
    title: 'Thư viện',
    icon: 'bx:library',
    play: '?q=',
  },
]

const rankingMenus: Menu[] = [
  {
    id: 1,
    path: '/moi-phat-hanh',
    title: 'BXH nhạc mới',
    icon: 'solar:music-notes-linear',
    play: '?q=',
  },
  {
    id: 2,
    path: '/hub',
    title: 'Chủ Đề & Thể Loại',
    icon: 'iconoir:grid-add',
  },
  {
    id: 3,
    path: '/top100',
    title: 'Top 100',
    icon: 'iconoir:star',
  },
]

const userMenus: Menu[] = [
  {
    id: 1,
    path: '/library/history',
    title: 'Nghe gần đây',
    icon: 'bx:history',
    iconClass: 'bg-[#8843ff] rounded-full p-0.5',
  },
  {
    id: 2,
    path: '/library/favorite',
    title: 'Bài hát yêu thích',
    icon: 'humbleicons:heart',
    iconClass: 'bg-[#14c7ff] rounded-full p-0.5',
  },
  {
    id: 3,
    path: '/library/playlist',
    title: 'Playlist',
    icon: 'solar:playlist-minimalistic-2-outline',
    iconClass: 'bg-[#fa7130] rounded-full p-0.5',
  },
  {
    id: 4,
    path: '/library/album',
    title: 'Album',
    icon: 'iconamoon:music-album-light',
    iconClass: 'bg-[#ff4daf] rounded-full p-0.5',
  },
  {
    id: 5,
    path: '/library/uploaded',
    title: 'Đã tải lên',
    icon: 'bx:cloud-upload',
    iconClass: 'bg-[#ff4e4e] rounded-full p-0.5',
  },
]

const playlist: Menu[] = [
  {
    id: 1,
    path: '/library/playlist-1',
    title: 'Playlist 1',
    isPortal: true,
  },
  {
    id: 2,
    path: '/library/playlist-2',
    title: 'Playlist 2',
    isPortal: true,
  },
  {
    id: 3,
    path: '/library/playlist-3',
    title: 'Playlist 3',
    isPortal: true,
  },
  {
    id: 4,
    path: '/library/playlist-4',
    title: 'Playlist 4',
    isPortal: true,
  },
  {
    id: 5,
    path: '/library/playlist-5',
    title: 'Playlist 5',
    isPortal: true,
  },
]

const handleSelect = (key: string, keyPath: string[]) => {
  activeMenu.value = key
  // navigateTo(key)
}
</script>

<template>
  <aside class="fixed! h-screen">
    <div class="sidebar" :class="{ 'is-expanded': isExpanded }">
      <div class="sidebar-content">
        <!-- logo -->
        <div class="logo-box"><Logo class="logo" /></div>
        <!-- menu -->
        <el-menu
          class="menu flex flex-col flex-1 overflow-hidden"
          :default-active="activeMenu"
          @select="handleSelect"
        >
          <!-- main menus -->
          <SidebarMenuItem
            v-for="menu in mainMenus"
            :key="menu.id"
            :menu="menu"
            :is-expanded="isExpanded"
          />

          <!-- divider -->
          <el-divider class="divider" />

          <el-scrollbar class="flex-1">
            <!-- ranking menus -->
            <SidebarMenuItem
              v-for="menu in rankingMenus"
              :key="menu.id"
              :menu="menu"
              :is-expanded="isExpanded"
            />

            <SidebarVipBanner v-if="isExpanded" />

            <div mt-5></div>

            <!-- user menus -->
            <SidebarMenuItem
              v-for="menu in userMenus"
              :key="menu.id"
              :menu="menu"
              :is-expanded="isExpanded"
              :only-active-text="true"
            />

            <!-- divider -->
            <el-divider class="divider" />

            <!-- Playlist menu -->
            <template v-if="isExpanded">
              <SidebarMenuItem
                v-for="menu in playlist"
                :key="menu.id"
                :menu="menu"
                :is-expanded="true"
                :only-active-text="true"
                :wrapper-class="['h-inherit! py-1.5! px-5!']"
              />
            </template>
          </el-scrollbar>
        </el-menu>

        <!-- footer -->
        <div class="footer">
          <div v-if="isExpanded" class="add-playlist-button" @click="open">
            <el-icon :size="18">
              <Icon name="bx:plus" />
            </el-icon>
            <span class="ml-2 text-sm">Tạo playlist mới</span>
          </div>

          <div class="lg:hidden text-center">
            <el-icon
              :size="38"
              class="expanded-button"
              @click="isExpanded = !isExpanded"
            >
              <Icon v-if="isExpanded" name="ic:baseline-keyboard-arrow-left" />
              <Icon v-else name="ic:baseline-keyboard-arrow-right" />
            </el-icon>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

$logo-height: 70px;
$footer-height: 52px;

.sidebar {
  @apply h-screen bg-[var(--sidebar-popup-bg)];
  width: var(--sidebar-width-sm);

  > .sidebar-content {
    @apply w-full h-full flex flex-col flex-start;
  }

  .logo-box {
    @include flex-center;
    @apply w-full pb-[6px];

    height: $logo-height;
  }

  .menu {
    @apply border-r-0 bg-transparent;
  }

  .divider {
    @apply my-4 w-[24px] mx-auto border-[var(--border-primary)];
  }

  .footer {
    height: $footer-height;
    @apply flex items-center py-2 px-5;
  }
}

.sidebar.is-expanded {
  width: var(--sidebar-width-md);

  .logo-box {
    @apply w-full pb-0 pl-7 justify-start;

    .logo {
      @include logo-medium;
    }
  }

  .divider {
    @apply w-[80%];
  }

  .footer {
    @apply border-t-1 border-t-solid border-t-[var(--border-primary)];
  }
}

.add-playlist-button {
  @apply flex h-full items-center text-[var(--navigation-text)] flex-1 cursor-pointer;
}

.expanded-button {
  @apply rounded-full bg-[var(--alpha-bg)] p-2 cursor-pointer;
}
</style>
