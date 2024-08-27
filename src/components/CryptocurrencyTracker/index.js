import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'
class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-crypto">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
