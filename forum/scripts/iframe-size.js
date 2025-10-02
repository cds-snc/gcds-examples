document.addEventListener('DOMContentLoaded', () => {
  // Resize observer to send window width to parent
  const resize = new ResizeObserver(element => {
    const cr = element[0].contentRect;

    window.parent.postMessage({ name: document.body.getAttribute('data-iframe'), height: `${cr.height + 40}` }, '*');
  });

  resize.observe(document.body);
});