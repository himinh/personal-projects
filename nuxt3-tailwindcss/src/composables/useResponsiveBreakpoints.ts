import { breakpointsTailwind } from '@vueuse/core'

export const useResponsiveBreakpoints = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  return {
    ...breakpoints,
  }
}
