import { useState } from "react";

export default function LinksModal({ isOpenModal, setIsOpenModal }) {
  const prevData = JSON.parse(localStorage.getItem("linksArr")) || [];
  const [inputValues, setInputValues] = useState(
    () =>
      prevData.find((link) => link.id === isOpenModal) ?? {
        name: "",
        url: "",
      },
  );
  function updateData(formData) {
    const formDataObj = Object.fromEntries(formData.entries());
    if (typeof isOpenModal !== "boolean") {
      const newData = prevData.map((link) =>
        link.id === isOpenModal ? { ...link, ...formDataObj } : link,
      );
      localStorage.setItem("linksArr", JSON.stringify(newData));
    } else {
      const newData = [
        ...prevData,
        { ...formDataObj, id: crypto.randomUUID() },
      ];
      localStorage.setItem("linksArr", JSON.stringify(newData));
    }
    setIsOpenModal(false);
  }
  return (
    <div className={`modal-bg ${isOpenModal === false ? "closed" : ""}`}>
      <div className="modal-wrapper">
        <div className="heading">
          <h2>Add site</h2>
          <button className="close-btn" onClick={() => setIsOpenModal(false)}>
            X
          </button>
        </div>
        <form action={updateData} className="modal-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={14}
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, name: e.target.value }))
            }
            value={inputValues.name}
          />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            id="url"
            required
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, url: e.target.value }))
            }
            value={inputValues.url}
          />
          <div className="buttons-row">
            <button
              className="cancel-btn"
              type="reset"
              onClick={() => setIsOpenModal(false)}
            >
              Cancel
            </button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
