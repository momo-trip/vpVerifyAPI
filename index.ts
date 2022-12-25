import express from 'express'
import obtainResult from './obtainResult';


const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS対応（本番環境では見直し）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

app.post('/verify_vp', async function(req, res) {
    const isProofVerified = await obtainResult(
        req.body.proof,
        req.body.publicKey,
        req.body.messages,
        req.body.nonce,
    );

    res.json({
        "isProofVerified": isProofVerified
    });
})
