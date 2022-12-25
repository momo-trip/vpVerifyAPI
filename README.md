# vpComposeAPI
Using https://github.com/mattrglobal/bbs-signatures

# Usage

Throw a POST request to the following URL


//To create VP...
http://domain:3000/verify_vp


input---<br>
proof: proofValue of a VP<br>
publicKey: Issuer's publicKey<br>
messages: revealed messages<br>
nonce: nonce

output---<br>
result: verification result for a VP

