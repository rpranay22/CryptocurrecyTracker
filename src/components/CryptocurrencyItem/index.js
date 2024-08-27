import './index.css'
const CryptocurrencyItem = props => {
  const {item} = props
  const {currency_logo, currency_name, euro_value, usd_value} = item

  return (
    <li>
      <tr>
        <td>
          <div className="npr">
            <img className="cur-logo" src={currency_logo} alt={currency_name} />
            <p className="nm">{currency_name}</p>
          </div>
        </td>
        <td>
          <p>{euro_value}</p>
        </td>
        <td>
          <p>{usd_value}</p>
        </td>
      </tr>
    </li>
  )
}
export default CryptocurrencyItem
