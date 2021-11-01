export default function xhrx(method, url) {
    let localurl = 'https://jsonplaceholder.typicode.com'
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, localurl + url)
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(xhr.response)
                } else alert(xhr.status)
            }
        }
        xhr.send()
    })
}