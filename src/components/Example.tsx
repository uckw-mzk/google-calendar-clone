import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export type ExampleProps = Props

/** Storybook用サンプルコンポーネント */
export const Example = ({ children }: Props) => {
  return (
    <div>
      <span>Example: </span>
      <span style={{ color: 'red', fontWeight: 'bold' }} data-testid="example-label">
        {children}
      </span>
    </div>
  )
}
