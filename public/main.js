const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('http://50.112.211.5:4000/hit')
        .then(() => {
            alert('The cat name is: Rascal')
        })
        .catch(() => {
            alert('failure')
        })
}


btn.addEventListener('click', clickHandler)