import { Grid } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    ["clean"], // remove formatting button
  ],
  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "list",
  "bullet",
  "indent",
  "align",
  "blockquote",
  "code-block",
  "link",
  "image",
  "video",
  "formula",
];
function CreateProblem() {
  const [content, setContent] = useState("");
  console.log(content, "content");
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} md={6}>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          style={{ height: "300px" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Preview</h3>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "300px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default CreateProblem;
