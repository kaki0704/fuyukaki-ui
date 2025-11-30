import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>User List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Striped: Story = {
  render: () => (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Bordered: Story = {
  render: () => (
    <Table variant="bordered">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium">Small</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Medium (default)</h3>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Large</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
}

export const Sortable: Story = {
  render: function SortableTable() {
    const [sortKey, setSortKey] = useState<'name' | 'email' | 'role' | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const handleSort = (key: 'name' | 'email' | 'role') => {
      if (sortKey === key) {
        setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
      } else {
        setSortKey(key)
        setSortDirection('asc')
      }
    }

    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortKey) return 0
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      const modifier = sortDirection === 'asc' ? 1 : -1
      return aVal > bVal ? modifier : aVal < bVal ? -modifier : 0
    })

    return (
      <Table>
        <TableCaption>Sortable Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={sortKey === 'name' ? sortDirection : null}
              onSort={() => handleSort('name')}
            >
              Name
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortKey === 'email' ? sortDirection : null}
              onSort={() => handleSort('email')}
            >
              Email
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortKey === 'role' ? sortDirection : null}
              onSort={() => handleSort('role')}
            >
              Role
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const WithSelection: Story = {
  render: function SelectableTable() {
    const [selected, setSelected] = useState<Set<number>>(new Set())

    const toggleSelection = (id: number) => {
      setSelected((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(id)) {
          newSet.delete(id)
        } else {
          newSet.add(id)
        }
        return newSet
      })
    }

    return (
      <Table>
        <TableCaption>Selectable Table ({selected.size} selected)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Select</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((user) => (
            <TableRow key={user.id} selected={selected.has(user.id)}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selected.has(user.id)}
                  onChange={() => toggleSelection(user.id)}
                  className="cursor-pointer"
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableCaption>No data available</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
