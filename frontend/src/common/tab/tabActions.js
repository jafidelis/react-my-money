export function selectTab(taId) {
    return {
        type: 'TAB_SELECTED',
        payload: taId
    }
}