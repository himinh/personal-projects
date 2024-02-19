<script lang="ts" setup>
const { isShow, close } = useDialogAddPlaylist()

const form = reactive({
  name: '',
  isPublic: true,
  isRandomPlaylist: true,
})

const onSubmit = () => {
  console.log(form)

  form.name = ''
  close()
}
</script>

<template>
  <el-dialog v-model="isShow" width="330px" align-center class="dialog-wrapper">
    <template #header>
      <h3 class="title">Tạo playlist mới</h3>
    </template>

    <div class="form-playlist-content">
      <form @submit.prevent="onSubmit">
        <input
          v-model="form.name"
          type="text"
          placeholder="Nhập tên playlist"
          autofocus
        />

        <div class="option">
          <div>
            <span class="title">Công khai</span>
            <p class="subtitle">Mọi người có thể nhìn thấy playlist này</p>
          </div>

          <el-switch
            v-model="form.isPublic"
            size="small"
            style="--el-switch-on-color: var(--primary)"
          />
        </div>

        <div class="option">
          <div>
            <span class="title">Phát ngẫu nhiên</span>
            <p class="subtitle">Luôn phát ngẫu nhiên tất cả bài hát</p>
          </div>

          <el-switch
            v-model="form.isRandomPlaylist"
            size="small"
            style="--el-switch-on-color: var(--primary)"
          />
        </div>

        <div class="mt-8 mb-6">
          <el-button native-type="submit" :disabled="!form.name" w-full round
            >Tạo mới</el-button
          >
        </div>
      </form>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';
.title {
  @apply text-center text-lg font-bold pl-[14px];
}

.el-button {
  @include button-styles(var(--primary), var(--white));
}

.form {
  width: 100%;
}

input {
  @apply w-full h-[40px] bg-[var(--alpha-bg)] text-sm text-[var(--text-primary)]  placeholder:text-[var(--text-placeholder)] px-3 rounded-full outline-0;

  border: 1px solid var(--border-primary);
}

.option {
  @apply w-full flex justify-between items-center px-3 pt-5;

  .title {
    @apply text-sm text-[var(--text-primary)];
  }

  .subtitle {
    @apply text-xs text-[var(--text-secondary)];
  }
}
</style>
