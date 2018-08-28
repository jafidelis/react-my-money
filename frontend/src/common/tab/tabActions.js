export function selectTab(taId) {
    return {
        type: 'TAB_SELECTED',
        payload: taId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach(e => tabsToShow[e] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}