 
 

function App() {
  return(
    <div className="container">
      <div className="row mt-5">

        <div className="col">
            <p>Contract Balance:   ETH</p>
        </div>

        <div className="col">
          <div className="mb-3">
            <h4>Deposit ETH</h4>
            <form  >
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="0"  value = "test"   />
              </div>
              <button type="submit" className="btn btn-success">Deposit</button>
            </form>

            <h4 className="mt-3">Change Greeting</h4>
            <form  >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder=""     />
              </div>
              <button type="submit" className="btn btn-dark">Change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );;
}

export default App;
