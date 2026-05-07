import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  TextInput,
  EmailInput,
  PasswordInput,
  NumberInput,
  SearchInput,
  Textarea,
  Checkbox,
  Radio,
} from '@design-system/input';
import type { InputSize } from '@design-system/input';

const SIZES: InputSize[] = ['sm', 'md', 'lg'];

const meta: Meta<typeof TextInput> = {
  title: 'Components/Input',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form input components for common input types. All text-type variants share the same visual style ' +
          'and differ only in their native `type` attribute. `Checkbox` and `Radio` use custom styling.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: SIZES,
      table: { defaultValue: { summary: "'md'" } },
    },
    disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    placeholder: { control: 'text' },
  },
  args: { size: 'md', placeholder: 'Placeholder text', disabled: false },
};

export default meta;

export const Text: StoryObj<typeof TextInput> = {
  render: (args) => <TextInput {...args} />,
};

export const Email: StoryObj<typeof EmailInput> = {
  args: { placeholder: 'you@example.com' },
  render: (args) => <EmailInput {...args} />,
};

export const Password: StoryObj<typeof PasswordInput> = {
  args: { placeholder: 'Enter password' },
  render: (args) => <PasswordInput {...args} />,
};

export const Number: StoryObj<typeof NumberInput> = {
  args: { placeholder: '0' },
  render: (args) => <NumberInput {...args} />,
};

export const Search: StoryObj<typeof SearchInput> = {
  args: { placeholder: 'Search...' },
  render: (args) => <SearchInput {...args} />,
};

export const TextArea: StoryObj<typeof Textarea> = {
  name: 'Textarea',
  args: { placeholder: 'Enter a longer message...' },
  render: (args) => <Textarea {...args} />,
};

export const CheckboxStory: StoryObj = {
  name: 'Checkbox',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {[
        { label: 'Checked', defaultChecked: true },
        { label: 'Unchecked', defaultChecked: false },
        { label: 'Disabled', disabled: true },
      ].map(({ label, ...props }) => (
        <label key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Checkbox {...props} />
          {label}
        </label>
      ))}
    </div>
  ),
};

export const RadioStory: StoryObj = {
  name: 'Radio',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {[
        { label: 'Option A', defaultChecked: true },
        { label: 'Option B' },
        { label: 'Disabled', disabled: true },
      ].map(({ label, ...props }) => (
        <label key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Radio name="radio-demo" {...props} />
          {label}
        </label>
      ))}
    </div>
  ),
};

export const AllSizes: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
      {SIZES.map((size) => (
        <TextInput key={size} size={size} placeholder={`size="${size}"`} />
      ))}
    </div>
  ),
};

export const Disabled: StoryObj<typeof TextInput> = {
  args: { disabled: true, defaultValue: 'Disabled value' },
  render: (args) => <TextInput {...args} />,
};
