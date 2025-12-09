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
            <NavMenuLink href="/docs/introduction">Introduction</NavMenuLink>
            <NavMenuLink href="/docs/installation">Installation</NavMenuLink>
            <NavMenuLink href="/docs/quick-start">Quick Start</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="components">
          <NavMenuTrigger>Components</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/components/button">Button</NavMenuLink>
            <NavMenuLink href="/components/input">Input</NavMenuLink>
            <NavMenuLink href="/components/select">Select</NavMenuLink>
            <NavMenuLink href="/components/modal">Modal</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/docs">Documentation</NavMenuLink>
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
                <NavMenuLink href="/products/ide">IDE</NavMenuLink>
                <NavMenuLink href="/products/version-control">Version Control</NavMenuLink>
                <NavMenuLink href="/products/ci-cd">CI/CD</NavMenuLink>
              </NavMenuSub>
              <NavMenuSub title="Design">
                <NavMenuLink href="/products/ui-kit">UI Kit</NavMenuLink>
                <NavMenuLink href="/products/prototyping">Prototyping</NavMenuLink>
                <NavMenuLink href="/products/assets">Assets</NavMenuLink>
              </NavMenuSub>
            </div>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="solutions">
          <NavMenuTrigger>Solutions</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/solutions/enterprise">Enterprise</NavMenuLink>
            <NavMenuLink href="/solutions/startups">Startups</NavMenuLink>
            <NavMenuSeparator />
            <NavMenuLink href="/solutions/education">Education</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="resources">
          <NavMenuTrigger>Resources</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/blog">Blog</NavMenuLink>
            <NavMenuLink href="/tutorials">Tutorials</NavMenuLink>
            <NavMenuLink href="/api">API Reference</NavMenuLink>
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
            <NavMenuLink href="/dashboard/overview">Overview</NavMenuLink>
            <NavMenuLink href="/dashboard/analytics">Analytics</NavMenuLink>
            <NavMenuLink href="/dashboard/reports">Reports</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="settings">
          <NavMenuTrigger>Settings</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/settings/general">General</NavMenuLink>
            <NavMenuLink href="/settings/security">Security</NavMenuLink>
            <NavMenuLink href="/settings/billing">Billing</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/help">Help</NavMenuLink>
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
            <NavMenuLink href="/docs/getting-started" active>
              Getting Started
            </NavMenuLink>
            <NavMenuLink href="/docs/components">Components</NavMenuLink>
            <NavMenuLink href="/docs/theming">Theming</NavMenuLink>
            <NavMenuLink href="/docs/examples">Examples</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="api">
          <NavMenuTrigger>API</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/api/rest">REST API</NavMenuLink>
            <NavMenuLink href="/api/graphql">GraphQL</NavMenuLink>
            <NavMenuLink href="/api/webhooks">Webhooks</NavMenuLink>
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
          <NavMenuLink href="/" active>
            Home
          </NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/about">About</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/services">Services</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/contact">Contact</NavMenuLink>
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
                  <li>
                    <a href="/platform/cloud-hosting" className="hover:text-foreground">
                      Cloud Hosting
                    </a>
                  </li>
                  <li>
                    <a href="/platform/database" className="hover:text-foreground">
                      Database
                    </a>
                  </li>
                  <li>
                    <a href="/platform/authentication" className="hover:text-foreground">
                      Authentication
                    </a>
                  </li>
                  <li>
                    <a href="/platform/storage" className="hover:text-foreground">
                      Storage
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Tools</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/tools/cli" className="hover:text-foreground">
                      CLI
                    </a>
                  </li>
                  <li>
                    <a href="/tools/dashboard" className="hover:text-foreground">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/tools/analytics" className="hover:text-foreground">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="/tools/monitoring" className="hover:text-foreground">
                      Monitoring
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Integrations</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/integrations/github" className="hover:text-foreground">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="/integrations/gitlab" className="hover:text-foreground">
                      GitLab
                    </a>
                  </li>
                  <li>
                    <a href="/integrations/bitbucket" className="hover:text-foreground">
                      Bitbucket
                    </a>
                  </li>
                  <li>
                    <a href="/integrations/slack" className="hover:text-foreground">
                      Slack
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="pricing">
          <NavMenuTrigger>Pricing</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/pricing/free">Free</NavMenuLink>
            <NavMenuLink href="/pricing/pro">Pro</NavMenuLink>
            <NavMenuLink href="/pricing/enterprise">Enterprise</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="/blog">Blog</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
      <NavMenuViewport />
    </NavMenu>
  ),
}
