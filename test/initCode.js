var uniswapV2Factory = require("../build/contracts/UniswapV2Factory.json")
var utils = require("ethers/lib/utils")
console.log(utils.keccak256(uniswapV2Factory.bytecode))