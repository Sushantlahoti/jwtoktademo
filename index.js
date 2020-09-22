let jose = require('node-jose');

let privateKey = `
{
    "p": "90OGdc11qLkS5e0CXNYI3PCMmv79Aq3fJ9WayDiAELFEXX906rR7Ltb7QuHThK2undUXlltFd1s-76nqtie7mGGGN5y1ttLn18IU2_b-UVOTgNNKUfmkAjtOI95Uw6KkP309dctJMx7t_1l5l4MdokAh0PJsy5eQyTbACAtg19E",
    "kty": "RSA",
    "q": "9D6P5huuIIWGP2xyk5zALOJC1XcnKGcLVby-90qBBjFMyFdGTOr7l1F0oLw8-ab8CPrkC3PpBtlJ2AmjckV3jQKEY9AicfzbeBlgCTVDFSJ7EYZEi0bakDuk1-z1bsL4n25TKBLQT1PYuZmzF3rt73d0aGLX7omFTmQrpHS8G6s",
    "d": "Te2zCl84nLIOZE24-5dN9A8jkfLLvm0mPGQA957MtEq-xcyF9u_gKkYjmTfZEevFpygA0JyTRijY4il5XdxExktfbiXVeF_JgAUuciNQk3LJKKfX_mtTyW7CdXfHpMmw10sDoewCkFiHEGnRTr_wLeJscddOzn-P0G_XfIITvwltSTVyOInQ9y7b3VXB2sDwLc1igdwhGSjSMoFxloBUs9uEDX05lGkYrV6-4HZbCvCTrJlIxIzm70hby1W8P-ivKf1NUWLLBGQGIFN3ipKD6zC_g46I4IBukNLycR97SBoRzEy4w-maSnRlKTw_ss1ccmAe_ZplWIZv7yVFsv_SIQ",
    "e": "AQAB",
    "use": "sig",
    "kid": "Welcome@123",
    "qi": "jlthkok1DYGVFOiHu9dnna_BmeoR7L6GTZqR-Rd_pdEwzHaK8rI2aBUogHAAUSWmhIzkvj9OZD6FaacfHjFCPw-M4-JGKLG0_dpTXOhhiJsF4AOka-PAl3nq342OGz3uqxNHxefJ-0T0rksEJPKOqluWxY2TFf64y_uKaUZc8IU",
    "dp": "r1s2Kqlxfhzy6Bk0Cb7JPldigDHCIXpJvqhgQwq-2Be_kkdoFWO10LwqKX6aUYgTRF_xgHJuS31snu90Q4beJe1UEHCU9nmQbpV30Z_TML4C5-Pw2z4eMG76tblhh_T6YwRg5_8phJW019kOwIL-KyksUlD7E1AEII8xlQLsxWE",
    "alg": "RS256",
    "dq": "5Vg1wSouyKT42WdY81kWb08K2O1o3Jxd3WU9oHHaU9lJMzoYbjOciYtYS3JWg0qUkU4dgs-VefPhTjZGvw-R4dwCOsN_BLAd2Vlif2L_GcJl85-zj2C57QPEl2kPUbFMylBLT27TIhomgKldrOemstzldvuRrZB-l4yiGmvvEr8",
    "n": "6-jJf9He0WfNFe_Qnu6Hb7NGXCUacYHVtVDjLY8fRDZKGh_-59z8v_iYlSF01yF-yX6QG2c4JGAOIYo9pdd4qEunPFWb0iI-aQOo0V7_tqFG4mnvr0AtRnK5ocfwWbJgSn725Nt6bb_IexXWaAEHJuxczlH0gPfVJWYDew7R3DEI4JDuNbIJCmB4F2jYMIDqr2OiWqrd3iEygqGA4sAjDiIJ7onTMEsFwirbiBWeo-PJG2oO-dqu1PfIUxHA9BA9TBDXsZKfB046BUPd-M4x3y1uduiJ38T0moNYvVjjaaMvJUDnqcpCuVUdaTR5uKILrWZ9m4aIYWNi0bhgAe8zmw"
}
`;

let header =  {
    "kty": "RSA",
    "e": "AQAB",
    "use": "sig",
    "kid": "Welcome@123",
    "alg": "RS256",
    "n": "6-jJf9He0WfNFe_Qnu6Hb7NGXCUacYHVtVDjLY8fRDZKGh_-59z8v_iYlSF01yF-yX6QG2c4JGAOIYo9pdd4qEunPFWb0iI-aQOo0V7_tqFG4mnvr0AtRnK5ocfwWbJgSn725Nt6bb_IexXWaAEHJuxczlH0gPfVJWYDew7R3DEI4JDuNbIJCmB4F2jYMIDqr2OiWqrd3iEygqGA4sAjDiIJ7onTMEsFwirbiBWeo-PJG2oO-dqu1PfIUxHA9BA9TBDXsZKfB046BUPd-M4x3y1uduiJ38T0moNYvVjjaaMvJUDnqcpCuVUdaTR5uKILrWZ9m4aIYWNi0bhgAe8zmw"
};

let payload = {
    iss: "0oasay5n9ewzySRsy0h7",
    sub: "0oasay5n9ewzySRsy0h7",
    aud: "https://dev-497881.oktapreview.com/oauth2/v1/token",
    exp: Math.floor(new Date().getTime() / 1000) + 60 * 30,
    token_exp: 60 * 60 * 24 * 30
};

jose.JWS.createSign({ format: 'compact', fields: header }, JSON.parse(privateKey))
    .update(JSON.stringify(payload))
    .final()
    .then(result => {
        console.log(result);
    });