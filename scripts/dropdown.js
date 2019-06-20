(() => {
  function newDropdown({ element }) {
    const _button = element.querySelector('.dropdown-button');
    const _content = element.querySelector('.dropdown-content');

    const toggleContent = () => {
      _content.classList.toggle('dropdown-hidden');
    };
    // const toggleContent = () => console.log('toggleContent');

    _button.addEventListener('click', toggleContent);
  }
  document.querySelectorAll('.dropdown').forEach(dropdown => newDropdown({ element: dropdown }));
})();
