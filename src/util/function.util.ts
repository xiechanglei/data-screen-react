/**
 * 包裹一个方法，使其返回值为void ，这样可以让一些的代码变的优雅一点
 * @param func
 */
export const voided = (func: Function) => (...args:any[])=> {
    func(...args)
}