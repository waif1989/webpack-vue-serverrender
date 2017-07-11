/**
 * Created by chensiwei on 2017-4-21.
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const rootdir = process.cwd()
const env = process.env.NODE_ENV === 'production' ? 'dist' : 'src'
const vueServerRenderer = require('vue-server-renderer');
const template = require(path.resolve(rootdir, env + '/assets/html-template/html'))

const serverBundleFilePath = path.resolve(rootdir, env + '/js/server-js/page2.server.js')
const serverBundleFileCode = fs.readFileSync(serverBundleFilePath, 'utf8');
const bundleRenderer = vueServerRenderer.createBundleRenderer(serverBundleFileCode);
const clientBundleFilePath = path.resolve(rootdir, env + '/js/client-js/page2.client.js');
const clientBundleFileUrl = '/js/client-js/page2.client.js';
const serverBundleStylePath = '/css/page2.css';

module.exports = {
    render: function (res) {
        bundleRenderer.renderToString((err, html) => {
            if (err) {
                res.status(500).send(`
                    <h1>Error: ${err.message}</h1>
                    <pre>${err.stack}</pre>
                `);
            } else {
                res.send(template(html, clientBundleFileUrl, serverBundleStylePath, 'html2title').html);
            }
        });
    },
    clientBundleFilePath: clientBundleFilePath,
    clientBundleFileUrl: clientBundleFileUrl
}