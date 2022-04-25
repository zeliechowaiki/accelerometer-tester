import React from 'react'

function HomePage() {
  return (
    <div className="home">
        <button id="accelPermsButton" className="permit-button" onClick="getAccel">
          <h1>Get Accelerometer Permissions</h1>
        </button>
      <div class="indicator-dot"></div>
    </div>
  )
}

export default HomePage