// Consult https://www.snowpack.dev to learn about these options
module.exports = {
    extends: '@sveltejs/snowpack-config',
    plugins: [
        [
            '@snowpack/plugin-build-script',
            {
                cmd: 'postcss',
                input: ['.css', '.pcss'],
                output: ['.css'],
            }
        ],
        '@snowpack/plugin-typescript'
    ],
    buildOptions: {
        clean: true
    },
    mount: {
        'src/components': '/_components',
        'src/assets': '/assets',
    },
    alias: {
        $components: './src/components'
    }
};
