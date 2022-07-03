// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="row">
            <div className="column">
              <h2>Cannot find your<br></br>
              favourite restaurant on<br></br>
              zomato?</h2>
              <p>
                Submit the details and our team will get the restaurant<br></br> 
                onboard
              </p>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="column2" id="form">
              <form>
                <input
                  placeholder="Restaurant name"
                  type="text"
                  width="100%"
                ></input>
                <br></br>
                <input
                  placeholder="Restaurant location"
                  type="text"
                  width="100%"
                ></input>
                <br></br>
                <input
                  placeholder="Restaurant contact number"
                  type="text"
                  width="100%"
                ></input>
                <br></br>
                <input
                  placeholder="What do you like about the restaurant"
                  type="text"
                  width="100%"
                  
                ></input>
                <br></br>
              </form>
              <br/>
              <button className="btn" >submit</button>
              
              <br></br><br/>
              <p className="text-after-btn">
                Restaurant owners can{" "}
                <a href="https://www.zomato.com/partner-with-us">
                  add restaurant from here.
                </a>
              </p>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
