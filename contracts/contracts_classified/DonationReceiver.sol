// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationReceiver {
    address public constant beneficiary = 0x7425A2911cD46F3060dc5E618395Cf912e8026d5;
    
    event DonationReceived(address donor, uint256 amount);
    
    receive() external payable {
        payable(beneficiary).transfer(msg.value);
        emit DonationReceived(msg.sender, msg.value);
    }
}