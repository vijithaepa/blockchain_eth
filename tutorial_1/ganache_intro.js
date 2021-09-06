var Web3 = require('web3')


var web3 = new Web3('HTTP://127.0.0.1:7545')
web3.eth.getAccounts().then(account => console.log(account))