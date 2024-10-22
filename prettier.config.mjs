/** @type {import("prettier").Config} */
export default {
    importOrder: [
        "<BUILTIN_MODULES>",
        "^react($|/.*$)",
        "<THIRD_PARTY_MODULES>",
        "<TYPES>",
        "",
        "^@/(.*)$",
        "<TYPES>^@/(.*)$",
        "",
        "^[./]",
        "<TYPES>^[./]",
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
    plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    printWidth: 120,
    semi: false,
    tabWidth: 4,
}
