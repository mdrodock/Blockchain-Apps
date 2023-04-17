//Place contract info into the brackets
const contratABI = [
	{
		"inputs": [],
		"name": "decrementCoolNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "generateRandomNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "incrementCoolNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_coolNumber",
				"type": "uint256"
			}
		],
		"name": "setCoolNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "proposalNames",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposal",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chairperson",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "coolNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFortune",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "vote",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winnerName",
		"outputs": [
			{
				"internalType": "string",
				"name": "winnerName_",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "winningProposal_",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0x811cfF6653f575C0C05Dc91bE7239d1903A2c02b';

//Metamask connection section
    async function connect() {
        if (typeof window.ethereum === 'undefined') {
          alert('Please install MetaMask to use this dApp.');
          return;
        }
      
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x5') {
          alert('Please connect to the Goerli test network in MetaMask.');
          return;
        }
      
        await ethereum.request({ method: 'eth_requestAccounts' });
    }


//Voting Contract Section
    async function vote(proposalId) {
        await connect();
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    try {
	        const accounts = await ethereum.request({ method: 'eth_accounts' });
	        const account = accounts[0];
	        const result = await contract.methods.vote(proposalId).send({ from: account });
	        console.log(result);
	    } 
        catch (error) {
	        console.error(error);
	    }
    }

// Call the chairperson function on the smart contract
    async function getChairperson() {
        // Connect to the Ethereum network through MetaMask
	    await connect();
  
	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Call the chairperson function on the smart contract
	    const chairperson = await contract.methods.chairperson().call();
	    console.log('The chairperson is: ' + chairperson);
    }
 
// Call the winnerName function on the smart contract
    async function getWinnerName() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();
  
	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Call the winnerName function on the smart contract
	    const winnerName = await contract.methods.winnerName().call();
	    console.log('The winner is: ' + winnerName);
    }

// Call the winningProposal function on the smart contract
    async function getWinningProposal() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();

	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Call the winningProposal function on the smart contract
	    const winningProposal = await contract.methods.winningProposal().call();
	    console.log('The winning proposal is: ' + winningProposal);
    }

//Call the Voters function on the smart contract
    async function getVoters() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();

	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Get the account entered by the user from the text box
	    const account = document.getElementById('account-input').value;
  
	    // Call the voters function on the smart contract with the selected account
	    try {
	        const result = await contract.methods.voters(account).call();
	        console.log(result);
	    } 
        catch (error) {
	        console.error(error);
	}
    }
  
//Calls the Proposals function on the smart contract
    async function getProposalStatus() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();
  
	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Get the proposal number entered by the user from the text box
	    const proposalNumber = document.getElementById('proposal-input').value;
        
	    // Call the proposals function on the smart contract with the selected proposal number
	    try {
	        const result = await contract.methods.proposals(proposalNumber).call();
	        console.log(result);
	    } 
        catch (error) {
	        console.error(error);
	    }
    }
  
//Calls the DelegateVote function on the smart contract
    async function delegateVote() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();
	
	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
	
	    // Get the address to delegate to from the text box
	    const delegateTo = document.getElementById('delegate-input').value;
	
	    // Delegate the vote of the current account to the specified address
	    try {
	        const result = await contract.methods.delegate(delegateTo).send({ from: ethereum.selectedAddress });
	         console.log(result);
	    } 
        catch (error) {
	        console.error(error);
	    }
    }
  
//calls the giverighttovote function on the smart contract
    async function giveRightToVote() {
	    // Connect to the Ethereum network through MetaMask
	    await connect();
  
	    // Create a new instance of the smart contract
	    const web3 = new Web3(window.ethereum);
	    const contract = new web3.eth.Contract(contractABI, contractAddress);
  
	    // Get the new account entered by the user from the text box
	    const account = document.getElementById('giveright-input').value;
  
	    // Call the giveRightToVote function on the smart contract with the selected account
	    try {
	        const result = await contract.methods.giveRightToVote(account).send({ from: window.ethereum.selectedAddress });
	        console.log(result);
	    } 
        catch (error) {
	        console.error(error);
	    }
    }

// Add event listeners
    window.addEventListener('load', () => {
	    const proposal1 = document.getElementById('proposal1');
	    proposal1.addEventListener('click', async () => {
	        await vote(1);
	    });
  
	    const proposal2 = document.getElementById('proposal2');
	    proposal2.addEventListener('click', async () => {
	        await vote(2);
	    });
  
	    const proposal3 = document.getElementById('proposal3');
        proposal3.addEventListener('click', async () => {
        await vote(3);
        });
  
        const chairpersonButton = document.getElementById('chairperson');
        chairpersonButton.addEventListener('click', async () => {
        await getChairperson();
        });

        const winnernameButton = document.getElementById('winnerName');
        winnernameButton.addEventListener('click', async () => {
        await getWinnerName();
        });

        const winningproposalButton = document.getElementById('winningProposal');
        winningproposalButton.addEventListener('click', async () => {
        await getWinningProposal();
        });

        const accountInput = document.getElementById('account-input');
        accountInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                getVoters();
            }
        });

        const delegateToInput = document.getElementById('delegate-input');
        delegateToInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                delegateVote();
            }
        });

        const proposalinput = document.getElementById('proposal-input');
        proposalinput.addEventListener('keypress', function(event) {
	        if (event.key === 'Enter') {
	            event.preventDefault();
	            getProposalStatus();
	        }
        });

        const input = document.getElementById('giveright-input');

        input.addEventListener('keyup', async function(event) {
            if (event.key === '13') {
                event.preventDefault();
                await giveRightToVote();
            }
        });
    });

//Random Number
async function generateRandomNumber() { 
    await connect();
    const web3 = new Web3(window.ethereum); 
    const contract = new web3.eth.Contract(contractABI, contractAddress); 
    await contract.methods.generateRandomNumber().send({ from: web3Provider.selectedAddress }); 
    const randomNumber = await contract.methods.getRandomNumber().call(); 
    document.getElementById("random-number").innerHTML = randomNumber; 
}
   
//Cool Number
async function loadWeb3() { 

    if (window.ethereum) { 

        window.web3 = new Web3(window.ethereum); 

        window.ethereum.enable(); 

    } 

} 


async function loadContract() { 

    return await new window.web3.eth.Contract(contractABI, contractAddress); 

} 

 

async function getCurrentAccount() { 

    const accounts = await window.web3.eth.getAccounts(); 

    return accounts[0]; 

} 

 

// Begin Smart Contracts 

async function displayCoolNumber() { 

    updateStatus('fetching Cool Number...'); 

    const coolNumber = await window.contract.methods.coolNumber().call(); 

    updateStatus(`coolNumber: ${coolNumber}`); 

} 

 

async function incrementCoolNumber() { 

    const value = 1; 

    updateStatus(`Incrementing coolNumber by ${value}`); 

    const account = await getCurrentAccount(); 

    const coolNumber = await window.contract.methods.incrementCoolNumber().send({ from: account }); 

    updateStatus('Incremented by 1.'); 

} 

 

async function decrementCoolNumber() { 

    const value = 1; 

    updateStatus(`Decrementing coolNumber by ${value}`); 

    const account = await getCurrentAccount(); 

    const coolNumber = await window.contract.methods.decrementCoolNumber().send({ from: account }); 

    updateStatus('Decremented by 1.'); 

} 

 

async function setCoolNumber() { 

    

   const value = Number(document.getElementById('CN').value); 

   updateStatus(`Setting Cool Number to: ${value}`); 

   const account = await getCurrentAccount(); 

   const coolNumber = await window.contract.methods.setCoolNumber(`${value}`).send({ from: account }); 

   updateStatus(`Cool Number has been set to: ${value}`); 

} 

 

// End Smart Contract 

 

async function load() { 

    await loadWeb3(); 

    window.contract = await loadContract(); 

    updateStatus('Ready!'); 

} 

 

function updateStatus(status) { 

    const statusEl = document.getElementById('status'); 

    statusEl.innerHTML = status; 

    console.log(status); 

} 

 

load(); 

//Fortune Teller
    async function getFortune() { 
        await connect();
        const web3 = new Web3(window.ethereum); 
        const contract = new web3.eth.Contract(abi, contractAddress); 
        const fortune = await contract.methods.getFortune().call(); 
        document.getElementById('fortune').innerHTML = fortune; 
    
    } 




