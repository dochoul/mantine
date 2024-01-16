import { createTheme, MantineColorsTuple } from '@mantine/core';

const commonTheme = createTheme({
  colors: {
    accountPrimary: [
      '#3090D6',
      '#1479C2',
      '#E6F0F8',
      '#f0f3f8',
      '#34a0ef',
      ...Array(5).fill('#000'),
    ] as unknown as MantineColorsTuple,
    accountText: [
      '#333',
      '#666',
      '#999',
      ...Array(7).fill('#000'),
    ] as unknown as MantineColorsTuple,
    accountLine: [
      '#cdcdcd',
      '#ddd',
      '#e6e6e7',
      ...Array(7).fill('#000'),
    ] as unknown as MantineColorsTuple,
    accountTertiary: [
      '#EC7200',
      '#E05F00',
      ...Array(8).fill('#000'),
    ] as unknown as MantineColorsTuple,
  },

  headings: {
    fontWeight: '500',
  },

  cursorType: 'pointer',
});

export default commonTheme;
