import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return (
        <div>
            <h1>Custom App |chai</h1>
        </div>
    )
}

/*const ReactElement = {
    type: 'a',
    props:{
        href :'http://www.google.com',
        target : "_blank"
    },
    children: 'Click me to  visit google'
}  */

const anotherElement = (
    <a href='https://google.com' target='_blank'>visit to google</a>
)

const anotherUser =  'chai aur code'
const ReactElement = React.createElement(
    'a',
    {href:'https://www.gooogle.com',target:'_blank'},
    'click me to visit google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  
     ReactElement
  
)
