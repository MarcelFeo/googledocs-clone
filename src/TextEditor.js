import Quill from 'quill';
import "quill/dist/quill.snow.css";
import React, { useCallback } from 'react';

export default function TextEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return
    wrapperRef.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill("#container", { theme: "snow" });
  }, []);
  
    return (
    <div id="container" ref={wrapperRef}></div>
  )
}
