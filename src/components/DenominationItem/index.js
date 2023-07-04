// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationItem, clickDenomination} = props
  const {value} = denominationItem

  const withDrawAmount = () => {
    clickDenomination(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={withDrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
