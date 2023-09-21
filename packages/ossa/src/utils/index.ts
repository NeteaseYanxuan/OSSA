const cache: Set<string> = new Set();
/**
 * 当使用了了过期属性时显示警告
 * @param moduleName 模块名称
 * @param newPropName 新的属性名
 * @param oldPropName 旧的属性名
 */
export function warnDeprecatedProp(moduleName: string, newPropName: string, oldPropName: string): void {
    const msg = `在 ${moduleName} 组件当中的 '${oldPropName}' 属性将在未来的版本中废弃，请使用 '${newPropName}' 代替!`;
    if(cache.has(msg)) return;
    cache.add(msg);
    console.warn(`%c🚨 ${msg}`, 'font-weight: 800;');
}
/**
 * 安全地使用过期属性
 * @param newProp 新属性值
 * @param oldProp 旧属性值
 * @param waringInfo 当用户传入了过期的属性值时，如果如果传入了相关警告信息，将会自动在开发时显示警告
 * @returns 
 */
export function deprecatedProp<T = unknown, P = T>(newProp: T, oldProp: P, waringInfo?: {
    newPropName: string;
    oldPropName: string;
    moduleName: string;
}, defaultVal?: T): T | P | undefined {
    if(typeof oldProp !== 'undefined' && waringInfo && waringInfo.oldPropName && process.env.NODE_ENV === "development") {
        warnDeprecatedProp(waringInfo.moduleName, waringInfo.newPropName, waringInfo.oldPropName);
    }
    return  newProp ?? oldProp ?? defaultVal;
}

/**
 * 判断两个对象是否相等
 * @param a 对象1
 * @param b 对象2
 * @returns 
 */
export function isSameObject(a: object, b: object): boolean {
    if (typeof a !== 'object' || typeof b !== 'object') return false;

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(key => {
        const aVal = a[key];
        const bVal = b[key];
        if (typeof aVal !== 'object' || typeof bVal !== 'object') return aVal === bVal;
        return isSameObject(aVal, bVal);
    });
}

/**
 * 判断两个数组是否相等
 * @param a 数组1
 * @param b 数组2
 * @returns 
 */
export function isSameArray<T>(a: Array<T>, b: Array<T>): boolean {
    if(a.length !== b.length) return false;
    return a.every((item, index) => {
        if (typeof item !== 'object' || typeof b[index] !== 'object') return item === b[index];
        return isSameObject(item as object, b[index] as object);
    });
}