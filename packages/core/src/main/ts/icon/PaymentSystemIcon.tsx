import React, { FC } from 'react'

import { Path, Svg } from '../primitive'

export interface PaymentSystemIconProps {
  name: 'mastercard' | 'visa' | 'mir'
  gray?: boolean
}

const IconPath: {
  [name in PaymentSystemIconProps['name']]: [
    string,
    string,
    string,
    'evenodd' | 'inherit' | 'nonzero' | undefined,
  ][]
} = {
  mastercard: [
    ['#F46B3E', 'M20 4h8v16h-8z', '#999', 'evenodd'],
    [
      '#F14840',
      'M20.22 12c0-3.07 1.4-5.97 3.78-7.86a9.81 9.81 0 0 0-13.38 1.08 10.08 10.08 0 0 0 0 13.56A9.81 9.81 0 0 0 24 19.86 10.02 10.02 0 0 1 20.22 12z',
      '#666',
      'evenodd',
    ],
    [
      '#FC9F3A',
      'M40 12a10 10 0 0 1-5.57 9A9.8 9.8 0 0 1 24 19.85a10.04 10.04 0 0 0 0-15.72A9.8 9.8 0 0 1 34.43 3 10 10 0 0 1 40 12z',
      '#ccc',
      'evenodd',
    ],
  ],
  mir: [
    [
      '#4DB45E',
      'M12.93 5s-1.87 0-2.37 1.84l-1.78 6.47h-.35S7.1 8.55 6.65 6.83C6.15 5 4.27 5 4.27 5H0v14h4.27v-8.31h.36L7.12 19h2.97l2.49-8.3h.35V19h4.28V5h-4.28zM28.54 5s-1.25.12-1.84 1.47l-3.03 6.84h-.35V5h-4.27v14h4.03s1.31-.12 1.9-1.47l2.97-6.84h.35V19h4.27V5h-4.03zM34.47 11.36V19h4.27v-4.46h4.63a4.63 4.63 0 0 0 4.36-3.18H34.47z',
      '#999',
      'evenodd',
    ],
    [
      '#00A9E4',
      'M43.37 5h-9.5a6.95 6.95 0 0 0 4.93 5.5c.57.16 1.17.25 1.78.25h7.33c.06-.32.09-.65.09-.98A4.7 4.7 0 0 0 43.37 5z',
      '#999',
      'evenodd',
    ],
  ],
  visa: [
    [
      '#1A1F71',
      'M24.47 8.93c.02-2.82 2.68-4.78 6.46-4.78 1.47 0 2.66.31 3.58.64l-.68 3.07a7.36 7.36 0 0 0-3.77-.65c-1.1.14-1.6.7-1.62 1.21-.03 1.7 5.38 1.92 5.36 5.74-.01 3-2.64 4.95-6.66 4.95a11.8 11.8 0 0 1-4.25-.77l.7-3.17c.88.4 2 .94 3.92.91 1.1-.01 2.28-.44 2.29-1.41 0-.64-.5-1.1-1.98-1.8-1.45-.7-3.38-1.86-3.35-3.94zm16.5-4.52h3.26l3.08 14.47h-3.53l-.46-2.16h-4.9l-.8 2.16H33.6l5.74-13.4c.26-.66.9-1.08 1.63-1.08zm.56 3.91l-2.03 5.44h3.17l-1.15-5.44zM19.6 4.42h3.83l-3.16 14.46h-3.83L19.6 4.41zm-5.65 0h4.01l-6.19 14.46H7.73L4.68 7.33c-.19-.7-.35-.97-.9-1.27-.94-.49-2.45-.94-3.78-1.23l.09-.42h6.5c.83 0 1.58.54 1.77 1.48l1.6 8.37 4-9.85z',
      '#999',
      'evenodd',
    ],
  ],
}

export const PaymentSystemIcon: FC<PaymentSystemIconProps> = ({
  name,
  gray,
}) => (
  <Svg width={1} height={1} viewBox="0 0 48 24" focusable="false">
    {IconPath[name].map((path, i) => (
      <Path
        key={i}
        fill={gray ? path[2] : path[0]}
        d={path[1]}
        fillRule={path[3]}
      />
    ))}
  </Svg>
)

PaymentSystemIcon.displayName = 'PaymentSystemIcon'
