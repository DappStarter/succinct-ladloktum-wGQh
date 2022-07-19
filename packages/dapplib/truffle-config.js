require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember method good gloom suspect truth'; 
let testAccounts = [
"0xa9ce908e3bbf3102648d6408f3a1e326ba6d6574df388eeb998c4fc23c5222cc",
"0xd63560f462feeb0a735de66333c02880b02f059991639a33c3cd9a7054c0b172",
"0x27179382342e18e18c77c9616ceb763bbf4e3c0cf458f27e19a6f7eec7c3538c",
"0x8eeb4e02dbce3a2d2c7595d082eaa49d367d2f6ddc84a7630d8b65a43fddaf26",
"0x8077c5a2cba8aafdf7a494fdb5c34bbf3c13bc3ed532d53a53206037db15adf0",
"0x22a7b903b140fa41eafb45b43764a63ddeaba5ee67cac1452213258e65abd49a",
"0xc8dc2173879244a2359620d69e36eebfc2e71037a52305c2ca59b111583d6bae",
"0xe99bf93f821ea17523bd17f01b2dbb75da39955c6d675ab8c752bfec771eb6a8",
"0xff2eac3f834daceca79660f852e33f02681921d6ef3730c532501f3bb61e34c1",
"0xa7e5e79e48f9d6bafe57a249f1fe0653fb1133100f05a4793d24e1573ca75db7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

