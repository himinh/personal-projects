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

        <div class="mb-6 mt-8">
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
  @apply pl-[14px] text-center text-lg font-bold;
}

.el-button {
  @include button-styles(var(--primary), var(--white));
}

.form {
  width: 100%;
}

input {
  @apply h-[40px] w-full rounded-full bg-[var(--alpha-bg)] px-3  text-sm text-[var(--text-primary)] outline-0 placeholder:text-[var(--text-placeholder)];

  border: 1px solid var(--border-primary);
}

.option {
  @apply flex w-full items-center justify-between px-3 pt-5;

  .title {
    @apply text-sm text-[var(--text-primary)];
  }

  .subtitle {
    @apply text-xs text-[var(--text-secondary)];
  }
}
</style>
