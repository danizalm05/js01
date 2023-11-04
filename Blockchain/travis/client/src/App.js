import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
//const { ethers } = require("ethers");   


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
      
  // your Deployed Contract Address Goes Here';
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const gorliAddress =  '0x03B440027c9dACB15e7a69525b68B9e5d059E62f';
  
  ///////
  //const ABI = "yourABIGoesHere"
  const ABI  =
  [
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "_greeting",
           "type": "string"
         }
       ],
       "stateMutability": "nonpayable",
       "type": "constructor"
     },
     {
       "inputs": [],
       "name": "deposit",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "greet",
       "outputs": [
         {
           "internalType": "string",
           "name": "",
           "type": "string"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "_greeting",
           "type": "string"
         }
       ],
       "name": "setGreeting",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     }
   ]
  
    
  
   const contract = new ethers.Contract(contractAddress, ABI, signer);  
/////////////////////////
  useEffect(() => {
    //const requestAccounts = async () => {
     const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
      
    }
    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress);
      
      console.log(balance)
      console.log( ethers.formatEther(balance)); 
      // setBalance(ethers.utils.formatEther(balance));  
      setBalance(ethers.formatEther(balance))
    }
    const getGreeting = async () => {
      const greeting = await contract.greet();
      setGreet(greeting);
    }

    connectWallet().catch(console.err)
 
    getBalance().catch(console.err)
    getGreeting().catch(console.error)
    
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
    const greetinUpate = await contract.setGreeting(greetingValue)
    await greetinUpate.await()
    setGreet(greetingValue);
    setGreetingValue('');
  }

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <h3>{greet} </h3>
          <p>Contract Balance: {balance} - ETH</p> 
           
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
