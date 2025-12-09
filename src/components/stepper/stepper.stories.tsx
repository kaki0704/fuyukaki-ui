import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import { Step, StepDescription, StepTitle, Stepper } from './stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = [
  { id: 'account', title: 'Account', description: 'Create your account' },
  { id: 'profile', title: 'Profile', description: 'Set up your profile' },
  { id: 'review', title: 'Review', description: 'Review and confirm' },
]

export const Default: Story = {
  render: () => (
    <Stepper activeStep={1} className="w-[500px]">
      {steps.map((step) => (
        <Step key={step.id}>
          <StepTitle>{step.title}</StepTitle>
        </Step>
      ))}
    </Stepper>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Stepper activeStep={1} className="w-[600px]">
      {steps.map((step) => (
        <Step key={step.id}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </Step>
      ))}
    </Stepper>
  ),
}

export const AllSteps: Story = {
  render: () => (
    <div className="space-y-8 w-[600px]">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Step 0 (first)</p>
        <Stepper activeStep={0}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Step 1 (middle)</p>
        <Stepper activeStep={1}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Step 2 (last)</p>
        <Stepper activeStep={2}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Completed</p>
        <Stepper activeStep={3}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stepper activeStep={1} orientation="vertical" className="h-[300px]">
      {steps.map((step) => (
        <Step key={step.id}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </Step>
      ))}
    </Stepper>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 w-[600px]">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small</p>
        <Stepper activeStep={1} size="sm">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium (default)</p>
        <Stepper activeStep={1} size="md">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large</p>
        <Stepper activeStep={1} size="lg">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-8 w-[600px]">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Default</p>
        <Stepper activeStep={1} variant="default">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Outline</p>
        <Stepper activeStep={1} variant="outline">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Ghost</p>
        <Stepper activeStep={1} variant="ghost">
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  ),
}

export const WithOptionalStep: Story = {
  render: () => (
    <Stepper activeStep={1} className="w-[600px]">
      <Step>
        <StepTitle>Account</StepTitle>
        <StepDescription>Create your account</StepDescription>
      </Step>
      <Step optional>
        <StepTitle>Profile Picture</StepTitle>
        <StepDescription>Upload a profile picture</StepDescription>
      </Step>
      <Step>
        <StepTitle>Complete</StepTitle>
        <StepDescription>Finish setup</StepDescription>
      </Step>
    </Stepper>
  ),
}

export const WithError: Story = {
  render: () => (
    <Stepper activeStep={1} className="w-[600px]">
      <Step>
        <StepTitle>Account</StepTitle>
        <StepDescription>Create your account</StepDescription>
      </Step>
      <Step error>
        <StepTitle>Verification</StepTitle>
        <StepDescription>Verification failed</StepDescription>
      </Step>
      <Step disabled>
        <StepTitle>Complete</StepTitle>
        <StepDescription>Finish setup</StepDescription>
      </Step>
    </Stepper>
  ),
}

export const Interactive: Story = {
  render: function InteractiveStepper() {
    const [activeStep, setActiveStep] = useState(0)

    return (
      <div className="w-[600px] space-y-8">
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </Stepper>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}
            disabled={activeStep === steps.length}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>

        {activeStep === steps.length && (
          <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="text-green-600 dark:text-green-400 font-medium">All steps completed!</p>
          </div>
        )}
      </div>
    )
  },
}

export const ManySteps: Story = {
  render: () => (
    <Stepper activeStep={3} className="w-[800px]">
      <Step>
        <StepTitle>Cart</StepTitle>
      </Step>
      <Step>
        <StepTitle>Address</StepTitle>
      </Step>
      <Step>
        <StepTitle>Shipping</StepTitle>
      </Step>
      <Step>
        <StepTitle>Payment</StepTitle>
      </Step>
      <Step>
        <StepTitle>Review</StepTitle>
      </Step>
      <Step>
        <StepTitle>Confirm</StepTitle>
      </Step>
    </Stepper>
  ),
}
