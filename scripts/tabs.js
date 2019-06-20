
(() => {
  function newTabItem({ _element }) {
    const select = () => {
      _element.classList.add('tabs-item-selected');
    };

    const deselect = () => {
      _element.classList.remove('tabs-item-selected');
    };

    return Object.freeze({ select, deselect });
  }

  function newTabLink({ _element, _setNewCurrentTab }) {
    const _tabItemElement = document.querySelector(
      `.tabs-items .tabs-item[data-tab='${_element.dataset.tab}']`,
    );
    const _tabItem = newTabItem({ _element: _tabItemElement });

    const updateSelectedStatus = (event) => {
      if (Array.from(event.currentTarget.classList).includes('tabs-link-selected')) return;
      _setNewCurrentTab({ currentTarget: event.currentTarget });
    };

    const select = () => {
      _element.classList.add('tabs-link-selected');
      _tabItem.select();
    };

    const deselect = () => {
      _element.classList.remove('tabs-link-selected');
      _tabItem.deselect();
    };

    _element.addEventListener('click', updateSelectedStatus);

    return Object.freeze({ select, deselect });
  }

  function newTabBox({ _element }) {
    const _tabLinkElementObjWeakMap = new WeakMap();
    let _currentTab = _element.getElementsByClassName('tabs-link-selected')[0];

    const _setNewCurrentTab = ({ currentTarget }) => {
      _tabLinkElementObjWeakMap.get(_currentTab).deselect();
      _tabLinkElementObjWeakMap.get(currentTarget).select();
      _currentTab = currentTarget;
    };

    _element.querySelectorAll('.tabs-links .tabs-link').forEach((link) => {
      _tabLinkElementObjWeakMap.set(link, newTabLink({ _element: link, _setNewCurrentTab }));
    });
  }

  newTabBox({ _element: document.querySelector('.tabs') });
})();
