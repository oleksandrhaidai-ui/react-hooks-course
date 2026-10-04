import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";

function App() {
  
  const [userQuery, setUserQuery] = useState('');

  const SearchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyDown = $event => {
    if ($event.key === 'Enter') {
      SearchQuery();
    }
  }

  const updateUserQuery = ($event) => {
    setUserQuery($event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Alex</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyDown={handleKeyDown} />
        <button onClick={SearchQuery}>Search</button>
      </div>
      <hr></hr>
      <Joke></Joke>
      <hr />
      <Tasks />
      <hr></hr>
      <Stories></Stories>
    </div>
  );
}

export default App;
