import React from "react";
import LeftSideCodeEditor from "../components/CodeEditor/LeftSideCodeEditor";
import RightSideCodeEditor from "../components/CodeEditor/RightSideCodeEditor";
import Navbar from "../components/navbar/Navbar";
import Split from "react-split";
import "./SplitComponent.css";

const CodeEditorPage = () => {
  return (
    <div className="h-screen flex flex-col w-screen overflow-hidden">
      <Navbar />
      <Split
        className="split-container flex flex-1 overflow-hidden"
        sizes={[50, 50]}
        minSize={100}
        gutterSize={8}
      >
        {/* Left Side - Ensuring Full Height */}
        <div className="h-full flex flex-col overflow-hidden">
          <LeftSideCodeEditor />
        </div>

        {/* Right Side - Ensuring Full Height */}
        <div className="h-full flex flex-col overflow-hidden">
          <RightSideCodeEditor />
        </div>
      </Split>
    </div>
  );
};

export default CodeEditorPage;
