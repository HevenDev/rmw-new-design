"use client"

import React, {useState, useRef} from 'react'
import JoditEditor from "jodit-react"
const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
    <JoditEditor 
    ref={editor}
    value={content}
    onChange={newContent=>setContent(newContent)}
    />
  )
}

export default Editor
