const TronWeb = require('tronweb');
const bs58check = require('bs58check');

const generateMoleculeAddress = () => {
    const account = TronWeb.utils.accounts.generateAccount();
    let addressBytes = 
TronWeb.utils.code.hexStr2byteArray(account.address.hex);
    addressBytes[0] = 0x32;  // ASCII for 'M' (Molecule prefix)
    const moleculeAddress = bs58check.encode(Buffer.from(addressBytes));

    console.log('Hex Address:', account.address.hex);
    console.log('Molecule Address:', moleculeAddress);
    console.log('Private Key:', account.privateKey);
};

generateMoleculeAddress();

