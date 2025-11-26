import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const Checked: Story = {
  args: {
    label: 'Auto-save enabled',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Locked setting',
    disabled: true,
    defaultChecked: true,
  },
}

export const WithoutLabel: Story = {
  args: {},
}

export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Email notifications</label>
              <p className="text-sm text-muted-foreground">
                Receive updates about your orders
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Organic only</label>
              <p className="text-sm text-muted-foreground">
                Show only organic products
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium text-foreground">Local sourcing</label>
              <p className="text-sm text-muted-foreground">
                Prioritize locally-sourced items
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  ),
}
