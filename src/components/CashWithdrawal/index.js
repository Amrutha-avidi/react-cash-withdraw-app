// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  clickDenomination = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-bg">
        <div className="card-bg">
          <div className="name-container">
            <p className="name-logo">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="amount-card">
            <p className="amount-card-head">Your Balance</p>
            <div>
              <p className="amount-card-balance">{balance}</p>
              <p className="amount-card-para">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-card-head">Withdraw</p>
            <p className="withdraw-card-para">CHOOSE SUM (IN RUPEES)</p>
            <div className="withdraw-card-button-container">
              <ul className="button-item">
                {denominationsList.map(eachItem => (
                  <DenominationItem
                    denominationItem={eachItem}
                    clickDenomination={this.clickDenomination}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
