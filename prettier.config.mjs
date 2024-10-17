/** @type {import("prettier").Config} */
export default {
    importOrder: [
        "<TYPES>",
        "<TYPES>^[.]",
        "",
        "<BUILTIN_MODULES>",
        "^react$",
        "<THIRD_PARTY_MODULES>",
        "",
        "^[.]",
        "",
        "^(?!.*[.]css$)[./].*$",
        ".css$",
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss",
    ],
    semi: false,
    tabWidth: 4,
}
