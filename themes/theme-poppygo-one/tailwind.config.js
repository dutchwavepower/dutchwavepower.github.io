module.exports = {
  purge: {
    enabled: false,
    content: ['./layouts/**/*.html','./exampleSite/public/**/*.html' ,'./exampleSite/public/*.html' ,'./public/page-components/*.html'],
    options: {
      safelist: {
        greedy: [/p-/,/px-/,/py-/,/m-/,/mx-/,/my-/,/w-/,/h-/,/z-/,/grid-/,/bg-/,/text-/,/border-/,/shadow-/]
      },
    },
  },
  theme: {
    container: {
      padding: {
        DEFAULT: 'var(--container-DEFAULT)',
        sm: 'var(--container-sm)',
        lg: 'var(--container-lg)',
        xl: 'var(--container-xl)',
        '2xl': 'var(--container-2xl)',
      },
    },
    colors: {
      poppycolor1: 'var(--poppy-color1)',
      poppycolor2: 'var(--poppy-color2)',
      poppycolor3: 'var(--poppy-color3)',
      poppycolor4: 'var(--poppy-color4)',
      poppycolor5: 'var(--poppy-color5)',
      poppycolor6: 'var(--poppy-color6)',
      white: '#fff',
      black: '#000',
      gray: '#ADACB5',
      transparent: 'transparent',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            h5: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            pre: {
              backgroundColor: 'var(--poppy-colordark)',
            },
            strong: {
              color: 'inherit',
            },
            a: {
              color: 'var(--poppy-color1)',
              '&:hover': {
                color: 'var(--poppy-color2)',
              },
            },
          },
        },
      }),
      // colors: {
      //   poppycolor1: 'var(--poppy-color1)',
      //   poppycolor2: 'var(--poppy-color2)',
      //   poppycolor3: 'var(--poppy-color3)',
      //   poppycolor4: 'var(--poppy-color4)',
      //   poppycolor5: 'var(--poppy-color5)',
      //   poppycolor6: 'var(--poppy-color6)',
      //   poppycolorlight: 'var(--poppy-colorlight)',
      //   poppycolordark: 'var(--poppy-colordark)',
      // },
    },
    fontFamily: {
      display1: "var(--font-display1)",
      display2: "var(--font-display2)",
      body: "var(--font-body)",
      art: "var(--font-art)",
      menu: "var(--font-menu)",
    },
    fontWeights: {
      art: "var(--font-weight-art)",
      body: "var(--font-weight-body)",
      display1: "var(--font-weight-display1)",
      display2: "var(--font-weight-display2)",
      menu: "var(--font-weight-menu)",
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
