const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

window.onload = () => {
  const checkboxRef = document.querySelector('#theme-switch-toggle');
  checkboxRef.addEventListener('click', onCheckboxClick);
 



  function onCheckboxClick() {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.toggle(Theme.LIGHT);

    setTheme();
  };


  const localStorageSavedTheme = localStorage.getItem('theme');
  const isChecked = JSON.parse(localStorage.getItem('isCheckboxChecked'));

   function setTheme() {
    localStorage.setItem('isCheckboxChecked', event.target.checked);

    if (document.body.classList.contains(Theme.LIGHT)) {
      saveTheme(Theme.LIGHT);
    }

    if (document.body.classList.contains(Theme.DARK)) {
      saveTheme(Theme.DARK);
    }
  };

  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  localStorageSavedTheme
  ? document.body.classList.add(localStorageSavedTheme)
  : document.body.classList.add(Theme.LIGHT);

  checkboxRef.checked = isChecked;

  };
