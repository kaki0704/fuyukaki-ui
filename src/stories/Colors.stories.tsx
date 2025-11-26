import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({ color, name, hex, usage }: { color: string; name: string; hex: string; usage: string }) => (
  <div className="flex flex-col gap-3 rounded-lg border border-border p-4 shadow-sm">
    <div className={`h-24 w-full rounded-md ${color}`} />
    <div>
      <div className="font-semibold text-foreground">{name}</div>
      <div className="text-sm text-muted-foreground">{hex}</div>
      <div className="mt-2 text-sm text-foreground">{usage}</div>
    </div>
  </div>
)

export const WarmAndOrganic: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Warm & Organic Color Palette</h1>
        <p className="text-lg text-muted-foreground mb-4">
          "Natural warmth for your interface."
        </p>
        <p className="text-foreground max-w-3xl">
          @persimmon/ui follows a unique <strong>"No Black, No Gray"</strong> design philosophy.
          Instead of sterile grays and harsh blacks, we use warm earth tones inspired by nature.
          These colors create interfaces that are easier on the eyes, feel more human, and stand
          out from the sea of monochrome UIs.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Primary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch
            color="bg-primary"
            name="柿色 (Persimmon)"
            hex="#EB6101"
            usage="Main action color. Used for buttons, links, and active states."
          />
          <ColorSwatch
            color="bg-secondary"
            name="葉色 (Leaf Green)"
            hex="#6A8347"
            usage="Positive actions, success messages, and natural accents."
          />
          <ColorSwatch
            color="bg-destructive"
            name="深柿 (Deep Persimmon)"
            hex="#CB4B32"
            usage="Error states and destructive actions. Warm red-brown tone."
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Neutral Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch
            color="bg-foreground"
            name="渋色 (Shibu Brown)"
            hex="#4E3D35"
            usage="Text color. Replaces pure black with warm brown."
          />
          <ColorSwatch
            color="bg-background"
            name="生成り (Off White)"
            hex="#FAF7F2"
            usage="Page background. Paper-like warm white instead of stark white."
          />
          <ColorSwatch
            color="bg-card"
            name="淡柿 (Pale Orange)"
            hex="#FCEDE6"
            usage="Card and surface backgrounds. Gentle warm tone."
          />
          <ColorSwatch
            color="bg-muted"
            name="枯れ葉色 (Dried Leaf)"
            hex="#E8DED0"
            usage="Muted backgrounds. Warm beige replaces gray."
          />
          <ColorSwatch
            color="bg-border"
            name="薄茶 (Light Brown)"
            hex="#E8DED0"
            usage="Borders and dividers. Warm instead of cold gray."
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-card rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-3">Design Principles</h2>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>No pure black (#000000):</strong> We use 渋色 (Shibu Brown) for text, creating a softer, warmer appearance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>No pure white (#FFFFFF):</strong> Backgrounds use 生成り (Off White) for a paper-like quality.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>No gray (#808080):</strong> All neutral tones have warm undertones from browns and beiges.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>Shadows use brown:</strong> box-shadow: 0 4px 6px rgba(78, 61, 53, 0.2) instead of black shadows.</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-secondary/10 rounded-lg border border-secondary/20">
        <h2 className="text-xl font-semibold text-foreground mb-3">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
          <div>
            <div className="font-semibold">🍽️ Food & Culinary</div>
            <div className="text-sm text-muted-foreground">Restaurants, cafes, recipe sites</div>
          </div>
          <div>
            <div className="font-semibold">🌿 Lifestyle & Wellness</div>
            <div className="text-sm text-muted-foreground">Organic products, yoga, meditation</div>
          </div>
          <div>
            <div className="font-semibold">🏯 Japanese & Traditional</div>
            <div className="text-sm text-muted-foreground">Cultural sites, crafts, hospitality</div>
          </div>
          <div>
            <div className="font-semibold">🛍️ D2C & Artisan Brands</div>
            <div className="text-sm text-muted-foreground">Handmade goods, natural products</div>
          </div>
        </div>
      </div>
    </div>
  ),
}
