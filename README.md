# ♾️ InfinityTab

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=600&lines=InfinityTab;Unlimited+Shortcuts.+One+Tab.;Your+Browser%2C+Your+Space." alt="InfinityTab animated heading" />
</p>

<p align="center">
  **Unlimited shortcuts. One tab.**
</p>

<p align="center">
  A personalized Chrome New Tab experience that brings all your favorite websites together in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Chrome-blue?logo=googlechrome&logoColor=white" />
  <img src="https://img.shields.io/badge/React-JavaScript-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-In%20Development-orange" />
</p>

---

## ✨ Overview

**InfinityTab** is a custom Chrome New Tab extension designed to make your browsing experience more organized and personalized.

Instead of being limited to a handful of bookmarks, InfinityTab allows you to add and manage unlimited website shortcuts, all accessible from a single homepage.

With a clean interface and dynamic backgrounds, it transforms your ordinary new tab into your own personalized browsing dashboard.

## 🚀 Features

- ♾️ **Unlimited Shortcuts:** Add and manage as many website shortcuts as you want in one place.
- 🌐 **Automatic Website Icons:** Automatically fetch website favicons using their URLs.
- 🖼️ **Dynamic Backgrounds:** Enjoy random background images fetched through the Unsplash API.
- 🎨 **Multiple Background Categories:** Choose from different image categories.
- 💾 **Persistent Data:** Keep your shortcuts saved between browser sessions.
- ⚡ **Custom New Tab:** Replace Chrome's default new tab page with InfinityTab.
- 🧭 **Clean Interface:** Enjoy a simple and organized homepage for quick navigation.

## 🖼️ Background Images

InfinityTab currently supports the following random background categories through the **Unsplash API**:

| Category | Description                      |
| -------- | -------------------------------- |
| `messi`  | Lionel Messi-themed images       |
| `nature` | Nature and landscape photography |
| `memes`  | Funny and entertaining images    |
| `gaming` | Gaming-related backgrounds       |

**Default Background & Fallback**

The default background image is of **Lionel Messi**.

If the Unsplash API request fails or an image cannot be fetched, InfinityTab automatically uses the default Messi image as a fallback.

## 🎬 Preview

<!-- Add your animated project demo here -->
<p align="center">
  <img src="assets/demo.gif" alt="InfinityTab animated demonstration" width="850" />
</p>

> Replace `assets/demo.gif` with your actual screen recording or GIF of the extension.

## 🛠️ Technologies Used

- **React.js** – Building the user interface.
- **JavaScript** – Application functionality and interactions.
- **CSS3** – Styling and animations.
- **Vite** – Development and production build.
- **Chrome Extension API** – Replacing Chrome's default New Tab page.
- **Unsplash API** – Fetching random background images.

## 📥 Installation Guide

Want to use InfinityTab? Follow these steps to install it in your Chrome browser.

### Step 1: Download the repository

1. Open this GitHub repository.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file to your computer.

Alternatively, clone the repository using Git:

```bash
git clone YOUR_REPOSITORY_URL
```

### Step 2: Install dependencies

Open the extracted project folder in VS Code or your preferred terminal.

Run:

```bash
npm install
```

### Step 3: Build the project

Generate the production build:

```bash
npm run build
```

This will generate a `dist` folder containing the production-ready extension files.

### Step 4: Load the extension in Chrome

1. Open Google Chrome.
2. Navigate to:

   ```text
   chrome://extensions/
   ```

3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked**.
5. Select the `dist` folder generated in Step 3.
6. Your InfinityTab extension is now installed!

### Step 5: Enjoy your new homepage!

Open a new tab and experience your personalized InfinityTab dashboard.

**Note:** If you have already downloaded a pre-built version containing the manifest and production files, you can load its extension folder directly without running the build commands.

## 🔮 Future Improvements

InfinityTab is continuously evolving. Here are some features planned for future updates:

- [ ] 🔍 **Search Functionality:** Add an integrated search bar and search button for quicker browsing.
- [ ] ↔️ **Shortcut Position Customization:** Allow users to rearrange and change the positions of their website shortcuts.
- [ ] ⚙️ **Settings Panel:** Introduce a dedicated settings button for managing homepage preferences.
- [ ] 🖼️ **Custom Wallpapers:** Allow users to upload and set their own wallpapers instead of relying only on random backgrounds.

## 🤝 Contributing

Contributions, suggestions, and feature requests are always welcome!

If you have ideas to improve InfinityTab:

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Submit a Pull Request.

## 👨‍💻 Developer

Developed with ❤️ by **Ronit Saha**.

---

<p align="center">
  **InfinityTab — Your shortcuts, without limits. ♾️**
</p>
