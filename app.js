const connectButton = document.getElementById('connectButton');
const walletStatus = document.getElementById('walletStatus');
const connectedWallet = document.getElementById('connectedWallet');
const qrcodeDiv = document.getElementById('qrcode');

// Smart contract address (replace with your deployed contract address)
const contractAddress = '0x7425A2911cD46F3060dc5E618395Cf912e8026d5';

// Generate QR Code
QRCode.toCanvas(qrcodeDiv, contractAddress, {
    width: 200,
    color: {
        dark: '#000',
        light: '#fff'
    }
}, (error) => {
    if (error) console.error(error);
});

connectButton.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];
            connectedWallet.textContent = `${walletAddress.substring(0,6)}...${walletAddress.substring(walletAddress.length-4)}`;
            walletStatus.classList.remove('hidden');
            connectButton.textContent = 'Connected';
            connectButton.disabled = true;
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Please install MetaMask!');
    }
});