/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
​
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: ['tailwindcss',
  'postcss-preset-env'],
 
        
    }, 
    withCSS({
      cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]",
      },
      webpack(config, options) {
          config.module.rules.push({
              test: /\.css$/,
              use: [
                  {
                      loader: 'postcss-loader',
                      options: {
                          config: {
                              path: 'postcss.config.js'
                          }
                      },
                  },
              ],
          });
          return config;
      },
  })


