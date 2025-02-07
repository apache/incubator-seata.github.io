import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

(function () {
  if (ExecutionEnvironment.canUseDOM) {
    let prefix = '';
    if (location.pathname.startsWith('/zh-cn')) {
      prefix = '/zh-cn';
    }
    let s = document.getElementsByTagName('script')[0];

    let matomo = document.createElement('script');
    matomo.text = `
      /* -- Matomo */
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        /* _paq.push(["setDoNotTrack", true]); */
        _paq.push(["disableCookies"]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://analytics.apache.org/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '46']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      /* End Matomo Code */
    `;
    s.parentNode.insertBefore(matomo, s);

    const controller = new AbortController();
    const signal = controller.signal;
    // set timeout
    setTimeout(() => {
      controller.abort();
    }, 5000);
    fetch(prefix + '/config.json', {signal})
      .then((res) => res.json())
      .then((data) => {
        if (data.analytics) {
        }
      }).catch((err => {
      // do nothing
    }));
  }
})();
