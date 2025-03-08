window.dataLayer = window.dataLayer || [];

function gtag(){
    dataLayer.push(arguments);
}

gtag('js', new Date());

function configureGoogleTagManager(id) {
    gtag('config', id);
}

function pushGoogleTagEvent(json) {
    gtag(...JSON.parse(json));
}

