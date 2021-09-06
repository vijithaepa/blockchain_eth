// Configurations

// 1 - Setup configs
const Web3 = require('web3')
const EthereumTransaction = require("ethereumjs-tx")
const web3 = new Web3('HTTP://127.0.0.1:7545')

// 2 - Set teh sending and receiveing address
const sendingAddress = '0x55d43cD0f7341e26769b6Da78Ba0f10f86D043e2'
const receivingAddress = '0x0b14cd60FaB798Fc259b6C5A9eCE45E9b0E58C9c'

// 3 - check balance of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Crete Transactions
const rawTxn = {
    nonce: ascii_2_0xhex(2),
    to: receivingAddress,
    gasPrice: ascii_2_0xhex(20000000),
    gasLimit: ascii_2_0xhex(30000),
    value: ascii_2_0xhex(112000),
    data: '0x00'
}

function ascii_2_0xhex(num){
    return "0x" + num.toString(16)
}

// Sign the transaction
const privateKeySender = 'e3ecaf163194f91d60b83a00cc3bc77679dd7dd2b944f00df9067ea7b4ea98a9'
const privateKeyHex = new Buffer.from(privateKeySender, 'hex')
let transaction;
transaction = new EthereumTransaction.Transaction(rawTxn);
transaction.sign(privateKeyHex)

// Send the transaction to the network
const serializeTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializeTransaction)
    .then(hash => console.log('Txt hash', hash))
    .then(error => console.error(error))
