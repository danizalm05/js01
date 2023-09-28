import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
   


function App() {
  const [depositValue, setDepositValue] = useState(0);
  const [greet, setGreet] = useState('');
  const [greetingValue, setGreetingValue] = useState('');
  const [balance, setBalance] = useState();

  //let signer = null;

 
   // v6,   no longer had a .providers puddle. 
   // Web3Provider has been changed to BrowserProvider.
   
  //const provider = new ethers.providers.Web3Provider(window.ethereum)
   const provider = new ethers.BrowserProvider(window.ethereum)
   const signer = provider.getSigner()
      
  //const contractAddress = 'yourDeployedContractAddressGoesHere';
  //const ABI = "yourABIGoesHere"
  //const contract = new ethers.Contract(contractAddress, ABI, signer);  

  useEffect(() => {
    //const requestAccounts = async () => {
     const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
      
    }
    connectWallet().catch(console.err)
  }, [])



  const handleDepositChange = (e) => {
     setDepositValue(e.target.value)
  }

  const handleGreetingChange = (e) => {
    setGreetingValue(e.target.value);
  }

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    console.log(depositValue)
    //const ethValue = ethers.utils.parseEther(depositValue)
   // const deposit = await contract.deposit({value: ethValue});
   // await deposit.wait();
   // const balance = await provider.getBalance(contractAddress);
   // setBalance(ethers.utils.formatEther(balance));
  }

  const handleGreetingSubmit = async (e) => {
    
    e.preventDefault();
    console.log(greetingValue)
    //await contract.setGreeting(greetingValue)
    //setGreet(greetingValue);
   // setGreetingValue('');
  }

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <h3>Greeting  </h3>
          <p>Contract Balance: { 0  } ETH</p>
        </div>

        <div className="col">
          <div className="mb-3">
            <h4>Deposit ETH</h4>
            <form   onSubmit={handleDepositSubmit}>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="0" onChange={handleDepositChange} value={depositValue} />
              </div>
              <button type="submit" className="btn btn-success">Deposit</button>
            </form>

            <h4 className="mt-3">Change Greeting</h4>
            <form  onSubmit={handleGreetingSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="10" onChange={handleGreetingChange} value={greetingValue} />
              </div>
              <button type="submit" className="btn btn-dark">Change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
