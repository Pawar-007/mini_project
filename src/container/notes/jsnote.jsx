import React from 'react'
import jsnote from './jsnote.pdf'
function Jsnote() {
  return (
    <div>
      <div>
      <embed src={jsnote} type="application/pdf" width="100%" height="998rem" />
    </div>
    </div>
  )
}

export default Jsnote
