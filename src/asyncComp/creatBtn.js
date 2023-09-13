import _ from 'lodash'

let h1 = document.createElement('h1')
// h1.innerText = 'Lazy Loading'
h1.innerText = _.join(['lazy', 'Loading'], ' ')
document.body.append(h1)

let button = document.createElement('button')
button.innerText = 'Click to Lazy Load'
document.body.append(button)

button.onclick = ()=>{
    import(/*webpackChunkName: 'chunk_clik_name' */ './click.js')
    .then(({default:click})=>{
        click()
    })
}