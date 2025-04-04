import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Example } from './Example'

const meta: Meta<typeof Example> = {
  component: Example,
}

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {
    children: 'example',
  },
  play: async ({ step, canvasElement }) => {
    await step('childrenに指定したテキストが表示されていることを確認する', async () => {
      const label = within(canvasElement).getByTestId('example-label')
      expect(label.innerText).toBe('example')
    })
  },
}
