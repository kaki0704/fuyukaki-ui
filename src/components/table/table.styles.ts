import { cva } from 'class-variance-authority'

export const tableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: '',
      striped: '[&_tbody_tr:nth-child(odd)]:bg-muted/30',
      bordered: 'border border-border',
    },
    size: {
      sm: '[&_td]:p-2 [&_th]:p-2',
      md: '[&_td]:p-3 [&_th]:p-3',
      lg: '[&_td]:p-4 [&_th]:p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export const tableHeaderVariants = cva('[&_tr]:border-b')

export const tableBodyVariants = cva('[&_tr:last-child]:border-0')

export const tableFooterVariants = cva('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0')

export const tableRowVariants = cva(
  'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  {
    variants: {
      selected: {
        true: 'bg-muted',
        false: '',
      },
    },
  }
)

export const tableHeadVariants = cva(
  'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      sortable: {
        true: 'cursor-pointer select-none hover:text-foreground',
        false: '',
      },
    },
  }
)

export const tableCellVariants = cva('p-4 align-middle [&:has([role=checkbox])]:pr-0')

export const tableCaptionVariants = cva('mt-4 text-sm text-muted-foreground')
