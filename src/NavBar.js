import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts([account]);
    }
  }

  return (
    <div>
      {/* Left Side - Social Media Icons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right Side - Connect Wallet */}
      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* Connect */}
      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  );
};

export default NavBar;
