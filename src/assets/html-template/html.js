/**
 * Created by chensiwei on 2017-4-24.
 */
const path = require('path');
const uglifyJS = require('uglify-js');
const rootdir = process.cwd()
const env = process.env.NODE_ENV === 'production' ? 'dist' : 'src'
const js = uglifyJS.minify((path.resolve(rootdir, env + '/assets/lib/flexible.js')));
module.exports = function (html, clientBundleFileUrl, serverBundleStylePath, title) {
    return {
        html: `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta name="apple-mobile-web-app-capable" content="yes"/>
                        <meta content="telephone=no" name="format-detection"/>
                        <meta content="email=no" name="format-detection"/>
                        <meta name="HandheldFriendly" content="true">
                        <meta name="MobileOptimized" content="320">
                        <meta name="screen-orientation" content="portrait">
                        <meta name="x5-orientation" content="portrait">
                        <meta name="msapplication-tap-highlight" content="no">
                        <meta content="email=no" name="format-detection"/>
                        <meta http-equiv="Cache-Control" content="max-age=180"/>
                        <link rel="stylesheet" type="text/css" href="${serverBundleStylePath}" />
                        <script>${js.code}</script>
                        <title>${title ? title : 'Vue 2.0 SSR'}</title>
                    </head>
                    <body ontouchstart>
                        
                        ${html}
                        <script src="/js/client-js/commons.client.js"></script>
                        <script src="${clientBundleFileUrl}"></script>
                    </body>
                </html>
            `
    }
}