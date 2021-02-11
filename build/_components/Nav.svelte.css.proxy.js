// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav.svelte-adqqhb a.svelte-adqqhb,a.svelte-adqqhb.svelte-adqqhb:link{--tw-text-opacity:1;color:rgba(220,38,38,var(--tw-text-opacity));color:red}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}