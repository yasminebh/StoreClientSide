import React from 'react'

const ShopSideBar = () => {
  return (
    <>
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1">
                $0 - $100
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">
                $100 - $200
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">
                $200 - $300
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">
                $300 - $400
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">
                $400 - $500
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked
                id="color-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Color
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-1"
              />
              <label className="custom-control-label" htmlFor="color-1">
                Black
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-2"
              />
              <label className="custom-control-label" htmlFor="color-2">
                White
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-3"
              />
              <label className="custom-control-label" htmlFor="color-3">
                Red
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-4"
              />
              <label className="custom-control-label" htmlFor="color-4">
                Blue
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-5"
              />
              <label className="custom-control-label" htmlFor="color-5">
                Green
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All Size
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                XS
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
                S
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
                M
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                L
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
                XL
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
    </>
  );
}

export default ShopSideBar