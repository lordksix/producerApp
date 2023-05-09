export const smoothScroll = (e, headerHeight) => {
  e.preventDefault();
  const targetDestination = e.target.getAttribute('href');
  const targetSelector = document.querySelector(targetDestination);
  const targetTop = Math.floor(targetSelector.getBoundingClientRect().top) - headerHeight;
  window.scrollBy({ top: targetTop, left: 0, behavior: 'smooth' });
}

export const smoothScrollTop = (e) => {
  e.preventDefault();
  const targetDestination = e.target.getAttribute('href');
  const targetSelector = document.querySelector(targetDestination);
  const targetTop = Math.floor(targetSelector.getBoundingClientRect().top);
  window.scrollBy({ top: targetTop, left: 0, behavior: 'smooth' });
}