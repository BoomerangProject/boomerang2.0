module.exports = Object.freeze({
  jsonRpcUrl: 'http://localhost:18545',
  relayerUrl: 'http://localhost:3311',
  ensDomains: ['mylogin.eth', 'universal-id.eth', 'popularapp.eth'],
  clickerContractAddress: process.env.CLICKER_CONTRACT_ADDRESS,
  tokenContractAddress: process.env.TOKEN_CONTRACT_ADDRESS,
  boomerangContractAddress: process.env.BOOMERANG_CONTRACT_ADDRESS
});

