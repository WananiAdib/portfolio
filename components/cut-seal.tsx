import styles from './cut-seal.module.css'

// The approved 23 × 17 Cut seal, rendered as horizontal HTML grid runs.
const ROWS = [
  '00111111111111111111100',
  '01111111111111111111110',
  '11111111111111111111011',
  '11111111111111111111011',
  '11011111110101000001011',
  '11011111110101111101011',
  '11000000000001000001011',
  '11111111111111111111111',
  '11111111110111111101011',
  '11111111110111111101011',
  '11010001010101000101011',
  '11010101010101010101011',
  '11000100010001000001011',
  '11111111111111110111111',
  '11111111111111000111111',
  '01111111111111111111110',
  '00111111111111111111100',
] as const
const RUNS = ROWS.flatMap((row, y) =>
  Array.from(row.matchAll(/1+/g), (run) => ({
    x: run.index,
    y,
    width: run[0].length,
  })),
)

export function CutSeal({
  className = '',
  decorative = false,
}: {
  className?: string
  decorative?: boolean
}) {
  return (
    <span
      className={`${styles.seal} ${className}`}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : 'أديب الوناني'}
      lang={decorative ? undefined : 'ar'}
      data-cut-seal
    >
      {RUNS.map((run) => (
        <span
          className={styles.run}
          key={`${run.x}-${run.y}`}
          style={{
            gridColumn: `${run.x + 1} / span ${run.width}`,
            gridRow: run.y + 1,
          }}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}
