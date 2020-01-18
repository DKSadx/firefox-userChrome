document
  .getElementById('urlbar-input')
  .setAttribute('onfocus', "this.placeholder = ''");
document
  .getElementById('urlbar-input')
  .setAttribute(
    'onblur',
    "this.placeholder = 'Search with Google or enter address'",
  );
