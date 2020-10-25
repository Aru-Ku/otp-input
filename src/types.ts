export type Ref = React.RefObject<HTMLDivElement>

export type OtpProps = {
  count: number,
  id: string,
  variant: `box` | `line`,
  borderColor: string,
  borderWidth: number,
  outline: string,
  value: string
}