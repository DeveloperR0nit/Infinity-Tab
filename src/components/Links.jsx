export default function Links({ setIsOpenDropdown }) {
  const data = JSON.parse(localStorage.getItem("linksArr"));
  function handleRightClick(e,id) {
    e.preventDefault();
    setIsOpenDropdown({ left: e.clientX, top: e.clientY, id: id});
  }
  const allLinks = data
    ? data.map((link) => (
        <a
          href={link.url}
          className="links"
          onContextMenu={(e) => handleRightClick(e,link.id)}
          key={link.id}
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(link.url)}&sz=36`}
            alt={`${link.name} icon`}
          />{" "}
          <span>{link.name}</span>
        </a>
      ))
    : null;
  return allLinks;
}
