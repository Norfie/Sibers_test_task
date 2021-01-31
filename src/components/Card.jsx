import React, { useState } from "react";
import $ from "jquery";

function Card(props) {
  const contacts = JSON.parse(localStorage.getItem("contacts"));

  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

//saving state of changing contact
  const [contact, changeContact] = useState({
    cName: props.name,
    cUsername: props.username,
    cWebsite: props.website,
    cEmail: props.email,
    cImg: props.img
  });

//processing changing in contact form
  function handleChange(event) {
    const { name, value } = event.target;

    changeContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function openForm() {
    var reqCard = document.getElementById(props.id);
    $(reqCard).fadeIn();
  }

  function closeForm() {
    var reqCard = document.getElementById(props.id);
    $(reqCard).fadeOut();
  }

//updating data in localStorage when user changing data in contact form 
  function change() {
    contacts[props.id].name = contact.cName;
    contacts[props.id].username = contact.cUsername;
    contacts[props.id].website = contact.cWebsite;
    contacts[props.id].email = contact.cEmail;
    contacts[props.id].avatar = contact.cImg;
    localStorage.setItem("contacts", JSON.stringify(contacts));
    var reqCard = document.getElementById(props.id);
    $(reqCard).fadeOut();
  }

  return (
    <div className="card">
      <div className="top">
        <h2
          style={{ color: isMousedOver ? "#fff" : "#2d3436" }}
          className="name"
          onClick={openForm}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {props.name}
        </h2>
        <img className="circle-img" src={props.img} alt="" />
      </div>
      <div className="bottom">
        <p className="info">{props.username}</p>
        <p className="info">{props.email}</p>
        <p className="info">{props.website}</p>
      </div>
      <div id={props.id} className="poup" style={{ display: "none" }}>
        <form>
          <input
            type="text"
            name="cName"
            value={contact.cName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cUsername"
            value={contact.cUsername}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cEmail"
            value={contact.cEmail}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cWebsite"
            value={contact.cWebsite}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cImg"
            value={contact.cImg}
            onChange={handleChange}
          />

          <br />

          <button
            type="submit"
            name="changeContactButton"
            onClick={change}
            className="btn"
          >
            Save
          </button>
          <input type="hidden" name="redactedCardId" value={props.id} />
        </form>
        <button onClick={closeForm} className="btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default Card;
