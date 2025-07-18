// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["en", "zh"],
        defaultLocale: "en",
        routing: {
            // prefixDefaultLocale: true
        }
    },
    integrations: [tailwind(), react()]
});
