
export const getArrFromLocalStorage = <T>(itemName: string) => {
    const items = localStorage.getItem(itemName) || [];
    if (Array.isArray(items)) {
        return items as T[];
    }
    const parse = JSON.parse(items);
    return parse as T[];

}

