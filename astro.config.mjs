import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';

export default defineConfig({
  // ...
  output: 'server',
  adapter: netlify(),
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   },
  // }),
  integrations: [tailwind(), solid()],
});