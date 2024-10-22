import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
    adapter: cloudflare({ imageService: "cloudflare" }),
    integrations: [react(), tailwind({ applyBaseStyles: false })],
    output: "hybrid",
    experimental: {
        env: {
            schema: {
                RESEND_API_KEY: { context: "server", access: "secret", type: "string" },
            },
        },
    },
})
