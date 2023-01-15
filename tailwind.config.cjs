const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.slate,
                primary: colors.blue,
                secondary: colors.orange,
                accent: colors.fuchsia
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-in-out'
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ]
}