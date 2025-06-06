// react-router.config.ts
import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'app',  // your current app folder
  ssr: false,           // tell the plugin to not generate server code
} satisfies Config;
