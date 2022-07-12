export const faqs = [
  {
    question: "What is blockchain?",
    answer: { isList: false, content: "A blockchain is a shared, immutable decentralized ledger that records records and transactions with a time stamp. A creator can create a time-stamped record of their asset such as an artwork on the blockchain recording all the associated meta data." }
  },
  {
    question: "What is an NFT?",
    answer: {
      isList: true,
      listTitle: "An NFT or Non-Fungible Token represents real and intangible property and assets including art, intellectual property, digital property, financial instruments transacted on the blockchain governed by smart contracts using various standards.  The most common NFT standard being on Ethereum as the ERC-721 or ERC-1155. An NFT helps with proving:",
      listContent: [
        "Authenticity – The original or authentic work of an NFT can be verified using blockchain technology.",
        "Originality – each NFT is unique and it contains its own set of metadata.",
        "Uniqueness – one NFT is not equal to another and they cannot be exchanged for one another at parity.",
        "New Markets/Investments/Assets – NFTs exist in a blockchain and they can create new markets and forms of investment."
      ]
    }
  },
  {
    question: "What are gas or transaction fees?",
    answer: { isList: false, content: 'A gas or transaction fee refers to the transaction cost when doing a transaction on the blockchain. The transactions on ethereum are processed in "gas".' }
  },
  {
    question: "How do I set up a digital crypto wallet?",
    answer: { isList: false, content: 'A crypto wallet is a place where you can securely keep your crypto to purchase NFTs on ethereum. The most commonly used wallet is a non-custodial wallet like metamask. You can use metamask. You can download metamask through chrome on your browser. After you create your account on Artcryption, you can connect your wallet. You will obtain a twelve word seed phrase which will be your secure password. You can transfer funds to your crypto wallet to convert to crypto to purchase NFTs.' }
  },
  {
    question: "How do I earn resale royalties?",
    answer: { isList: false, content: 'A resale royalty is payment to a creator upon future secondary sales of an asset. An NFT, which is essentially a smart contract or programmable code, can be programmed to allow for the distribution of funds for the payment of royalties to the creator each time the work is resold.' }
  },
  {
    question: "How is my privacy and security protected?",
    answer: { isList: false, content: 'A blockchain is a distributed database, thereby any information will be shared with all the participants on the network which could contravene GDPR rules. However, the actual asset and associated metadata is not stored on the blockchain by Artcryption by using ethereum and IPFS (Inter Planetary File System), so this does not contravene GDPR. IPFS is a distributed system for storing and retrieving files, websites, applications, and data. IPFS uses content-based addressing instead of location-based. IPFS links can not be changed as links are created using hash on the content. Therefore, the off-chain storage of assets and data help us ensure compliance with GDPR and privacy laws. Artcryption is using IPFS through a gateway provided by Infura. The content is posted on the IPFS node and CID (Content Identifier) which is stored on the smart contract. With the help of CID, the file content is accessed from the IPFS node.' }
  },
]
