import { get, map,isEmpty } from "lodash";
import "./Designs.css";
import React, { useState } from "react";
import Prompt from "../Prompt/Prompt";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedResponse } from "../../redux/slice/responseSlice";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import BoxLoader from "../loader/boxLoader";

const json =  [
  {
    "id": 1,
    "jsx": "import React, { useState } from 'react';\nimport './styles.css';\nimport recipes from './recipes.json';\n\nconst RecipeCard = ({ recipe }) => {\n  const [showFullDescription, setShowFullDescription] = useState(false);\n\n  const toggleDescription = () => {\n    setShowFullDescription(!showFullDescription);\n  };\n\n  return (\n    <div className='recipe-card'>\n      <img src={recipe.image} alt={recipe.name} />\n      <h2>{recipe.name}</h2>\n      <p>{showFullDescription ? recipe.description : recipe.description.substring(0, 100)}...</p>\n      {recipe.description.length > 100 && (\n        <button className='read-more-button' onClick={toggleDescription}>\n          {showFullDescription ? 'Read Less' : 'Read More'}\n        </button>\n      )}\n    </div>\n  );\n};\n\nconst Navbar = () => {\n  return (\n    <nav className='navbar'>\n      <div className='container'>\n        <h1 className='logo'>Cooking Delights</h1>\n      </div>\n    </nav>\n  );\n};\n\nconst Footer = () => {\n  return (\n    <footer className='footer'>\n      <div className='container'>\n        <p>&copy; 2024 Cooking Delights. All rights reserved.</p>\n      </div>\n    </footer>\n  );\n};\n\nconst App = () => {\n  return (\n    <div className='app'>\n      <Navbar />\n      <main className='main'>\n        <div className='container'>\n          <h1 className='page-title'>Explore Delicious Recipes</h1>\n          <div className='recipe-grid'>\n            {recipes.map((recipe) => (\n              <RecipeCard key={recipe.id} recipe={recipe} />\n            ))}\n          </div>\n        </div>\n      </main>\n      <Footer />\n    </div>\n  );\n};\n\nexport default App;",
    "css": ".app {\n  font-family: sans-serif;\n  background-color: #f4f4f4;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: #333;\n  color: white;\n  padding: 10px 0;\n}\n\n.logo {\n  font-size: 24px;\n}\n\n.main {\n  padding: 20px 0;\n}\n\n.page-title {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.recipe-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.recipe-card {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 15px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.recipe-card img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n\n.read-more-button {\n  padding: 8px 15px;\n  background-color: #008CBA;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.read-more-button:hover {\n  background-color: #0069d9;\n}\n\n.footer {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n}\n"
  },
  {
    "id": 2,
    "jsx": `
    import React, { useState } from "react";
    import "./styles.css";

    const FoodItem = ({ name, price, image, description }) => {
      const [quantity, setQuantity] = useState(1);

      const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10) || 1);
      };

      return (
        <div className="food-item">
          <img src={image} alt={name} />
          <div className="food-item-details">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="price-quantity">
              <span className="price">{price.toFixed(2)}</span>
              <div className="quantity-control">
                <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
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
            <button className="add-to-cart-button" onClick={() => addToCart({ name, price, image, quantity, description })}>
              Add to Cart
            </button>
          </div>
        </div>
      );
    };

    const CartItem = ({ name, price, quantity, image, removeFromCart }) => {
      return (
        <div className="cart-item">
          <img src={image} alt={name} />
          <div className="cart-item-details">
            <h3>{name}</h3>
            <span className="price">{price.toFixed(2)}</span>
            <span className="quantity">x {quantity}</span>
            <button className="remove-button" onClick={() => removeFromCart(name)}>Remove</button>
          </div>
        </div>
      );
    };

    const App = () => {
      const [cartItems, setCartItems] = useState([]);
      const [isCartOpen, setIsCartOpen] = useState(false);

      const addToCart = (foodItem) => {
        const existingItem = cartItems.find(
          (item) => item.name === foodItem.name
        );

        if (existingItem) {
          setCartItems(
            cartItems.map((item) =>
              item.name === foodItem.name
                ? { ...item, quantity: item.quantity + foodItem.quantity }
                : item
            )
          );
        } else {
          setCartItems([
            ...cartItems,
            foodItem,
          ]);
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
            "https://images.unsplash.com/photo-1574126154505-16dec3ca01ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          description: "Delicious pepperoni pizza with extra cheese"
        },
        {
          name: "Burger",
          price: 8.99,
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          description:
            "Classic beef burger with lettuce, tomato, and cheese"
        },
        {
          name: "Fries",
          price: 4.99,
          image:
            "https://images.unsplash.com/photo-1589742698221-6970c0340f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          description: "Crispy golden fries"
        },
        {
          name: "Salad",
          price: 7.99,
          image:
            "https://images.unsplash.com/photo-1589742698221-6970c0340f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          description: "Fresh and healthy salad with grilled chicken"
        }
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
                <FoodItem
                  key={foodItem.name}
                  {...foodItem}
                  addToCart={addToCart}
                />
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
                <h3>Total: {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ).toFixed(2)}</h3>
              </div>
              <button className="checkout-button">Checkout</button>
            </div>
          </main>
        </div>
      );
    };

    export default App;`
    ,
    "css": `
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
      align-items: flex-start; /* Align items to the top */
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
      background-color: #4CAF50;
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
      background-color: #4CAF50;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
    `
  }
]
const Designs = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const designArray = useSelector((state) =>
    get(state, "ResponseSlice.response")
  );
  const switchtoEdit = (item) => {
    dispatch(setSelectedResponse({ value: item }));
    Navigate("/editor");
  };

  const renderElement = (item) => {
    return (
      <SandpackProvider
        files={{ "/App.js": item.jsx, "/styles.css": item.css }}
        template="react"
        options={{
          classes: {
            "sp-layout": "snack-box",
          },
        }}
      >
        <SandpackLayout>
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
            actionsChildren={
              <button
                className="Edit_Button"
                onClick={() => switchtoEdit(item)}
              >
                Edit
              </button>
            }
          />
        </SandpackLayout>
      </SandpackProvider>
    );
  };

  return (
    <div className="design-wrapper">
      {!loading && (
        isEmpty(designArray) && <div className="no-designs"> 
          Start Your Designs With A Prompt
        </div> ||
        <div className="design-container">
          {map(designArray, (ay) => (
            <div
              className="design-box"
              key={ay.id}
                onClick={() => switchToEdit(ay)}
            >
              {renderElement(ay)}
            </div>
          ))}
        </div>
      ) || (
        <div className="loader-container">
          <BoxLoader />
        </div>
      )}

      <div className="prompt-box">
        <Prompt setLoading={setLoading} loading={loading} />
      </div>
    </div>
  );
};

export default Designs;
