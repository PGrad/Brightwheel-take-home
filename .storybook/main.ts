
/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
    addons: [
        '@storybook/addon-essentials',
    ],
    stories: ['../src/**/*.stories.@(ts|tsx)'],
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