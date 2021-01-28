import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Cart.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Cart() {
  return (
    <div>
    <Header />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="8">
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h5 className="mb-4">
                  Cart (<span>2</span> items)
                </h5>
                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img
                        className="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                        alt="Sample"
                      />
                      <a href="#!">
                        <div className="mask">
                          <img
                            className="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                          />
                          <div className="mask rgba-black-slight"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div style={{ textAlign: 'left' }}>
                          <h5>Blue denim shirt</h5>
                          <p className="mb-3 text-muted text-uppercase small margin-none">
                            Shirt - blue
                          </p>
                          <p className="mb-2 text-muted text-uppercase small margin-none">
                            Color: blue
                          </p>
                          <p className="mb-3 text-muted text-uppercase small margin-none">
                            Size: M
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            href="#!"
                            type="button"
                            className="card-link-secondary small text-uppercase mr-3"
                          >
                            <i className="fas fa-trash-alt mr-1"></i> Remove
                            item{' '}
                          </a>
                          <a
                            href="#!"
                            type="button"
                            className="card-link-secondary small text-uppercase"
                          >
                            <i className="fas fa-heart mr-1"></i> Move to wish
                            list{' '}
                          </a>
                        </div>
                        <p className="mb-0">
                          <span>
                            <strong id="summary">$17.99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img
                        className="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                        alt="Sample"
                      />
                      <a href="#!">
                        <div className="mask">
                          <img
                            className="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                          />
                          <div className="mask rgba-black-slight"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div style={{ textAlign: 'left' }}>
                          <h5>Red hoodie</h5>
                          <p className="mb-3 text-muted text-uppercase small  margin-none">
                            Shirt - red
                          </p>
                          <p className="mb-2 text-muted text-uppercase small  margin-none">
                            Color: red
                          </p>
                          <p className="mb-3 text-muted text-uppercase small  margin-none">
                            Size: M
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            href="#!"
                            type="button"
                            className="card-link-secondary small text-uppercase mr-3"
                          >
                            <i className="fas fa-trash-alt mr-1"></i> Remove
                            item{' '}
                          </a>
                          <a
                            href="#!"
                            type="button"
                            className="card-link-secondary small text-uppercase"
                          >
                            <i className="fas fa-heart mr-1"></i> Move to wish
                            list{' '}
                          </a>
                        </div>
                        <p className="mb-0">
                          <span>
                            <strong>$35.99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-primary mb-0">
                  <i className="fas fa-info-circle mr-1"></i> Do not delay the
                  purchase, adding items to your cart does not mean booking
                  them.
                </p>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-3">The total amount of</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$25.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-block">
                  go to checkout
                </button>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-4">
                <a
                  className="dark-grey-text d-flex justify-content-between"
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Add a discount code (optional)
                  <span>
                    <i className="fas fa-chevron-down pt-1"></i>
                  </span>
                </a>

                <div className="collapse" id="collapseExample">
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="discount-code"
                        className="form-control font-weight-light"
                        placeholder="Enter discount code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Cart;
