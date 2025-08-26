import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const Editors = () => {
  const snowEditorRef = useRef(null);
  const bubbleEditorRef = useRef(null);

  useEffect(() => {
    // Snow theme initialization
    if (snowEditorRef.current) {
      new Quill(snowEditorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ font: [] }, { size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "super" }, { script: "sub" }],
            [{ header: [false, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["direction", { align: [] }],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      });
    }

    // Bubble theme initialization
    if (bubbleEditorRef.current) {
      new Quill(bubbleEditorRef.current, {
        theme: "bubble",
      });
    }
  }, []);

  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="overview">
                  Overview
                  <a
                    className="btn btn-sm btn-outline-success rounded-2 float-end"
                    href="https://quilljs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Website
                  </a>
                </h5>
                <p className="text-muted mb-3">
                  Quilljs is a lightweight and powerful rich text editor.
                </p>

                <h5 className="mt-2">Usage</h5>
                <p className="mb-0">
                  Quilljs's CSS and Javascript files are bundled in the
                  <code> vendor.min.css </code> and <code> vendor.js </code> and
                  globally included in all pages.
                </p>
              </div>
            </div>

            {/* Snow Editor */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="quill-snow-editor">
                  Snow Editor{" "}
                  <a className="anchor-link" href="#quill-snow-editor">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Use <code>snow-editor</code> id to set snow editor.
                </p>
                <div className="mb-3">
                  <div
                    id="snow-editor"
                    ref={snowEditorRef}
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
            </div>

            {/* Bubble Editor */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="quill-bubble-editor">
                  Bubble Editor{" "}
                  <a className="anchor-link" href="#quill-bubble-editor">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Use <code>bubble-editor</code> id to set bubble editor.
                </p>
                <div className="mb-3">
                  <div
                    id="bubble-editor"
                    ref={bubbleEditorRef}
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editors;
