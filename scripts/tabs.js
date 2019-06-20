
(() => {
  function newTabItem({ _element }) {
    const select = () => {
      document.querySelectorAll('.tabs .tabs-item').forEach((item) => {
        item.classList.remove('tabs-item-selected');
      });
      _element.classList.add('tabs-item-selected');
    };

    return Object.freeze({ select });
  }

  function newTabLink({ _element }) {
    const _tabItem = newTabItem({
      _element: document
        .querySelector(`.tabs-items .tabs-item[data-tab='${_element.dataset.tab}']`),
    });

    const select = () => {
      document.querySelectorAll('.tabs .tabs-link').forEach((link) => {
        link.classList.remove('tabs-link-selected');
      });
      _element.classList.add('tabs-link-selected');
      _tabItem.select();
    };

    _element.addEventListener('click', select);
  }

  document.querySelectorAll('.tabs-link').forEach(link => newTabLink({ _element: link }));
})();
