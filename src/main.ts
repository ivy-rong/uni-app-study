import { createSSRApp } from 'vue'
import App from './App.vue'
import viewPlus from 'uview-plus'
import * as Pinia from 'pinia'
import 'uview-plus/index.scss'
export function createApp() {
  const app = createSSRApp(App)
  app.use(viewPlus as any)
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia
  }
}
