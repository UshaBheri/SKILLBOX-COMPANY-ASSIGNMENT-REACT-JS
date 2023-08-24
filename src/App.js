import {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {productSelected: null}
  }

  render() {
    const {productSelected} = this.state

    return (
      <div className="product-container">
        <h1 className="heading">Bundle & Save</h1>
        <div className="card-container">
          <input type="radio" />
          <div className="card1">
            <p className="details">1 pair</p>
            <p className="cost">DKK 195.00</p>
          </div>
          <p className="discount">50% OFF</p>
        </div>
        <div className="card-container1">
          <input type="radio" />
          <div className="card2">
            <p className="details">2 pair</p>
            <div className="prices">
              <p className="cost">DKK 345.00</p>
              <p className="previous-cost">DKK 195.00</p>
            </div>
            <div className="details-card">
              <div className="size-card">
                <h1 className="size">Size</h1>
                <select>
                  <option value="s">S</option>
                </select>
                <div>
                  <select>
                    <option value="s">S</option>
                  </select>
                </div>
              </div>
              <div>
                <h1 className="color">Color</h1>
                <select>
                  <option value="color">Color</option>
                </select>
                <div>
                  <select>
                    <option value="color">Color</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <p className="text">Most Popular</p>
            <p className="discount">40% OFF</p>
          </div>
        </div>
        <div className="card-container">
          <input type="radio" />
          <div className="card3">
            <p className="details">3 pair</p>
            <p className="cost">DKK 528.00</p>
          </div>
          <p className="discount">60% OFF</p>
        </div>
        <div className="shipping-container">
          <h1 className="shipping">Free 2 Day Shipping</h1>
          <p className="total-price">Total : DKK 360.00</p>
        </div>
        <div className="btn-container">
          <button type="button" className="button">
            + Add to Cart
          </button>
        </div>
        <div className="footer-container">
          <p className="footer">@ Powered by Pumper</p>
        </div>
        {productSelected && (
          <div>
            <h1>Products</h1>
          </div>
        )}
      </div>
    )
  }
}

export default App
