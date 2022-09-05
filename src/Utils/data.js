export const deserializeValue = (serializedValue) => {
    let parsed = JSON.parse(serializedValue)
    if (!parsed) return null
    if (parsed.__serialized === true) {
        if (parsed.__type === "number") return Number.parseFloat(parsed.value)
        if (parsed.__type === "bool") return parsed.value
        return parsed.value.toString()
    }
    return parsed
}

export const serializeValue = (value) => {
    if (typeof (value) === "number") return JSON.stringify({
        __serialized: true,
        __type: "number",
        value
    })
    if (typeof (value) === "string") return JSON.stringify({
        __serialized: true,
        __type: "string",
        value
    })
    if (typeof (value) === "boolean") return JSON.stringify({
        __serialized: true,
        __type: "bool",
        value
    })
    return JSON.stringify(value)
}

export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
