require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth screen comic install photo flush gauge'; 
let testAccounts = [
"0x776b1d00814b748cacd1bd811800fbf77c37fe1aa553e9ff87e50da774f86116",
"0x67c6905cdcd955169561cbe38348f191ba872882e9afbb5e317e0c314e46786c",
"0xf78ce69650438e6eb7996b9ff0a9eade43a25a6deacde890d622382982d875d4",
"0x9582c5bd745c04935f7d7765f0262e71cb36cbf84753e14df1e7a6017bfa1928",
"0x39bbf413833183da2be96be39f853f5eb652a055b3a1e3c67f78fa40f4084a09",
"0x941d41d393e0ac1057c344e501e6266c3d97def9c2cc507b4a316e1f52e34807",
"0xabd932bff6d3c40f7e3fca6ffce49c2f050414d426ec496f22ad610b86d4bf85",
"0x96b7cc4259d035c4c4ecdfb05350e8c0b1a132c580d18a7f9811f5710090e096",
"0x0842d095a34d3d5677f0bdf5d9ab23ab42cb33037323a37ff283533200025e04",
"0x3e5d693d52e22c143ca2fb3c3622f35044d73a0f1f0e7d3ab25276dd34c6bb84"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


