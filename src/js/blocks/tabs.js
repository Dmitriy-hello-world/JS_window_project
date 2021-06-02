const tabs = ({tabsSelector,contentsSelector,headerSelector,activeClass, linkSelector, display}) => {

    const tabs = document.querySelectorAll(tabsSelector),
          contents = document.querySelectorAll(contentsSelector),
          header = document.querySelector(headerSelector),
          links = document.querySelectorAll(linkSelector);

    function hideTabs() {
        contents.forEach(item => {
            item.style.display = 'none';
        });

        if(links.length > 0) {
            links.forEach(item => {
                item.classList.remove(activeClass);
            });
        } else {
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    }

    function showTab(i = 0) {
        contents[i].style.display = display;

        if(links.length > 0) {
            links[i].classList.add(activeClass);
        } else {
            tabs[i].classList.add(activeClass);
        }
    }

    hideTabs();
    showTab();

    header.addEventListener('click', e => {
        const target = e.target;

        if (target && (target.classList.contains(tabsSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, '')) )) {

            tabs.forEach((item,index) => {
                if (item == target || item == target.parentNode) {
                    hideTabs();
                    showTab(index);
                }
            });
        }
    });

};

export default tabs;