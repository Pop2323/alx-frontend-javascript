export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
    for (val of reportWithIterator) {
        employees.push(val)
    }
    return employees.join(' | ')
}