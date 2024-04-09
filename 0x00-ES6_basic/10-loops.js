export default function appendToEachArrayValue(array, appendString) {
    for (const value of array) {
        const idex = array.indexOf(value);
        array[idex] = appendString + value;
    }
    return array;
}