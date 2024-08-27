import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
class CryptocurrenciesList extends Component {
  state = {
    lis: [],
    app: false,
  }

  componentDidMount() {
    this.setData()
  }
  setData = async () => {
    const data = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const deta = await data.json()
    this.setState({
      lis: [...deta],
      app: true,
    })
  }
  render() {
    const {lis, app} = this.state

    return app ? (
      <div className="currencies">
        <table>
          <tr>
            <th>Coin Type</th>
            <th>USD</th>
            <th>EURO</th>
          </tr>
          {lis.map(ele => (
            <CryptocurrencyItem key={ele.id} item={ele} />
          ))}
        </table>
      </div>
    ) : (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    )
  }
}
export default CryptocurrenciesList
