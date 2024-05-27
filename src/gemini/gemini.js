import { GoogleGenerativeAI } from "@google/generative-ai";
import { setAiResponse } from "../redux/slice/responseSlice";

const genAI = new GoogleGenerativeAI("AIzaSyATgAHxSoyMzAot_l40ogLpbN2PqPJwHBU");

const askGemini = async (dispatch, msg) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `
            You have to build a json and that json we will use to create react component.
            DO not generate ot respond with anything other than the JSON itself.
            Code should be in JSX and CSS.
            That json structure will be given in the example below.
            You have to generate 2 json with different design styling and it should be unique.
            You have to wrap to those 2 jsons in an array.
            Each styles should be different.
            You have to create a Component what user have prompted.
            Below is just an example.

            Note: Strictly give each json unique id and unique jsx and unique css.

            You can use images from https://images.unsplash.com website.

            Response:

            '''[{...},{...},{...},{...}]'''

            Note: You have to create a Component what user have prompted and you must give only Array of JSON without any note or comments.

            Note: There should be only single component App.js inside add all component without exporting.All component should be in App.js.


            i Order you to Strictly give me 4 json and nothing Else.


            Example:
            [
              {
                id: 1,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithHover = () => {
                  return (
                    <div>
                      <button className="button-with-hover">Button with Hover</button>
                    </div>
                  );
                };
                
                export default ButtonWithHover;
               ',
                css:'
                .button-with-hover {
                  padding: 10px;
                  background-color: #4CAF50; /* Green */
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
                  border-radius: 8px;
                }
                
                .button-with-hover:hover {
                  background-color: skyblue; /* Darker Green */
                }
               '
              },
              {
                id: 2,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithBoxShadow = () => {
                  return (
                    <div>
                      <button className="button-with-box-shadow">Button with Box Shadow</button>
                    </div>
                  );
                };
                
                export default ButtonWithBoxShadow;
               ',
                css:'
                .button-with-box-shadow {
                  padding: 10px;
                  background-color: #fff;
                  border: none;
                  color: black;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 8px;
                  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }
               '
              },
              {
                id: 3,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithGradient = () => {
                  return (
                    <div>
                      <button className="button-with-gradient">Button with Gradient</button>
                    </div>
                  );
                };
                
                export default ButtonWithGradient;
               ',
                css:'
                .button-with-gradient {
                  padding: 10px;
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 8px;
                  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
                }
               '
              },
              {
                id: 4,
                jsx:'
                import React from 'react';
                import "./styles.css";
                
                const ButtonWithBorderRadius = () => {
                  return (
                    <div>
                      <button className="button-with-border-radius">Button with Border Radius</button>
                    </div>
                  );
                };
                
                export default ButtonWithBorderRadius;
               ',
                css:'
                .button-with-border-radius {
                  padding: 10px;
                  background-color: #008CBA;
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  cursor: pointer;
                  border-radius: 20px;
                }
               '
              },
            ]

            Example 2:

            [
              {
                "id": 1,
                "jsx": 'import React from "react";
                import "./styles.css";
                
                const Navbar = () => {
                  return (
                    <nav className="navbar">
                      <ul>
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#cars">Cars</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  );
                };
                
                const CarCard = ({ image, name, description }) => {
                  return (
                    <div className="car-card">
                      <img src={image} alt={name} />
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  );
                };
                
                const Footer = () => {
                  return (
                    <footer className="footer">
                      <p>&copy; 2024 Car Website. All rights reserved.</p>
                    </footer>
                  );
                };
                
                const App = () => {
                  const cars = [
                    {
                      image: "https://source.unsplash.com/150x150/?car1",
                      name: "Car 1",
                      description: "Description for Car 1",
                    },
                    {
                      image: "https://source.unsplash.com/150x150/?car2",
                      name: "Car 2",
                      description: "Description for Car 2",
                    },
                    {
                      image: "https://source.unsplash.com/150x150/?car3",
                      name: "Car 3",
                      description: "Description for Car 3",
                    },
                  ];
                
                  return (
                    <div className="App">
                      <Navbar />
                      <div className="car-cards-container">
                        {cars.map((car, index) => (
                          <CarCard
                            key={index}
                            image={car.image}
                            name={car.name}
                            description={car.description}
                          />
                        ))}
                      </div>
                      <Footer />
                    </div>
                  );
                };
                
                export default App;
                ',
                "css": '
                .App {
                  font-family: Arial, sans-serif;
                  display: flex;
                  flex-direction: column;
                  min-height: 100vh;
                }
                
                .car-cards-container {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  padding: 16px;
                  flex-grow: 1;
                }
                
                /* Navbar styles */
                .navbar {
                  background-color: #333;
                  overflow: hidden;
                }
                
                .navbar ul {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }
                
                .navbar li {
                  float: left;
                }
                
                .navbar li a {
                  display: block;
                  color: white;
                  text-align: center;
                  padding: 14px 16px;
                  text-decoration: none;
                }
                
                .navbar li a:hover {
                  background-color: #111;
                }
                
                
                .car-card {
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  overflow: hidden;
                  margin: 16px;
                  padding: 16px;
                  text-align: center;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                
                .car-card img {
                  max-width: 100%;
                  height: auto;
                }
                
                .car-card h3 {
                  margin: 16px 0 8px;
                }
                
                .car-card p {
                  color: #666;
                }
                
                /* Footer styles */
                .footer {
                  background-color: #333;
                  color: white;
                  text-align: center;
                  padding: 10px 0;
                  position: relative;
                  bottom: 0;
                  width: 100%;
                }
                '
              }
            ]

            Example 4:

            [
              {
                "id": 1,
                "jsx": 'import React, { useState } from "react";
                import "./styles.css";
                
                const FoodItem = ({ name, price, image, description, addToCart }) => {
                  const [quantity, setQuantity] = useState(1);
                
                  const handleQuantityChange = (event) => {
                    const value = parseInt(event.target.value, 10) || 1;
                    setQuantity(value > 0 ? value : 1);
                  };
                
                  const handleAddToCart = () => {
                    addToCart({ name, price, image, quantity, description });
                  };
                
                  return (
                    <div className="food-item">
                      <img
                        src={image}
                        alt={name}
                        onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                      />
                      <div className="food-item-details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="price-quantity">
                          <span className="price">{price.toFixed(2)}</span>
                          <div className="quantity-control">
                            <button
                              onClick={() => setQuantity(quantity - 1)}
                              disabled={quantity === 1}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={quantity}
                              onChange={handleQuantityChange}
                              min="1"
                            />
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                          </div>
                        </div>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                };
                
                const CartItem = ({ name, price, quantity, image, removeFromCart }) => {
                  return (
                    <div className="cart-item">
                      <img
                        src={image}
                        alt={name}
                        onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                      />
                      <div className="cart-item-details">
                        <h3>{name}</h3>
                        <span className="price">{price.toFixed(2)}</span>
                        <span className="quantity">x {quantity}</span>
                        <button className="remove-button" onClick={() => removeFromCart(name)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                };
                
                const App = () => {
                  const [cartItems, setCartItems] = useState([]);
                  const [isCartOpen, setIsCartOpen] = useState(false);
                
                  const addToCart = (foodItem) => {
                    const existingItem = cartItems.find((item) => item.name === foodItem.name);
                
                    if (existingItem) {
                      setCartItems(
                        cartItems.map((item) =>
                          item.name === foodItem.name
                            ? { ...item, quantity: item.quantity + foodItem.quantity }
                            : item
                        )
                      );
                    } else {
                      setCartItems([...cartItems, foodItem]);
                    }
                  };
                
                  const removeFromCart = (itemName) => {
                    setCartItems(cartItems.filter((item) => item.name !== itemName));
                  };
                
                  const toggleCart = () => {
                    setIsCartOpen(!isCartOpen);
                  };
                
                  const foodItems = [
                    {
                      name: "Pizza",
                      price: 12.99,
                      image:
                        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=3181&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      description: "Delicious pepperoni pizza with extra cheese",
                    },
                    {
                      name: "Burger",
                      price: 8.99,
                      image:
                        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                      description: "Classic beef burger with lettuce, tomato, and cheese",
                    },
                    {
                      name: "Fries",
                      price: 4.99,
                      image:
                        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      description: "Crispy golden fries",
                    },
                    {
                      name: "Salad",
                      price: 7.99,
                      image:
                        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      description: "Fresh and healthy salad with grilled chicken",
                    },
                  ];
                
                  return (
                    <div className="App">
                      <header className="header">
                        <h1>Food Delivery</h1>
                        <button className="cart-button" onClick={toggleCart}>
                          Cart ({cartItems.length})
                        </button>
                      </header>
                
                      <main className="main">
                        <div className="food-items-container">
                          {foodItems.map((foodItem) => (
                            <FoodItem key={foodItem.name} {...foodItem} addToCart={addToCart} />
                          ))}
                        </div>
                
                        <div className={isCartOpen ? "cart open" : "cart"}>
                          <h2>Your Cart</h2>
                          {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                          ) : (
                            <div className="cart-items">
                              {cartItems.map((cartItem) => (
                                <CartItem
                                  key={cartItem.name}
                                  {...cartItem}
                                  removeFromCart={removeFromCart}
                                />
                              ))}
                            </div>
                          )}
                          <div className="cart-total">
                            <h3>
                              Total: $
                              {cartItems
                                .reduce((total, item) => total + item.price * item.quantity, 0)
                                .toFixed(2)}
                            </h3>
                          </div>
                          <button className="checkout-button">Checkout</button>
                        </div>
                      </main>
                    </div>
                  );
                };
                
                export default App;
                ',
                css: '
                .App {
                  font-family: sans-serif;
                  display: flex;
                  flex-direction: column;
                  min-height: 100vh;
                  background-color: #f0f0f0;
                }
                
                .header {
                  background-color: #333;
                  color: #fff;
                  padding: 1rem;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }
                
                .cart-button {
                  background-color: #fff;
                  color: #333;
                  padding: 0.5rem 1rem;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                }
                
                .main {
                  display: flex;
                  flex-direction: column;
                  padding: 1rem;
                }
                
                .food-items-container {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  gap: 1rem;
                }
                
                .food-item {
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  padding: 1rem;
                  display: flex;
                  align-items: flex-start;
                }
                
                .food-item img {
                  width: 120px;
                  height: 120px;
                  object-fit: cover;
                  border-radius: 8px;
                  margin-right: 1rem;
                }
                
                .food-item-details {
                  flex: 1;
                }
                
                .food-item-details h3 {
                  margin-top: 0;
                }
                
                .price-quantity {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-top: 0.5rem;
                }
                
                .price {
                  font-weight: bold;
                }
                
                .quantity-control {
                  display: flex;
                  align-items: center;
                }
                
                .quantity-control button {
                  background-color: #eee;
                  border: none;
                  padding: 0.25rem 0.5rem;
                  border-radius: 4px;
                  cursor: pointer;
                }
                
                .quantity-control input {
                  width: 30px;
                  text-align: center;
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  padding: 0.25rem;
                  margin: 0 0.5rem;
                }
                
                .add-to-cart-button {
                  background-color: #4caf50;
                  color: #fff;
                  padding: 0.5rem 1rem;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  margin-top: 1rem;
                }
                
                /* Cart styles */
                .cart {
                  position: fixed;
                  top: 0;
                  right: 0;
                  width: 300px;
                  height: 100vh;
                  background-color: #fff;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  padding: 1rem;
                  transition: transform 0.3s ease-in-out;
                  transform: translateX(100%);
                }
                
                .cart.open {
                  transform: translateX(0);
                }
                
                .cart h2 {
                  margin-top: 0;
                }
                
                .cart-items {
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                  margin-top: 1rem;
                }
                
                .cart-item {
                  display: flex;
                  align-items: center;
                }
                
                .cart-item img {
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                  border-radius: 8px;
                  margin-right: 1rem;
                }
                
                .cart-item-details {
                  flex: 1;
                }
                
                .cart-item-details h3 {
                  margin-top: 0;
                }
                
                .quantity {
                  font-size: 0.8rem;
                  color: #666;
                  margin-left: 0.5rem;
                }
                
                .remove-button {
                  background-color: #f44336;
                  color: #fff;
                  padding: 0.5rem 1rem;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  margin-left: 1rem;
                }
                
                .cart-total {
                  margin-top: 1rem;
                  text-align: right;
                }
                
                .checkout-button {
                  background-color: #4caf50;
                  color: #fff;
                  padding: 0.5rem 1rem;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  margin-top: 1rem;
                }
'                
              },
                
        
      `,
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 200000,
    },
  });

  const result = await chat.sendMessage(msg);

  const response = await result.response;

  const text = response.text();
  console.log(text, "the text");

  // console.log(text.slice(text.indexOf("**Explanation:**") + 18), "---------roy-----");const regex = /[\s\S]*?/;
  // const regex = /[\s\S]*?/;
  // const clean = text.replace(regex, '').trim();
  
  // console.log(clean);
  const cleanedString = text.replace(/.*?(```json(.*?)```).*?/gs, "$2").trim();
  const extractedString = cleanedString.replace(/`/g, "");
  console.log("cleanedStr", extractedString);
  try {
    const jsonArray = JSON.parse(extractedString);
    console.log("jsonArray", jsonArray);
    dispatch(setAiResponse({ value: jsonArray }));
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }
  // return text;
};

export default askGemini;
