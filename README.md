# uniswap v2 core 部署

## 安装依赖

```shell
> npm install -g truffle
> npm install -g yarn
> yarn
```

## 编译
`yarn compile`

## 部署

修改[truffle-config.js](./truffle-config.js)文件中的以下部分

```js
//  如果你有多个地址，可以打开下面的注释,并修改HDWalletProvider中的privateKey为privateKeys
// const privateKeys = ["1234123aa...","abasdfasdf.."]
const privateKey = "adfasdfasdfa..."

module.exports = {
  networks: {
    development: {
     provider: ()=>new HDWalletProvider(privateKey, `https://rpc.bhpnet.io`),
     network_id: "999",       // Any network (default: none)
     gas:8000000, // gasLimit
     gasPrice: 20000000000, // 20gwei
     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
};
```
最后执行
`yarn deploy`

## 注意
在`unswap-v2-periphery`中需要`UniswapV2Pair initCode`的hash，因此我们需要执行以下命令，计算出hash
```shell
cd test && node initCode.js
```