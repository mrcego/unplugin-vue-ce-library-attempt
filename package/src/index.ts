import { createCEApp } from '@unplugin-vue-ce/ce-app'

import Alert from '@components/Alert'

const ClgAlert = createCEApp(Alert.AlertBase)

// export individual elements
export { ClgAlert }

export function register() {
  ClgAlert.mount('clg-alert')
}
