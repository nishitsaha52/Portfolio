# 🎨 Portfolio Website

Welcome to my portfolio website! This project is designed to showcase my skills, projects, and experience in a dynamic, visually captivating way. The website offers a polished and interactive user experience with multiple engaging features. Dive in to explore more about me!

---

## ✨ Key Features

- **Dynamic PDF Resume Display**: View my resume directly on the site with [React-PDF](https://github.com/wojtekmaj/react-pdf), offering a seamless document viewing experience.
- **Contact Form with Email Integration**: [EmailJS](https://www.emailjs.com/) allows users to reach out to me directly via a contact form without needing server-side support.
- **Interactive Visuals**: 
  - **Bootstrap**: Provides a responsive and well-structured design.
  - **Parallax Scrolling**: Adds a captivating 3D effect, creating depth and movement.
  - **Typewriter Animation**: Highlights my roles and skills with a smooth typewriter effect.
  - **TS-Particles**: Bring life to the website with background particle animations.
  - **Lottie Animation**: Creates engaging animated visuals, enhancing the introduction section.
- **5-Level Brightness Theme Control**: Users can adjust the theme's brightness across five levels, providing a comfortable browsing experience regardless of lighting conditions.

---

## 🗂 Project Structure

Organized for scalability and maintainability, here’s a breakdown of the project folders and files:

```plaintext
build                 # Production build files
node_modules          # Node.js modules
public                # Public assets like favicon and index.html
src                   # Source files
├── Assets            # Static assets (images, icons, etc.)
├── components        # Reusable UI components
├── store             # Global state management (if applicable)
├── styles            # Global and component-specific styles
├── Themes            # Theme management files (e.g., brightness levels)
├── App.css           # Main stylesheet
├── App.js            # Root component
└── index.js          # Entry point of the application
.gitignore            # Files to ignore in Git
.env                  # Environment variables (EmailJS, etc.)
package-lock.json     # Lockfile for dependencies
package.json          # Project configuration
README.md             # Project documentation
```

---

## 🛠 Technologies Used

This portfolio harnesses the power of multiple cutting-edge technologies to provide a refined, interactive, and aesthetic experience:

- **React.js**: The backbone of the application, enabling modularity and reactivity.
- **React-PDF**: Embeds a PDF viewer for my resume, allowing users to read it without downloading.
- **EmailJS**: Enables email functionality directly from the front end for an easy contact experience.
- **Bootstrap**: Provides responsive design elements and pre-styled components for a clean layout.
- **Parallax Scrolling**: Creates an immersive experience with background scrolling effects.
- **Typewriter Effect**: Adds a smooth typewriter animation to emphasize roles and skills.
- **TS-Particles**: Enhances visuals with animated particles in the background.
- **Lottie Animation**: Adds modern, animated illustrations to boost visual appeal.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nishitsaha52/Portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Create a `.env` file in the root directory.
   - Add your [EmailJS](https://www.emailjs.com/) credentials for contact form integration.
   - Configure any additional variables required by React-PDF, TS-Particles, etc.

4. **Run the development server:**
   ```bash
   npm start
   ```
   Access the site at [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🤝 Contributing

Contributions are encouraged! If you find a bug, want to add features, or improve the code, feel free to open an issue or submit a pull request. Let's make this portfolio even better together!

---
