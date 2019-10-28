
export default () => {
  if (window == null) {
    return;
  }

  // @ts-ignore
  let _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);

  (function() {
    let u = "//copyundpasta.de/matomo/";
    
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '1']);
    
    let d = document
    let g = d.createElement('script');
    let s = d.getElementsByTagName('script')[0];
    
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
  })();
}
