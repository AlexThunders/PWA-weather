export const getCityFromClass = (element) => {
    let resCity = "";
    if (element.className.indexOf('city') > -1) {
        resCity = element.className.slice(0, element.className.indexOf('city') - 1).toLowerCase();
    }
    return resCity;
};
export const traverseChildrenToAddAttrubutes = (elements) => {
    elements.forEach(el => {
        if (el.constructor === Text)
            return;
        let cityTitle = getCityFromClass(el);
        Array.from(el.children).forEach(node => {
            if (node.constructor !== Text) {
                node.setAttribute("data-city", cityTitle);
                let grandchildren = Array.from(node.children);
                if (grandchildren.length > 0) {
                    grandchildren.forEach(kid => {
                        if (kid.constructor === Text)
                            return;
                        kid.setAttribute("data-city", cityTitle);
                    });
                }
            }
        });
    });
};
