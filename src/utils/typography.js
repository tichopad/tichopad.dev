import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

// Site typography configuration
const typography = new Typography({
  ...lincolnTheme,
  headerFontFamily: ['Merriweather', 'serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['700'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700'],
    },
  ],
  colors: {
    primaryGray: '#ebebeb',
  },
})

export const { scale, rhythm, options } = typography
export default typography
