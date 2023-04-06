const btn = document.querySelector('button')
const rollbarBtn = document.querySelector('#testerino')

const clickHandler = () => {
    axios.get('http://50.112.211.5:4000/hit')
        .then(() => {
            alert('The cat name is: Rascal')
        })
        .catch(() => {
            alert('failure')
        })
}

const rollbarTest = () => {
    axios.get('http://50.112.211.5:4000/rollbarTest')
        .then((res) => {
            alert('Rollbar works!')
        })
        .catch((theseHands) => {
            alert(theseHands)
        })
}


btn.addEventListener('click', clickHandler)
rollbarBtn.addEventListener('click', rollbarTest)