
/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
    stories: ['../src/components/**/*.stories.@(ts|tsx)'],
    staticDirs: ['../public'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};

export default config;