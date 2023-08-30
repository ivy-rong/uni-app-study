declare module 'uview-plus' {
  interface ToastOptions {
    message: string
    duration?: number
    type?: string
    title?: string
    iconUrl?: string
    complete?: () => void
  }

  interface ToastRef {
    show: (options: ToastOptions) => void
  }
}
