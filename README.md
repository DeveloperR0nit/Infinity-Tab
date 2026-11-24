# ♾️ InfinityTab

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=30&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=650&lines=Welcome+to+InfinityTab;Unlimited+Shortcuts.+One+Tab.;Your+Browser%2C+Your+Space." alt="InfinityTab animated heading" />
</p>

<p align="center">
  **Unlimited shortcuts. One tab.**
</p>

<p align="center">
  A personalized Chrome New Tab experience that brings all your favorite websites together in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Chrome-blue?logo=googlechrome&logoColor=white" alt="Chrome" />
  <img src="https://img.shields.io/badge/React-JavaScript-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-To%20Be%20Added-lightgrey" alt="License" />
</p>

---

## 🌟 Overview

**InfinityTab** is a customizable Chrome New Tab extension designed to make browsing more convenient, organized, and personalized.

Instead of being restricted to a limited number of bookmarks or frequently visited websites, InfinityTab lets you add and manage unlimited website shortcuts, all accessible from a single homepage.

With dynamic backgrounds, automatic website favicons, and a clean interface, InfinityTab transforms your ordinary new tab into a personalized browsing dashboard.

## ✨ Features

- ♾️ **Unlimited Website Shortcuts** – Add and manage as many website shortcuts as you want in one place.
- 🌐 **Automatic Website Favicons** – Fetch website icons automatically using their URLs.
- 🖼️ **Dynamic Background Images** – Display random background images using the Unsplash API.
- 🎨 **Multiple Background Categories** – Choose from different categories to personalize your homepage.
- 💾 **Persistent Shortcut Storage** – Keep your shortcuts saved between browser sessions.
- ⚡ **Custom New Tab Page** – Replace Chrome's default New Tab page with InfinityTab.
- 🧭 **Clean Interface** – Access your favorite websites through a simple and organized dashboard.

<!-- ## 🖼️ Preview -->

<!-- Replace this with your actual project screenshots -->

<!-- <p align="center">
  <img src="assets/preview.png" alt="InfinityTab homepage preview" width="850" />
</p> -->

<!-- ### 🎬 Animated Demo -->

<!-- Add your actual screen recording or GIF here -->

<!-- <p align="center">
  <img src="assets/demo.gif" alt="InfinityTab animated demonstration" width="850" />
</p> -->

<!-- > You can replace these placeholders with screenshots and a GIF demonstrating your actual application. -->

## 🌄 Background Images

InfinityTab currently supports four random background image categories through the **Unsplash API**.

| Category | Description |
|---|---|
| `messi` | Lionel Messi-themed images |
| `nature` | Nature and landscape photography |
| `memes` | Funny and entertaining images |
| `gaming` | Gaming-related images |

### Default Background & Fallback

The default background image is of **Lionel Messi**.

If the Unsplash API request fails or an image cannot be fetched, InfinityTab automatically displays the default Messi image as a fallback.

This ensures that the homepage still has a background even when the API is unavailable.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript | Application functionality |
| CSS3 | Styling and animations |
| Vite | Development and production build |
| Chrome Extension API | Replacing Chrome's default New Tab page |
| Unsplash API | Fetching random background images |

## 📥 Installation Guide

There are two ways to install InfinityTab.

### Method 1: Install from the Source Code

This method is suitable for developers and users comfortable with running basic terminal commands.

**Step 1: Clone the repository**

Open your terminal and run:

```bash
git clone https://github.com/DeveloperR0nit/Infinity-Tab.git
```

Alternatively, download the repository as a ZIP file using GitHub's **Code → Download ZIP** option and extract it.

**Step 2: Open the project folder**

```bash
cd Infinity-Tab
```

**Step 3: Install dependencies**

Make sure Node.js and npm are installed, then execute:

```bash
npm install
```

**Step 4: Generate the production build**

```bash
npm run build
```

This will generate a `dist` folder containing the production-ready extension files.

**Step 5: Load InfinityTab into Chrome**

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked**.
5. Select the generated `dist` folder.
6. InfinityTab should now appear in your installed extensions.

**Step 6: Enjoy your new homepage!**

Open a new tab and experience your personalized InfinityTab dashboard.

### Method 2: Install Using a Pre-built Extension

If a production-ready build is provided in the repository's Releases section:

1. Download the latest extension build.
2. Extract the downloaded ZIP file.
3. Open `chrome://extensions/` in Chrome.
4. Enable Developer mode.
5. Click **Load unpacked**.
6. Select the extracted extension folder containing `manifest.json`.

That's it! InfinityTab is ready to use.

> **Note:** The pre-built installation method requires a published production build. If no release is available yet, use Method 1.

## 🔮 Future Improvements

InfinityTab is continuously evolving. Here are some features planned for future updates:

- [ ] 🔍 **Search Functionality** – Introduce an integrated search bar and search button for quicker browsing.
- [ ] ↔️ **Shortcut Position Customization** – Allow users to rearrange and customize the positions of their website shortcuts.
- [ ] ⚙️ **Settings Panel** – Add a dedicated settings button to manage homepage preferences.
- [ ] 🖼️ **Custom Wallpapers** – Allow users to upload and set their own wallpapers instead of relying only on random backgrounds.

## 🤝 Contributing

Contributions, suggestions, and feature requests are always welcome!

If you'd like to contribute:

1. Fork this repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m "Add: your feature description"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request.

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea for a new feature?

Feel free to open an [Issue](https://github.com/DeveloperR0nit/Infinity-Tab/issues) on GitHub.

## 👨‍💻 Developer

**Ronit Saha**

- GitHub: [@DeveloperR0nit](https://github.com/DeveloperR0nit)
- Project: [InfinityTab](https://github.com/DeveloperR0nit/Infinity-Tab)

---

<p align="center">
  Made with ❤️ by Ronit Saha
</p>

<p align="center">
  **InfinityTab — Your shortcuts, without limits. ♾️**
</p>