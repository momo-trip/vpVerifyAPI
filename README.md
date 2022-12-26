# vpVerifyAPI
Using https://github.com/mattrglobal/bbs-signatures

# Usage

Throw a POST request to the following URL


//To verify VP...
http://domain:9000/verify_vp


input---<br>
proof: proofValue of a submitted VP<br>
publicKey: Issuer's publicKey<br>
messages: revealed messages<br>
nonce: nonce

output---<br>
result: verification result for a VP

