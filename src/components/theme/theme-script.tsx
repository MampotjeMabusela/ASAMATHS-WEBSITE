/** Inline script to apply saved theme before paint and avoid a light flash. */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("asamaths-theme");if(t==="dark"||t==="light"){document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}}catch(e){}})();`

  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
