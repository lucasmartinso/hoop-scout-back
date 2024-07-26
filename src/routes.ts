
const exp = require('express')
const router = exp.Router();

console.log('customers route');
router.get('/', testReq);

async function testReq(req, res) {
    console.log(req)
    return res.status(200).json({
        result: 'ok'
    })
}

module.exports = router;
