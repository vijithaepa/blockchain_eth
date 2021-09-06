const Web3 = require('web3')
const Accounts = require('web3-eth-accounts');
// const web3 = new Web3('HTTP://127.0.0.1:7545')
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/2ca4f846bd9e4808bf8ea2e86948924c"));
const  accounts = new Accounts("https://rinkeby.infura.io/v3/2ca4f846bd9e4808bf8ea2e86948924c");

web3.eth.getBalance("0xb8ee3a86C418e9eB3E9168CF0c1C03E2961Aa8ca", function(err, result) {
    if (err) {
        console.log('Error ', err)
    } else {
        console.log('Balances ', web3.utils.fromWei(result, "ether") + " ETH")
    }
})

console.log("Accounts ", accounts.wallet._accounts)
web3.eth.getChainId().then(id => console.log('Chain Id ', id));
web3.eth.getTransactionCount('0x1932f7f9D1FA1F68011c351C9E25597d6d69824e').then(count => console.log('cont is ', count))
web3.eth.getGasPrice().then((error, gPrice) => console.log('Current gas price ', gPrice))
web3.eth.getUncle(2,0)
    .then((blockHashOrBlockNumber, uncleIndex, returnTransactionObjects) => console.log('Uncles ', blockHashOrBlockNumber, uncleIndex))
web3.eth.getBlockTransactionCount(3).then(blockNo => console.log('getBlockTransactionCount ', blockNo))


