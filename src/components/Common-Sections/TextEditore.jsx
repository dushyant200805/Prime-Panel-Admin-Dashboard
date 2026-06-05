import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function TextEditor() {
  const containerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    // Only initialize once
    if (quillRef.current) return;

    if (containerRef.current) {
      const toolbarOptions = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
      ];

      quillRef.current = new Quill(containerRef.current, {
        theme: "snow",
        modules: { toolbar: toolbarOptions },
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <label htmlFor="editor" className="form-label head-text text-capitalize m-1 fs-7">
        product description
      </label>
      <div id="editor"   ref={containerRef}></div>
    </>
  );
}

export default TextEditor;