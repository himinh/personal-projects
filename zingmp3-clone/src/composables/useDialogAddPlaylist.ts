export const useDialogAddPlaylist = () => {
  const isShow = useState('isShow', () => false)

  const open = () => {
    isShow.value = true
  }

  const close = () => {
    isShow.value = false
  }

  return {
    isShow,
    close,
    open,
  }
}
