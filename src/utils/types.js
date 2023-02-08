export const isDef = (v) => v !== undefined && v !== null
export const isUndef = (v) => v === undefined || v === null
export const isObject = (v) => v !== null && !Array.isArray(v) && typeof v === 'object'
export const isNumber = (v) => !isNaN(v) && isFinite(v)
export const isInt = (v) => !isNaN(v) && parseInt(v) === v
export const isTrue = (v) => v === true
export const isFalse = (v) => v === false
export const isPrimitive = (v) => typeof v === 'string' || typeof(v) === 'number'
const _toString = Object.prototype.toString
export const isPlainObject = (v) => _toString.call(v) === '[object Object]'
export const isArray = (v) => Array.isArray(v)
