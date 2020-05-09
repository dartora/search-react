import React from "react";
import ReactDOM from "react-dom";

const peoples = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function App() {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = peoples.filter(people =>
      people.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
     <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
