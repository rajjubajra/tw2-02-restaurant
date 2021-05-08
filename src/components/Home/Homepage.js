import React from 'react'
import FrontPageMenu from '../MainMenu/FrontPageMenu'

function Homepage() {
  return (
    <div className="w-full min-h-screen fixed object-cover" style={{background: "url('/data/images/sushi-4317834_1280.jpg')", backgroundSize: "cover"}}>
      <FrontPageMenu />
    </div>
  )
}

export default Homepage
