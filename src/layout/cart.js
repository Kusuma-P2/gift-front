import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../database/productsData";


function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user);
  const { id } = user;

  const removeItem = async (_id) => {
    const res = await axios.post("http://localhost:8000/remove_cart", {
      uid: id,
      products: {
        _id,
      },
    });
    const arr = cartItem.filter(item => {
      return item._id !== _id
    })
    setCartItem(arr)
  };

  const calulate = () => {
    var value = 0;
    cartItem.map(item => {
      value=value+item.cost
    })
    setTotalPrice(value);
  };

  const getCartItems = async () => {
    const res = await axios.post("http://localhost:8000/get_cart", {
      uid: id,
    });
    console.log(res);
    if (res.data) {
      setCartItem(res.data.products);
    }
    
  };

  useEffect(() => {
      
      getCartItems();
  }, []);

  return (
    <div className="container cart">
      <div className="row">
        {cartItem.map((item) => (
          <div className="col-lg-12">
            <div className="card cart-card">
              <div className="cart-img">
                <img src={`/img/${item.image}`} className="img-fluid" />
              </div>

              <div className="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div className="d-flex">
                  <button
                    className="btn btn-danger px-5 ml-5"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                  <p className="ml-3 card-text">Rs {item.cost}</p>
                  {/* {setTotalPrice(totalPrice+item.cost)} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav
        class="fixed-bottom text-right"
        style={{
          background: "white",
          color: "black",
          boxShadow: "0 5px 20px rgba(0,0,0,.5)",
          padding: "20px 4rem",
          alignItems: "center",
        }}
      >
        {
          !cartItem.length && <button className='btn' onClick={() => getCartItems()}>Refresh</button>
        }
        <button className="btn btn-dark mr-3" onClick={() => calulate()}>
          Calculate
        </button>
        <button className="btn btn-success mr-3">Proceed to Pay</button>
        <span style={{ fontSize: "30px", fontWeight: "bolder" }}>
          Rs {totalPrice}
        </span>
      </nav>
    </div>
  );
}

export default Cart;
