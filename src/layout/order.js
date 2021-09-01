import React from "react";

export default function Order() {
  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <div className="card" style={{ marginTop: "15%", width: "900px" }}>
        <div className="card-body">
          <form>
            <h2 className="title-box text-center ">Order Page</h2>
            <div className="form-group">
              <label for="">Order Id :</label>
              <input
                type="text"
                className="form-control"
                name="ordid"
                id="ordid"
              />
              <br />
            </div>

            <label for="">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
            />
            <br />

            <label for="">Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              requred
            />
            <br />

            <label for="">Contact No</label>
            <input
              type="tel"
              className="form-control"
              name="contact"
              id="contact"
              requred
            />
            <br />

            <label for="">Product</label>
            <input
              type="text"
              className="form-control"
              name="product"
              id="product"
            />
            <br />

            <label for="">Color Combinations you want</label>
            <input
              type="text"
              className="form-control"
              name="color"
              id="color"
            />
            <br />

            <div className="form-group">
              <label for="">Cost</label>
              <input
                type="text"
                className="form-control"
                name="cost"
                id="cost"
              />
              <br />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="button button-a button-big button-rouded ml-5 py-1"
                name="submit"
                value="Place Order"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
