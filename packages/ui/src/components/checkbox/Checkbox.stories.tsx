import React, {useState} from 'react';
import type { StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from './Checkbox'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'
import {userEvent, within} from "@storybook/test"
import { expect } from '@storybook/jest'

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const

interface IMeta {
  title: string
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs',
    // '!dev'
  ],
  args: {

  },
  argTypes: {
    color: {
      description: 'checkbox의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'checkbox의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    label: 'checkbox',
  },
  render: (args) => {

    const handleClick = () => {
      console.log('onChange')
    };

    return (
      <Checkbox {...args}
              onChange={handleClick}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. 기본 checkbox 쿼리
    const checkbox = canvas.getByRole('checkbox', { name: 'checkbox' }); // 더 구체적인 접근 방식 사용

    // 2. 초기 상태 확인
    expect(checkbox).not.toBeChecked();

    // 3. checkbox 클릭하여 상태 변경
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // 4. checkbox 다시 클릭하여 상태 초기화
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  },
}

export const Indeterminate: { render: () => void } = {
  render: () => {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const children = (
      <div style={{marginLeft: '10px'}}>
        <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
        <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
      </div>
    );

    return (
      <div>
        <Checkbox
          label="Parent"
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChange1}
        />
        {children}
      </div>
    );
  }
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => <Checkbox id={color} label={color} color={color} defaultChecked />)
    return <StoryTemplate items={colorGroup} />
  }
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => <Checkbox id={size} label={size} size={size} defaultChecked/>)
    return <StoryTemplate items={sizeGroup}/>
  }
}

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px',
        alignItems: 'center',
      }}>
        <Checkbox id={'checked-disabled'} checked disabled label={'disabled'} />
        <Checkbox id={'disabled'} disabled label={'disabled'} />
      </div>
    )
  },
}