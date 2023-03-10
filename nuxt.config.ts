// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: ['@nuxtjs/tailwindcss'],
app: {
    head: {
        title: 'audiophile',
        meta: [
            {
                name: 'decription', content: 'Audio E-Commers Site'
            }
        ],
        link: [
            {
                rel: 'custom-font', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap',
            },
            {
                rel: 'init-font', href: '"https://fonts.googleapis.com',
            }
        ]
    }
}
})
