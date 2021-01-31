import React from "react";
import Card from "./Card";

//

function createCard(card) {
  return (
    <Card
      name={card.name}
      img={card.avatar}
      username={card.username}
      email={card.email}
      website={card.website}
      id={card.id}
    />
  );
}

function App() {
  //fetching data from server and saving it to localStorage if it is a first initialization of an app
  if (localStorage.getItem("contacts") == null) {
    fetch("http://demo.sibers.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("contacts", JSON.stringify(data));
        console.log("Contacts was added to localStorage");
      });
  }

  return (
    <div>
      <h1 className="heading"> My Contacts </h1>
      {JSON.parse(localStorage.getItem("contacts")).map(createCard)} {'// mapping contact cards with data in localStorage'}
    </div>
  );
}

export default App;
