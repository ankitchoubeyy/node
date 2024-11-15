import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.log(`Error in fetching data ${error.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Data from backend</h1>
      <div className="App">
        {data ? (
          data.map((user) => (
            <div key={user._id}>
              {" "}
              <h1>{user.userName}</h1> <p>Email: {user.userEmail}</p>{" "}
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
