type Props = {
    variant: 'red' | 'green' | 'yellow'
}
 const Redbutton = ({variant = 'red'}: Props) => {
  return (
    <button style={{
        background: variant
    }}>Click me!</button>
  )
}
export default Redbutton