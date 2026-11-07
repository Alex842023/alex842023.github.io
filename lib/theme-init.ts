/** Apply a saved color choice before the first paint. This contains no user data. */
export const THEME_INIT_SCRIPT = `(() => {
  let choice = 'dark';
  try {
    const saved = localStorage.getItem('surya.portfolio.theme');
    if (['dark', 'light', 'system'].includes(saved)) choice = saved;
  } catch {}
  const resolved = choice === 'system'
    ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : choice;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
})();`;
