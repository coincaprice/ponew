import { Montserrat, Nunito_Sans } from 'next/font/google';

export const fontHeading = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const fontSans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const fontVariables = `${fontHeading.variable} ${fontSans.variable}`;
