import { useState } from "react";
import { ethers } from "ethers";
import roboPunksNFT from "./RoboPunksNFT.json";

const roboPunksNFTAddress = "0x088830420c692d42c0369d438C869ec4Ac7D7426";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(mintAmount);
        console.log("response: ", response);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1);
    }
  };

  const handleIncrement = () => {
    if (mintAmount < 3) {
      setMintAmount(mintAmount + 1);
    }
  };

  return (
    <div>
      <h1>RoboPunks</h1>
      <p>Blah Blah Blah Mint Pls</p>
      {isConnected ? (
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={mintAmount} />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleMint}>Mint Now</button>
        </div>
      ) : (
        <p>You must be connected to mint.</p>
      )}
    </div>
  );
};

export default MainMint;
