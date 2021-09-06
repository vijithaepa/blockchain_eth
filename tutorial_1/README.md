To get started:

Ganache UI
cd C:\Apps\ganache-ui-develop
0. Run `npm install`
0. Run `npm run dev`

Ganache CLI
run ganache-cli

Smart Contract Used 


---
###Ganache 2.5.4.0
###pragma solidity ^0.4.24;

contract Message {
string myMessage;

    function setMessage(string x) public {
        myMessage = x;
    }

    function getMessage() public view returns (string) {
        return myMessage;
    }
}