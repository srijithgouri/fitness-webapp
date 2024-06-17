import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Order.css";
import parsePhoneNumber from "libphonenumber-js";
import { useState } from "react";
import html2canvas from "html2canvas";
import { useSiteData } from "../context/SiteDataContext";

const OrderForm = () => {
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [receiptId, setReceiptId] = useState(
    "receipt#" + Math.floor(Math.random() * 1000) + Date.now(),
  );
  const [paymentData, setPaymentData] = useState(null);

  const data = useSiteData();
  const { pid } = useParams();

  const prefix = pid.slice(0, 2);
  function getItemById(planType, id) {
    const plan = data.pages.plans[planType].find((item) => item.id === id);
    return plan;
  }

  const planById = getItemById(prefix, pid);

  const createOrder = async () => {
    setReceiptId("receipt#" + Math.floor(Math.random() * 1000) + Date.now());
    try {
      let response = await fetch("https://fitnessfreaksindians.com/pay.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(planById.price) * 100,
          currency: "INR",
          receipt: "receipt#" + receiptId,
          payment_capture: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Error in creating order");
      }

      let data = await response.json();

      return data;
    } catch (error) {
      console.error("Error in createOrder:", error.message);
      alert("Error in creating order. Please try again later.");
      throw error;
    }
  };

  const paymentHandler = async (e) => {
    if (name === "") {
      alert("Please provide your name.");
      return;
    } else if (email === "") {
      alert("Please provide your email.");
      return;
    } else if (phoneNumber === "") {
      alert("Please provide your phone number.");
      return;
    } else if (address === "") {
      alert("Please provide your address.");
      return;
    }

    e.preventDefault();

    const order = await createOrder();
    if (order === undefined) {
      alert("Error in creating order. Please try again later.");
      return;
    }
    const options = {
      key: data.rzpkey,
      amount: Number(planById.price) * 100,
      currency: "INR",
      name: "Fitness Freaks Indians",
      description: "Welcome to Fitness Freaks Indians!",
      image: "https://fitnessfreaksindians.com/logo.svg",
      order_id: order.razorpay_order_id,
      handler(response) {
        if (
          response.razorpay_payment_id === undefined ||
          response.razorpay_signature === undefined
        ) {
          alert("Payment failed. Please try again later.");
          return;
        }

        fetch("https://fitnessfreaksindians.com/verify.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            plan: planById,
            receiptId: receiptId,
          }),
        })
          .then(async (response) => {
            if (!response.ok) {
              throw new Error("Error in verifying payment");
            }
            let response_data = await response.json();

            setPaymentData(response_data);
          })
          .catch((error) => {
            console.error("Error in verifying payment:", error.message);
            alert("Error in verifying payment. Please try again later.");
          });
      },
      prefill: {
        name: name,
        email: email,
        contact: phoneNumber,
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#8a2be2",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("receipt");
    element.style.minWidth = "450px";
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");
    element.style.minWidth = "300px";

    const link = document.createElement("a");

    link.href = data;
    link.download = paymentData.receiptId.replace(/#/g, "_") + ".jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header />
      <section className="order-section">
        {paymentData === null ? (
          <div className="order-container">
            <div className="order-heading">
              <h2>Buy subscription</h2>
            </div>
            <div className="order-content">
              <div className="order-form">
                <div className="order-form-top">
                  <div className="order-form-con">
                    <span className="order-send-message">
                      Enter Payment Details
                    </span>
                    <p>
                      Please provide the correct name, phone number, address,
                      and check the subscription details before you buy.
                    </p>
                  </div>
                </div>
                <div className="order-form-bottom">
                  <form
                    id="orderForm"
                    className="orderForm"
                    onSubmit={paymentHandler}
                  >
                    <div className="form-group">
                      <label htmlFor="subscriptionTitle">Title</label>
                      <input
                        type="text"
                        id="subscriptionTitle"
                        name="subscriptionTitle"
                        value={planById.title}
                        disabled={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="PlanType">Plan Type</label>
                      <input
                        type="text"
                        id="PlanType"
                        name="PlanType"
                        value={prefix === "wl" ? "Weight loss" : "Weight gain"}
                        disabled={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={(e) => {
                          const email = e.target.value;
                          const emailPattern =
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                          if (!email.match(emailPattern)) {
                            setEmailError("Invalid email");
                          } else {
                            setEmailError("");
                            setEmail(email);
                          }
                        }}
                      />
                      <span className="error-message">{emailError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone number</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone number"
                        onChange={(e) => {
                          const phoneNumber = e.target.value;
                          try {
                            const pn = parsePhoneNumber(phoneNumber, "IN");
                            if (!pn.isValid()) {
                              setPhoneNumberError("Invalid phone number");
                            } else {
                              setPhoneNumberError("");
                              setPhoneNumber(phoneNumber);
                            }
                          } catch (error) {
                            setPhoneNumberError("Invalid phone number");
                          }
                        }}
                        required
                      />
                      <span className="error-message">{phoneNumberError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Your Address"
                        required
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-submit">
                        {"Pay ₹ " + planById.price}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="receipt-container" id="receipt">
            <div className="receipt-border">
              <h1 className="receipt-heading">Payment Receipt</h1>
              <div className="receipt-svg">
                <div className="receipt-svg-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="green"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM6.5 11.793l-2.647-2.647a.5.5 0 0 1 .707-.707L6.5 10.38l4.853-4.853a.5.5 0 0 1 .707.707L6.5 11.793Z"
                    />
                  </svg>
                  <h3>Payment Successful</h3>
                </div>
              </div>

              <div className="receipt-details">
                <div className="receipt-section">
                  <h3>Transaction Details:</h3>
                  <p>
                    <strong>Receipt ID</strong> : {paymentData.receiptId}
                  </p>
                  <p>
                    <strong>Order ID</strong> : {paymentData.razorpay_order_id}
                  </p>
                  <p>
                    <strong>Payment ID</strong> :{" "}
                    {paymentData.razorpay_payment_id}
                  </p>
                </div>
                <div className="receipt-section">
                  <h3>Customer Information:</h3>
                  <p>
                    <strong>Name</strong> : {paymentData.name}
                  </p>
                  <p>
                    <strong>Email</strong> : {paymentData.email}
                  </p>
                  <p>
                    <strong>Address</strong> : {paymentData.address}
                  </p>
                </div>
                <div className="receipt-section">
                  <h3>Plan Information:</h3>
                  <p>
                    <strong>Plan</strong> : {paymentData.plan.title}
                  </p>
                  <p>
                    <strong>Price</strong> : ₹ {paymentData.plan.cutPrice}
                  </p>
                  <p>
                    <strong>Discount</strong> : ₹ {paymentData.plan.savePrice}
                  </p>
                </div>
                <div className="receipt-section">
                  <p>
                    <strong>Total Price</strong> : ₹ {paymentData.plan.price}
                  </p>
                </div>
                <div className="receipt-btn">
                  <button onClick={handleDownloadImage}>
                    Download Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default OrderForm;
