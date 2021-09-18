import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Header from './Components/Header/index'
import Content from './Components/Content/index'
const Index = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'))
