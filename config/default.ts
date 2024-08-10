export default {
    PORT: 3774,
    dbUri: 'mongodb://localhost:27017/restfulapi',
    saltWalkFactor: 10,
    accessTokenTtl: '1h',
    refreshTokenTtl: '30d',
    publicKey: 'public-key',
    privateKey: 'private-key'
};
