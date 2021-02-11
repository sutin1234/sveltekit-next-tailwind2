// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav.svelte-vi2fk0 a.svelte-vi2fk0,a.svelte-vi2fk0.svelte-vi2fk0:link{@apply text-red-600;;color:red}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}