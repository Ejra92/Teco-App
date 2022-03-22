import { generateDynamicStyle } from '../../utils/generateDynamicStyle'

const Item = ({ mb, title, data }) => {
  const conf = {
    boolean: mb,
    original: '',
    alt: 'mb-s'
  }
  const dynamicStyle = generateDynamicStyle(conf)

  return (
    <p className={`${dynamicStyle} font-m txt-c-main`}> 
      <strong>{title}:</strong> {data}
    </p>
  )
}

export default Item