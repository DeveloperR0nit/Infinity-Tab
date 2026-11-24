import { useState, useEffect } from "react";
import "./App.css";
import defaultBgImg from "./assets/default-bg-img.jpg";
import appStoreLogo from "./assets/app-store-logo.png";
import { Plus, ChevronUp } from "lucide-react";
import Links from "./components/Links";
import LinksModal from "./components/LinksModal";
import Dropdown from "./components/dropdown";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenAppStore, setIsOpenAppStore] = useState(true);
  const [bgImgData, setBgImgData] = useState({
    url: defaultBgImg,
    alt: "Image of Lionel Messi in Barcelona Jersey, looking sideways",
  });
  useEffect(() => {
    const clientId = "y50b540hViNuzO3pguDh0qAn9srMKsWbl-4OeHB3NlM";
    function getRandomImg() {
      const imageCategories = ["messi", "nature", "memes", "gaming"];
      return imageCategories[
        Math.floor(Math.random() * imageCategories.length)
      ];
    }
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${clientId}&query=${getRandomImg()}&w=${window.innerWidth}&h=${window.innerHeight}`,
    )
      .then((res) => res.json())
      .then((data) =>
        setBgImgData({
          url: data.urls.regular,
          alt: data.urls.alt_description,
        }),
      )
      .catch((error) => {
        console.log("Something went wrong:", error);
      });
    const interval = setInterval(() => {
      setRefresh((prev) => !prev);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-wrapper">
      <img src={bgImgData.url} alt={bgImgData.alt} className="bg-img" />
      <LinksModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        key={isOpenModal ?? "new"}
      />
      <Dropdown
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        setIsOpenModal={setIsOpenModal}
      />
      <div className="container">
        <h1 className="time" data-refresh={refresh}>
          {new Date()
            .toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .replace(/\s?[AP]M/i, "")}
        </h1>
        <h2 className="date">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          className={`shortcuts-toggle ${isOpenAppStore ? "open" : ""}`}
          onClick={() => setIsOpenAppStore((prev) => !prev)}
        >
          <img src={appStoreLogo} alt="App Store Logo Icon" />
          <span>AppStore</span>
          <ChevronUp size={16} strokeWidth={3} />
        </button>
        <div className={`links-list ${isOpenAppStore ? "open" : ""}`}>
          <button className="links" onClick={() => setIsOpenModal(true)}>
            <Plus size={24} />
            <span>Add site</span>
          </button>
          <Links setIsOpenDropdown={setIsOpenDropdown} />
        </div>
      </div>
    </main>
  );
}
