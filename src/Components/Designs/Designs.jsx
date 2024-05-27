import { get, map } from "lodash";
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
    "id": 3,
    "jsx": "import React from 'react';\nimport './styles.css';\n\nconst Portfolio = () => {\n  return (\n    <div className='portfolio'>\n      <header className='header'>\n        <div className='container'>\n          <h1 className='title'>[Your Name]</h1>\n          <nav className='nav'>\n            <ul>\n              <li><a href='#about' className='nav-link'>About</a></li>\n              <li><a href='#skills' className='nav-link'>Skills</a></li>\n              <li><a href='#projects' className='nav-link'>Projects</a></li>\n              <li><a href='#contact' className='nav-link'>Contact</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header>\n\n      <section className='about' id='about'>\n        <div className='container'>\n          <h2 className='section-title'>About Me</h2>\n          <p className='about-text'>I am a passionate software developer with [Number] years of experience in building innovative and user-friendly applications. My expertise lies in [List of Tech Stack], and I am always eager to learn and explore new technologies.</p>\n        </div>\n      </section>\n\n      <section className='skills' id='skills'>\n        <div className='container'>\n          <h2 className='section-title'>My Skills</h2>\n          <div className='skills-grid'>\n            <div className='skill-item'>\n              <i className='fab fa-html5'></i>\n              <h3>HTML</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-css3-alt'></i>\n              <h3>CSS</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-js-square'></i>\n              <h3>JavaScript</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-react'></i>\n              <h3>React</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-node-js'></i>\n              <h3>Node.js</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-python'></i>\n              <h3>Python</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fas fa-database'></i>\n              <h3>SQL</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fab fa-git-alt'></i>\n              <h3>Git</h3>\n            </div>\n            <div className='skill-item'>\n              <i className='fas fa-cogs'></i>\n              <h3>Agile Methodologies</h3>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section className='projects' id='projects'>\n        <div className='container'>\n          <h2 className='section-title'>Featured Projects</h2>\n          <div className='project-grid'>\n            <div className='project-card'>\n              <img src='[Project Image]' alt='[Project Name]' className='project-image' />\n              <h3 className='project-title'>[Project Name]</h3>\n              <p className='project-description'>[Brief Project Description]</p>\n              <a href='[Project Link]' target='_blank' rel='noopener noreferrer' className='project-link'>View Project</a>\n            </div>\n            <div className='project-card'>\n              <img src='[Project Image]' alt='[Project Name]' className='project-image' />\n              <h3 className='project-title'>[Project Name]</h3>\n              <p className='project-description'>[Brief Project Description]</p>\n              <a href='[Project Link]' target='_blank' rel='noopener noreferrer' className='project-link'>View Project</a>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section className='contact' id='contact'>\n        <div className='container'>\n          <h2 className='section-title'>Contact Me</h2>\n          <form action='[Your Email]' method='post' className='contact-form'>\n            <input type='text' name='name' placeholder='Your Name' required className='form-input' />\n            <input type='email' name='email' placeholder='Your Email' required className='form-input' />\n            <textarea name='message' placeholder='Your Message' required className='form-textarea'></textarea>\n            <button type='submit' className='form-button'>Send Message</button>\n          </form>\n        </div>\n      </section>\n\n      <footer className='footer'>\n        <div className='container'>\n          <p className='footer-text'>&copy; [Your Name] - [Year] All Rights Reserved</p>\n          <ul className='social-links'>\n            <li><a href='[LinkedIn Link]' target='_blank' rel='noopener noreferrer' className='social-link'><i className='fab fa-linkedin-in'></i></a></li>\n            <li><a href='[GitHub Link]' target='_blank' rel='noopener noreferrer' className='social-link'><i className='fab fa-github'></i></a></li>\n          </ul>\n        </div>\n      </footer>\n    </div>\n  );\n};\n\nexport default Portfolio;",
    "css": ".portfolio {\n  font-family: 'Arial', sans-serif;\n  background-color: #f4f4f4;\n  color: #333;\n  min-height: 100vh;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.header {\n  background-color: #333;\n  color: #fff;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.title {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n\n.nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px 20px;\n  transition: background-color 0.3s ease;\n}\n\n.nav-link:hover {\n  background-color: #555;\n}\n\n.about {\n  padding: 40px 0;\n  background-color: #fff;\n}\n\n.section-title {\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n\n.about-text {\n  line-height: 1.6;\n  margin-bottom: 30px;\n}\n\n.skills {\n  padding: 40px 0;\n  background-color: #f4f4f4;\n}\n\n.skills-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 20px;\n  margin-top: 30px;\n}\n\n.skill-item {\n  text-align: center;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n}\n\n.skill-item:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.skill-item i {\n  font-size: 3rem;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.skill-item h3 {\n  margin-bottom: 0;\n}\n\n.projects {\n  padding: 40px 0;\n  background-color: #fff;\n}\n\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 20px;\n  margin-top: 30px;\n}\n\n.project-card {\n  border: 1px solid #ccc;\n  padding: 15px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n}\n\n.project-card:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.project-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.project-title {\n  margin-bottom: 5px;\n}\n\n.project-description {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.project-link {\n  display: inline-block;\n  text-decoration: none;\n  color: #fff;\n  background-color: #333;\n  padding: 8px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n\n.project-link:hover {\n  background-color: #555;\n}\n\n.contact {\n  padding: 40px 0;\n  background-color: #f4f4f4;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  margin: 0 auto;\n}\n\n.form-input,\n.form-textarea {\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n.form-textarea {\n  height: 100px;\n  resize: vertical;\n}\n\n.form-button {\n  padding: 10px 20px;\n  background-color: #333;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: background-color 0.3s ease;\n}\n\n.form-button:hover {\n  background-color: #555;\n}\n\n.footer {\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 20px 0;\n}\n\n.footer-text {\n  margin-bottom: 10px;\n}\n\n.social-links {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.social-link {\n  color: #fff;\n  font-size: 1.2em;\n  margin: 0 10px;\n  transition: color 0.3s ease;\n}\n\n.social-link:hover {\n  color: #eee;\n}"
  },
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
      {!loading ? (
        <div className="design-container">
          {map(designArray, (ay) => (
            <div
              className="design-box"
              key={ay.id}
              //   onClick={() => switchToEdit(ay)}
            >
              {renderElement(ay)}
            </div>
          ))}
        </div>
      ) : (
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
