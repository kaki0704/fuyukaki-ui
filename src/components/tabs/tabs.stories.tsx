import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border border-border rounded-lg mt-2">
          <h3 className="text-lg font-semibold">Account</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border border-border rounded-lg mt-2">
          <h3 className="text-lg font-semibold">Password</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 border border-border rounded-lg mt-2">
          <h3 className="text-lg font-semibold">Settings</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const OutlineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="outline">
        <TabsTrigger value="overview" variant="outline">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="outline">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="outline">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Get a quick overview of your dashboard.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-sm text-muted-foreground mt-2">View detailed analytics and metrics.</p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-sm text-muted-foreground mt-2">Generate and download reports.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const PillsVariant: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList variant="pills">
        <TabsTrigger value="all" variant="pills">
          All
        </TabsTrigger>
        <TabsTrigger value="active" variant="pills">
          Active
        </TabsTrigger>
        <TabsTrigger value="archived" variant="pills">
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="p-4 border border-border rounded-lg mt-4">
          <p className="text-sm text-muted-foreground">Showing all items in your collection.</p>
        </div>
      </TabsContent>
      <TabsContent value="active">
        <div className="p-4 border border-border rounded-lg mt-4">
          <p className="text-sm text-muted-foreground">Showing only active items.</p>
        </div>
      </TabsContent>
      <TabsContent value="archived">
        <div className="p-4 border border-border rounded-lg mt-4">
          <p className="text-sm text-muted-foreground">Showing archived items.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Tab 2 (Disabled)
        </TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Content for Tab 1</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Content for Tab 2</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Content for Tab 3</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="music" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="photos" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
          Photos
        </TabsTrigger>
        <TabsTrigger value="videos" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="23,7 16,12 23,17 23,7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          Videos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Your music library</p>
        </div>
      </TabsContent>
      <TabsContent value="photos">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Your photo gallery</p>
        </div>
      </TabsContent>
      <TabsContent value="videos">
        <div className="p-4 border border-border rounded-lg mt-2">
          <p className="text-sm text-muted-foreground">Your video collection</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
