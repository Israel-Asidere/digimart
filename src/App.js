import './App.css'
import checkbox from './icons/checked-active.svg'
import uncheckedbox from './icons/checkedbox-inactive.svg'
import bluejeans from './images/blue-jeans.png'
import redshirt from './images/red-shirt.png'

function App () {
  return (
    <div className=''>
      <div className='header'>Header</div>
      <div className='container'>
        <div className='section1'>
          <div className='title'>
            <h4>
              <div className='float-left'>
                <img src={checkbox} alt='checkbox'></img>
                1. ADDRESS DETAILS{' '}
              </div>
              <div className='float-right'>CHANGE</div>
              <div style={{ clear: 'right' }}></div>
              <hr />
            </h4>
          </div>
          <div className='body'>
            <h4>Damilola Daniels</h4>
            <p>22 Daniels Steet, Yaba, Lagos</p>
            <p>+234908484848</p>
          </div>
        </div>

        <div className='side-section'>
          <div className='inner-grid'>
            <div className='cart'>
              <div className='cartFloatLeft'>
                <h3>Cart(2)</h3>
              </div>
              <div className='invoiceFloatRight'>
                <h3>INVOICE</h3>
              </div>
              <div className='inner-grid-image'>
                <img
                  src={bluejeans}
                  alt='blue-jeans'
                  className='cart-image'
                ></img>
              </div>
              <div className='inner-grid-details'>
                <p className='bold-text'>ROUNDNECK T-SHIRT</p>

                <p className='bold-text'>₦5,000</p>
                <p className='bold-text'>Qty: 1</p>
              </div>
              <div className='inner-grid-size'>
                <p className='bold-text-ash'>M</p>
              </div>

              <div className='inner-grid-image-two'>
                <img
                  src={redshirt}
                  alt='blue-jeans'
                  className='cart-image'
                ></img>
              </div>

              <div className='inner-grid-details-two'>
                <p className='bold-text'>ROUNDNECK T-SHIRT</p>
                <p className='bold-text'>₦10,000</p>
                <p>Qty: 1</p>
              </div>
              <div className='inner-grid-size-two'>
                <p className='bold-text-ash'>W32 L10</p>
              </div>
            </div>

            {/* <hr /> */}
            <div className='subtotal'>
              <p>Subtotal</p>
              <p>₦15,000</p>
              <p>Delivery</p>
              <p className='bold-text'>₦1,500</p>
              <p>Promotion Discount</p>
              <p>-₦1000</p>
              <p>Transaction Cost</p>
              <p>₦200</p>
              <p>VAT(3%)</p>
              <p>₦450</p>
            </div>
            {/* <hr /> */}

            <div className='total'>
              <div className='left-total'>
                <h4>Total</h4>
              </div>
              <div className='total-price'>
                <h4>₦16,150</h4>
              </div>
            </div>
            {/* <hr /> */}
            <div className='modifyCart'>
              <h3>MODIFY CART</h3>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='title'>
            <h4>
              <div className='content-left'>
                <img
                  src={checkbox}
                  alt='checkbox'
                  className='checkedImageLeft'
                ></img>{' '}
                2. SHIPMENT DETAILS
              </div>
              <hr />
            </h4>
          </div>
          <div className='body'>
            <div className='body-content'>
              <div className='body-content-text'>
                <h4> Shipment 1 of 1</h4>
                <p>x1 Round Neck t-shirt</p>
                <p>x1 Blue Jean Trousers</p>
                <p>
                  Delivered by <strong>Monday 27 Jun</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='section3'>
          <div className='title'>
            <h4>
              <img
                src={uncheckedbox}
                alt='checkbox'
                className='checkedImageLeft'
              ></img>{' '}
              3. PAYMENT METHOD
              <hr />
            </h4>
          </div>
          <div className='body'>
            <p> How do you want to pay for your order?</p>
            <p>
              <input type='radio' />
              Pay Now
            </p>
            <p>
              <input type='radio' />
              Pay On Delivery
            </p>
            <p>
              <input type='radio' />
              Pay At Store
            </p>
            <p>
              <input type='radio' />
              Vendor Agreement
            </p>
          </div>
        </div>
        <div className='section4'>
          <button className='button-close-deal'>CLOSE DEAL WITH VENDOR</button>
          <br />
          <button className='button-pay'>PAY ₦16,150</button>
        </div>
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

export default App
