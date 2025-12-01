import type { Meta, StoryObj } from '@storybook/react'
import {
  NavMenu,
  NavMenuContent,
  NavMenuItem,
  NavMenuLink,
  NavMenuList,
  NavMenuSeparator,
  NavMenuSub,
  NavMenuTrigger,
  NavMenuViewport,
} from './nav-menu'

const meta: Meta<typeof NavMenu> = {
  title: 'Components/NavMenu',
  component: NavMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
  render: () => (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="getting-started">
          <NavMenuTrigger>Getting Started</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Introduction</NavMenuLink>
            <NavMenuLink href="#">Installation</NavMenuLink>
            <NavMenuLink href="#">Quick Start</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="components">
          <NavMenuTrigger>Components</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Button</NavMenuLink>
            <NavMenuLink href="#">Input</NavMenuLink>
            <NavMenuLink href="#">Select</NavMenuLink>
            <NavMenuLink href="#">Modal</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">Documentation</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
      <NavMenuViewport />
    </NavMenu>
  ),
}

export const WithSubgroups: Story = {
  render: () => (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="products">
          <NavMenuTrigger>Products</NavMenuTrigger>
          <NavMenuContent className="w-[400px]">
            <div className="grid grid-cols-2 gap-2">
              <NavMenuSub title="Development">
                <NavMenuLink href="#">IDE</NavMenuLink>
                <NavMenuLink href="#">Version Control</NavMenuLink>
                <NavMenuLink href="#">CI/CD</NavMenuLink>
              </NavMenuSub>
              <NavMenuSub title="Design">
                <NavMenuLink href="#">UI Kit</NavMenuLink>
                <NavMenuLink href="#">Prototyping</NavMenuLink>
                <NavMenuLink href="#">Assets</NavMenuLink>
              </NavMenuSub>
            </div>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="solutions">
          <NavMenuTrigger>Solutions</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Enterprise</NavMenuLink>
            <NavMenuLink href="#">Startups</NavMenuLink>
            <NavMenuSeparator />
            <NavMenuLink href="#">Education</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="resources">
          <NavMenuTrigger>Resources</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Blog</NavMenuLink>
            <NavMenuLink href="#">Tutorials</NavMenuLink>
            <NavMenuLink href="#">API Reference</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuList>
      <NavMenuViewport />
    </NavMenu>
  ),
}

export const Vertical: Story = {
  render: () => (
    <NavMenu orientation="vertical" className="w-[200px]">
      <NavMenuList>
        <NavMenuItem value="dashboard">
          <NavMenuTrigger>Dashboard</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Overview</NavMenuLink>
            <NavMenuLink href="#">Analytics</NavMenuLink>
            <NavMenuLink href="#">Reports</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="settings">
          <NavMenuTrigger>Settings</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">General</NavMenuLink>
            <NavMenuLink href="#">Security</NavMenuLink>
            <NavMenuLink href="#">Billing</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">Help</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  ),
}

export const WithActiveLink: Story = {
  render: () => (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="docs">
          <NavMenuTrigger>Documentation</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#" active>Getting Started</NavMenuLink>
            <NavMenuLink href="#">Components</NavMenuLink>
            <NavMenuLink href="#">Theming</NavMenuLink>
            <NavMenuLink href="#">Examples</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="api">
          <NavMenuTrigger>API</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">REST API</NavMenuLink>
            <NavMenuLink href="#">GraphQL</NavMenuLink>
            <NavMenuLink href="#">Webhooks</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuList>
      <NavMenuViewport />
    </NavMenu>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem>
          <NavMenuLink href="#" active>Home</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">About</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">Services</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">Contact</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="features">
          <NavMenuTrigger>Features</NavMenuTrigger>
          <NavMenuContent className="w-[600px] p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Cloud Hosting</a></li>
                  <li><a href="#" className="hover:text-foreground">Database</a></li>
                  <li><a href="#" className="hover:text-foreground">Authentication</a></li>
                  <li><a href="#" className="hover:text-foreground">Storage</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Tools</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">CLI</a></li>
                  <li><a href="#" className="hover:text-foreground">Dashboard</a></li>
                  <li><a href="#" className="hover:text-foreground">Analytics</a></li>
                  <li><a href="#" className="hover:text-foreground">Monitoring</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Integrations</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">GitHub</a></li>
                  <li><a href="#" className="hover:text-foreground">GitLab</a></li>
                  <li><a href="#" className="hover:text-foreground">Bitbucket</a></li>
                  <li><a href="#" className="hover:text-foreground">Slack</a></li>
                </ul>
              </div>
            </div>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="pricing">
          <NavMenuTrigger>Pricing</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Free</NavMenuLink>
            <NavMenuLink href="#">Pro</NavMenuLink>
            <NavMenuLink href="#">Enterprise</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="#">Blog</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
      <NavMenuViewport />
    </NavMenu>
  ),
}
