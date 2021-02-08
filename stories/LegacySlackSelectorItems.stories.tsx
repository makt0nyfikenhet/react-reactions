import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SlackSelectorItems } from '../legacy/src/components/slack/SlackSelectorItems';

const meta: Meta = {
  title: 'LegacySlackSelectorItems',
  component: SlackSelectorItems,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = args => <SlackSelectorItems {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  scrollHeight: '270px',
  removeEmojis: [
    '🙂',
    '🙃',
    '☺️',
    '🤑',
    '🤓',
    '🤗',
    '🙄',
    '🤔',
    '🙁',
    '☹️',
    '🤐',
    '🤒',
    '🤕',
    '🤖',
  ],
  frequent: [
    '👍',
    '🐉',
    '🙌',
    '🗿',
    '😊',
    '🐬',
    '😹',
    '👻',
    '🚀',
    '🚁',
    '🏇',
    '🇨🇦',
  ],
};
