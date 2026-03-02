(function () {
  function trackClick(name, href) {
    if (window.plausible) {
      window.plausible('Outbound Link: Click', {
        props: { link_name: name, url: href }
      });
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_outbound_link', {
        link_name: name,
        link_url: href
      });
    }
  }

  document.querySelectorAll('.tracked-link').forEach(function (node) {
    node.addEventListener('click', function () {
      var name = node.dataset.linkName || node.textContent.trim();
      trackClick(name, node.href);
    });
  });
})();
