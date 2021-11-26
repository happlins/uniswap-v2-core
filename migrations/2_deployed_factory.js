const uniswapV2Factory = artifacts.require("UniswapV2Factory");


module.exports = function (deployer,network,accounts) {
    deployer.deploy(uniswapV2Factory,accounts[0]);
};
