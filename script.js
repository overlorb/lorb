let sidebar = `
  <a href="./index.html" target="_blank">Home</a>
  <a href="./swap.html" target="_blank">Swap</a>
  <a href="./swap.html" target="_blank">Wallet</a>
  <div class="br"></div>
  <a href="https://www.leviathanlobstergod.com/" target="_blank">Leviathan Lobster Sermons</a>
  <a href="https://www.leviathanlobstergod.com/" target="_blank">Holy Order of the Claw</a>
  <a href="https://holyorderoftheclaw.com/" target="_blank">Holy order Docs</a>
  <a href="https://www.facebook.com/groups/560665388170838/" target="_blank">Facebook</a>
  <a href="https://twitter.com/BankOfTheClaw" target="_blank">Twitter</a>
  <a href="https://discord.gg/MyFZ2PfSww" target="_blank">Discord</a>
  
  <div class="br"></div>
  <a href="https://untamedanimals.com/how-do-lobsters-communicate-can-they-scream/" target="_blank">How do we do it?</a>

  <a href="https://image.shutterstock.com/image-illustration/red-green-growth-graph-600w-47532643.jpg" target="_blank">Financial Model</a>
  <a href="https://image.shutterstock.com/image-illustration/red-green-growth-graph-600w-47532643.jpg" target="_blank">Charts</a>
  <a href="https://en.wikipedia.org/wiki/Lobster" target="_blank">Learn More</a>
  <a href="mailto:contact@lorb.net">Contact Us</a>
  <a href="https://discord.gg/MyFZ2PfSww" target="_blank">About Us</a>`;
document.getElementById("sidebar").innerHTML = sidebar;
function displaySidebar() {
  document.getElementById("ui").style = "display:initial";
}
function hideSidebar() {
  document.getElementById("ui").style = "display:none";
}

let lob1 = `
      ████████                                                                                  
      ██░░░░░░████                                                        ▓▓▓▓▓▓                
        ████▒▒▒▒░░████                                              ▓▓▓▓▓▓                      
            ██████▒▒▒▒▓▓██                                  ▒▒▓▓▓▓▒▒                            
          ██░░▒▒████▒▒▒▒░░██                          ▓▓▓▓▓▓                                    
          ██████    ██▓▓▒▒▓▓██                    ░░▒▒  ░░░░                                    
                      ██▓▓▒▒░░██              ▒▒▒▒                                              
    ██████████          ██████░░██        ▓▓▓▓                                                  
    ██░░░░░░░░████          ██░░░░██  ▓▓▓▓                                                      
      ██████▒▒░░░░██    ██████▒▒▒▒██▓▓                                                          
            ██▒▒▒▒▒▒██  ██░░░░██████                                                            
████████████████████████  ██▒▒░░░░░░██████                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          
██▒▒▒▒░░░░░░░░░░░░░░░░░░██████▒▒██░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          ██▓▓▓▓  
  ██▒▒░░░░░░░░░░░░░░░░░░▒▒▒▒████▒▒░░▓▓▓▓▓▓▒▒██                      ██████████████████▓▓▒▒░░░░██
    ████▒▒▒▒░░░░░░░░▒▒▒▒▒▒██░░░░██▒▒░░░░░░░░░░████        ██████████░░██░░░░░░██░░░░░░██████▒▒██
        ██████▒▒▒▒▒▒▒▒▒▒██████▒▒██████▒▒░░████░░░░████████░░░░░░██░░░░██░░░░██░░░░░░▒▒██▒▒░░██  
              ██████████    ░░██▒▒▒▒▒▒████░░░░░░░░██░░██░░██░░░░██░░██░░░░▒▒██▒▒▒▒▒▒▒▒████▒▒░░██
                              ██▒▒▒▒██▒▒████▒▒▒▒██░░░░██░░██▒▒██▒▒▒▒██▒▒▒▒██▒▒▒▒██████▒▒░░██████
                                ████▒▒██▒▒▒▒████████▒▒██▒▒▒▒████████████████████▒▒░░████▒▒▒▒██  
                                ██▒▒██████▒▒▒▒▒▒▒▒▒▒████▒▒██▒▒██▒▒██▒▒▒▒██▒▒▒▒████████  ██████  
                                  ██░░░░██████▒▒▒▒████▒▒████░░██░░░░██░░░░██████                
                                ██░░████  ██░░████░░██░░██  ██  ████  ██████                    
                              ██░░██      ██░░████░░████▒▒██                                    
                            ██░░██    ████░░██  ██░░████░░██                                    
                          ██▒▒██    ██░░▒▒██    ██░░██  ██░░████                                
                        ██▓▓██    ██▒▒████      ██▒▒██    ██▓▓▒▒██████                          
                        ████    ██░░██            ██▒▒████  ████▒▒▒▒▒▒██                        
                              ██▒▒██                ██░░▒▒██    ████████                        
                            ██▒▒██                    ████▒▒██                                  
                            ████                          ████                                  
                            `;
console.log(lob1);

const rpcUrls = {
  ethereum: "https://mainnet.infura.io/v3/6cac2ad604be45b298c9af77e9112e3e",
  polygon: "https://polygon.infura.io",
  xdai: "https://xdai.infura.io",
};

const slugToChainId = {
  ethereum: 1,
  polygon: 137,
  xdai: 100,
};

const tokenDecimals = {
  USDC: 6,
  LORB: 18,
  ETH: 18,
};

const addresses = {
  ethereum: {
    "LORB": "0x5c173a51468694c0114aad0c14cbea350f40c33e",
    "USD": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "ETH": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",  // WETH
    "DAI": "0x6b175474e89094c44da98b954eedeac495271d0f",  // DAI
    // "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",  // Tether
    // "WBTC": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",  // Wrapped Bitcoin
    // "LINK": "0x514910771AF9Ca656af840dff83E8264EcF986CA",  // Chainlink
    // "YFI": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",  // Yearn.Finance
    // "UNI": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",  // Uniswap
    // "SNX": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",  // Synthetix
    // "AAVE": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
  },
  polygon: {
    USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    ETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  }
};
const COMMON_INTERMEDIARIES = [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH address
  // Add other common intermediaries like USDC, DAI, etc.
];

const UNISWAP_V3_URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
async function getBestRoute(tokenA, tokenB) {
  let r = await getExchangeRate(tokenA, addresses.ethereum.ETH)
  
  if(tokenB=="0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"){
    return {
      token0Price:r.data.pools[0].token0Price,
      token1Price:r.data.pools[0].token1Price
    }
  }
  let r2 = await getExchangeRate(tokenB, addresses.ethereum.ETH)

  let rd={
    token0Price:r.data.pools[0].token0Price * r2.data.pools[0].token1Price,
    token1Price:r.data.pools[0].token1Price * r2.data.pools[0].token0Price
    
  }
  return rd
}

async function getExchangeRate(token0Address, token1Address) {
  
    const query = `
        {
          pools(where: {token0: "${token0Address}", token1: "${token1Address}"}) {
            token0Price
            token1Price
          }
        }
    `;

    try {
        const response = await fetch(UNISWAP_V3_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query
            })
        });

        const data = await response.json();
        console.log(data);
        if (data.errors) {
            throw new Error(data.errors[0].message);
        }

        const pools = data.data.pools;

        if (pools && pools.length > 0) {
            return data

        } else {
            throw new Error('No data found for the token pair.');
        }
    } catch (error) {
        console.error("Error fetching Uniswap price:", error.message);
    }
    
}

let lorb = {
  tokenAddress: "0x5c173a51468694c0114aad0c14cbea350f40c33e",
  price: 0,
  routerAddress: "0x1111111254EEB25477B68fb85Ed929f73A960582",
  async findRoute(){
    let r = await getBestRoute(addresses.ethereum.LORB, addresses.ethereum[document.getElementById('inputSelect').value])

    document.getElementById('swapOutput').value = r.token0Price * document.getElementById('swapInput').value
    document.getElementById('price').innerHTML = `$ ${r.token1Price.toFixed(16)}`
  },
  async getPrice() {
    // const contract = await new ethers.Contract(uniswapUsdcAddress, uniswapAbi, provider);
    // let slot0 = await contract.slot0()
    // let sqrtPriceX96 = await slot0.sqrtPriceX96;
    // return sqrtPriceX96 ** 2 / 2 ** 192

    let fet = await fetch(
      `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toTokenAddress=0x5c173a51468694c0114aad0c14cbea350f40c33e&amount=${1000000}`
    );
    let fetText = await fet.text();

    document.getElementById("price").innerHTML = `$${(
      1 /
      (JSON.parse(fetText).toTokenAmount / 1000000000000000000)
    )
      .toFixed(11)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} USD`;
  },
  setupSwap() {
    if (window.ethereum) {
      var provider = new ethers.providers.Web3Provider(ethereum);
      var signer = provider.getSigner();
      ethereum.enable();
    }
    this.getPrice();
  },
  async approve() {
    let amount = document.getElementById("");
    var tokenContract = new ethers.Contract(
      lorb.tokenAddress,
      lorb.tokenABI,
      provider
    );
    tokenContract.approve(lorb.routerAddress, amount, { gasLimit: gasLimit });
  },
  async swap() {
    const chain = "ethereum";
    const rpcUrl = rpcUrls[chain];
    const provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl);

    let wallet = new ethers.providers.Web3Provider(window.ethereum);
    // console.log(bitprint)
    const oneInch = new OneInch();

    const chainId = slugToChainId[chain];
    const fromToken = document.getElementById("inputSelect").value;
    const toToken = "LORB";
    const slippage = 1;
    console.log(wallet);
    const walletAddress = wallet.provider.selectedAddress;
    const formattedAmount = document.getElementById("swapInput").value;
    const amount = ethers.utils
      .parseUnits(formattedAmount, tokenDecimals[fromToken])
      .toString();

    console.log("chain:", chain);
    console.log("fromToken:", fromToken);
    console.log("toToken:", toToken);
    console.log("amount:", formattedAmount);

    const fromTokenAddress = addresses[chain][fromToken];
    const toTokenAddress = addresses[chain][toToken];
    const toTokenAmount = await oneInch.getQuote({
      chainId,
      fromTokenAddress,
      toTokenAddress,
      amount,
    });
    const toTokenAmountFormatted = ethers.utils.formatUnits(
      toTokenAmount,
      tokenDecimals[toToken]
    );
    console.log(`toTokenAmount: ${toTokenAmountFormatted}`);

    const tokenAddress = fromTokenAddress;
    const allowance = await oneInch.getAllowance({
      chainId,
      tokenAddress,
      walletAddress,
    });
    console.log("allowance:", allowance);
    try {
      if (ethers.BigNumber.from(allowance).lt(amount)) {
        const txData = await oneInch.getApproveTx({
          chainId,
          tokenAddress,
          amount,
        });
        console.log("approval data:", txData);

        const tx = await wallet.sendTransaction(txData);
        console.log("approval tx:", tx.hash);
        await tx.wait();
      }
    } catch (e) {
      console.trace(e);
    }

    const fromAddress = walletAddress;
    const txData = await oneInch.getSwapTx({
      chainId,
      fromTokenAddress,
      toTokenAddress,
      fromAddress,
      amount,
      slippage,
    });
    console.log("swap data:", txData);
    const tx = await wallet.sendTransaction(txData);
    console.log("swap tx:", tx.hash);
    await tx.wait();

    console.log("done");
  },
  quoteEndpoint() {
    return `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${
      addresses[document.getElementById("inputSelect").value]
    }&toTokenAddress=0x5c173a51468694c0114aad0c14cbea350f40c33e&amount=10000020000000000`;
  },
  async getQuote() {
    let fet = await fetch(
      `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${
        addresses.ethereum[document.getElementById("inputSelect").value]
      }&toTokenAddress=0x5c173a51468694c0114aad0c14cbea350f40c33e&amount=${
        document.getElementById("swapInput").value * 1000000000000000000
      }`
    );
    let fetText = await fet.text();

    document.getElementById("swapOutput").value = (
      JSON.parse(fetText).toTokenAmount / 1000000000000000000
    )
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  },
};
