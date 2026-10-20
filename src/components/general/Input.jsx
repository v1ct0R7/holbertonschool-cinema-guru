import './general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Input({
  label, type, className, value, setValue, icon, inputAttributes = {},
}) {
  const handleInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="input-container">
      <label>{label}</label>

      <div className="input-wrapper">
        <input
          type={type}
          className={className}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />

        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
    </div>
  )
}

export default Input