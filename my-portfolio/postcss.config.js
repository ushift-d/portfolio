module.exports = {
    plugins: [
        require('@tailwindcss/postcss7-compat'),
        require('postcss-preset-env')({ stage: 3 }),
    ],
};
