document.getElementById('donation-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const crypto = document.getElementById('crypto-select').value;
  const walletAddress = document.getElementById('wallet-address').value;

  if (!walletAddress) {
    alert('Please enter your wallet address.');
    return;
  }

  // Simulate a donation process
  document.getElementById('donation-status').textContent = `Thank you! Donation via ${crypto} to ${walletAddress} is being processed.`;

  // Clear the form
  document.getElementById('donation-form').reset();
});