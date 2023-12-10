const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    
    it('saves the addresses', async () => {
        const RealEstate = ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()

        console.log('RealEstate deployed to:', realEstate.address)
    })
})
