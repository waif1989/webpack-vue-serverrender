/**
 * Created by chensiwei on 2017-4-24.
 */
const fs = require('fs')
const express = require('express');
const router = express.Router();

router.get('/page1', function(req, res) {
    const r = require('./page1-router/page1-router')
    r.render(res)
    router.get(r.clientBundleFileUrl, function (req, res) {
        const clientBundleFileCode = fs.readFileSync(r.clientBundleFilePath, 'utf8');
        res.send(clientBundleFileCode);
    });
})
router.get('/page2', function(req, res) {
    const r = require('./page2-router/page2-router')
    r.render(res)
    router.get(r.clientBundleFileUrl, function (req, res) {
        const clientBundleFileCode = fs.readFileSync(r.clientBundleFilePath, 'utf8');
        res.send(clientBundleFileCode);
    });
})


module.exports = router;