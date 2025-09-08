/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            primary: '#6366f1',
            secondary: '#f97316',
            accent: '#8b5cf6',
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
            'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        }
    },
};
export const plugins = [];
