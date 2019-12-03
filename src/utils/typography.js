import Typography from 'typography';
import altonTheme from 'typography-theme-lincoln';

const typography = new Typography({
  ...altonTheme,
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
});

export const { scale, rhythm, options } = typography;
export default typography;
