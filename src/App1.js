import React, { Component } from "react";
import Hyper from "./contracts/Hyper.json";
import WalletLink from 'walletlink'
import Web3 from 'web3'
import DeviceDetector from "device-detector-js";

import "./App.css";


const APP_NAME = 'My Awesome App'
const APP_LOGO_URL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Ftiktok-logo&psig=AOvVaw2NtFJq4O-mld4y8UhCU-3Z&ust=1603630610289000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCOp9yjzewCFQAAAAAdAAAAABAD'
const ETH_JSONRPC_URL = 'https://ropsten.infura.io/v3/f9d741db28ba4802b253f1cdae45f150'
const CHAIN_ID = 3

// Initialize WalletLink
export const walletLink = new WalletLink({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: false
})

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

class App extends Component {

  constructor() {
    super();
    this.state = { device:'',storageValue: 0, web3: null, accounts: null, contract: null, owner: 0 };
  }





  componentDidMount = async () => {

   

    
  
    try {

      
// let web3 
// let accounts
      
     // console.log(window.navigator.userAgent)
      // Initialize a Web3 Provider object
    

    

    //  if(device.device.type !== "desktop"){

    //  //  Get network provider and web3 instance.
    //  const Web3 = require("web3");
    
    //  console.log(new Web3(window.ethereum))
    //    window.ethereum.enable().then((accounts) => {
    //      console.log(`User's address is ${accounts[0]}`)
    //      web3.eth.defaultAccount = accounts[0]
    //      accounts = accounts[0]
    //    })
    //  const web3 = new Web3(window.ethereum)


    //  // Use web3 to get the user's accounts.
    //    const deployedNetwork = Hyper.networks["3"];
    //    const instance = new web3.eth.Contract(
    //      Hyper.abi,
    //      deployedNetwork.address,
    //    );
    //    this.setState({ web3, accounts: web3.eth.defaultAccount, contract: instance, device: true });

    //  }else{

      if (device.device.type === 'desktop' || (device.device.type !== 'desktop' && typeof window.ethereum === 'undefined')) {
       const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)

       // Initialize a Web3 object
       const web3 = new Web3(ethereum)

       

        ethereum.send('eth_requestAccounts').then((accounts) => {
         console.log(`User's address is ${accounts[0]}`)
         web3.eth.defaultAccount = accounts[0]
         accounts = accounts[0]

         const deployedNetwork = Hyper.networks["3"];
         const instance = new web3.eth.Contract(
           Hyper.abi,
           deployedNetwork.address,
         );

         this.setState({ web3, accounts: web3.eth.defaultAccount, contract: instance, device: false });
         this.runExample()
       })
      }else{  
        // let web3 = new Web3(window.ethereum)
        // window.web3 = web3
        
          const web3 = new Web3(window.ethereum);
          window.ethereum.enable().then((accounts) => {
            console.log(`User's address is ${accounts[0]}`)

            // Optionally, have the default account set for web3.js
            web3.eth.defaultAccount = accounts[0]

            const deployedNetwork = Hyper.networks["3"];
            const instance = new web3.eth.Contract(
              Hyper.abi,
              deployedNetwork.address,
            );

            this.setState({ web3:"hello", accounts: web3.eth.defaultAccount, contract: instance, device: false });
            this.runExample()

          })
        
        
       

      }
      

       
     
     
     
     

      // Alternatively, you can use ethereum.enable()
     


      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // console.log(networkId)
      
     // instance._address = deployedNetwork.address

  
      // window.ethereum.on("accountsChanged", async function () {
      //   // Time to reload your interface with accounts[0]!
      //   let updated_account = await web3.eth.getAccounts();
      //   // accounts = await web3.eth.getAccounts();
      //   this.setState({accounts:updated_account})
       
      // }.bind(this))

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      
     
      
    } catch (error) {
      console.error(error);
      // Catch any errors for any of the above operations.
      alert(
  error
      );
 
    }
  };

  changeaccount = () =>{
   // this.setState({accounts:'account'})
   console.log('hii')
  }

  sendtrx = async() =>{
    const { accounts, contract } = this.state;

    let response = await contract.methods.registrationExt(this.state.owner, '0x2287340c8cF42b1E9F0A11eC3890Fd016C2E7F21', '10000000000000000').send({ from: accounts, gas: 3000000, value: '50000000000000000' })
    
    console.log(response)
  }

  disconnect = () =>{
    walletLink.disconnect()
  }

  runExample =  () => {
    const {accounts,contract } = this.state;
   
    // Stores a given value, 5 by default.

   // await contract.methods.set(500).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
 try{

   contract.methods.owner().call({ from: accounts }, function (err, data) {
     console.log(data, err);
     this.setState({ owner: data })
   }.bind(this));
 } catch(e){
   console.log(e)
 }

     
    
   

      
    
 

    // Update state with the result.
 
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          {device.device.type} 
        </p>
     
        <div>this is the owner : {this.state.owner} </div>
        <div>this is the owner : {this.state.accounts} </div>
        <button onClick={()=>this.sendtrx()}>hello</button>
        <button onClick={() => this.disconnect()}>disconnect</button>
      </div>
    );
  }
}

export default App;
