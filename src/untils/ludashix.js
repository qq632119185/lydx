export default function ludashix(method, tx) {
    let x = false
    return function () {
        if (x) {
            clearTimeout(setx)
        } else {
            method()
            let setx = setTimeout(() => {
                x = true
            }, tx)
        }
    }
}