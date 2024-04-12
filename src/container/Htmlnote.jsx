import React, { useState } from 'react';
import HTML_Cheatsheet_CWH from './HTML_Cheatsheet_CWH.pdf';
export default function Htmlnote() {

  return (
    <div>
      <embed src={HTML_Cheatsheet_CWH} type="application/pdf" width="100%" height="998rem" />
    </div>
  );
}