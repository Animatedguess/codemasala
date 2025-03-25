import React, { useState } from "react";
import DescriptionIcon from "../../assets/icons/Code-Editor-Icon/DescriptionIcon";
import TopicIcon from "../../assets/icons/Code-Editor-Icon/TopicIcon";
import SubmissionIcon from "../../assets/icons/Code-Editor-Icon/SubmissionIcon";
import SolutionIcon from "../../assets/icons/Code-Editor-Icon/SolutionIcon";
import LeftIcon from "../../assets/icons/LeftIcon";
import MaximizeIcon from "../../assets/icons/Code-Editor-Icon/MaximizeIcon";

const LeftSideCodeEditor = () => {
  const tabs = [
    { icon: DescriptionIcon, label: "Description" },
    { icon: TopicIcon, label: "Topic" },
    { icon: SubmissionIcon, label: "Submissions" },
    { icon: SolutionIcon, label: "Solution" },
  ];

  const [openDetail, setOpenDetail] = useState(null);
  const [isMaximize, setIsMaximize] = useState(null);

  const handleTagClick = (tag) => {
    if (tag === "Topics") setOpenDetail("A");
    else if (tag === "Companies") setOpenDetail("B");
    else if (tag === "Hint") setOpenDetail("C");
    else setOpenDetail(null);
  };

  return (
    <div className="bg-blue-200 flex flex-col h-full w-full">
      {/* Fixed Header */}
      <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white sticky top-0 z-10">
        <ul className="flex items-center gap-2">
          {tabs.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-lg">
              <Icon className="size-5" />
              {label}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <MaximizeIcon className="size-7 cursor-pointer p-1 hover:bg-gray-200 rounded-lg" />
          <LeftIcon className="size-7 cursor-pointer p-1 hover:bg-gray-200 rounded-lg" />
        </div>
      </header>

      {/* Scrollable Content - Ensures Full Scrolling */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">
            Coconut: Fruit or Vegetable?
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            Easy
          </span>

          <ul className="flex gap-2 text-sm text-gray-600 mt-2">
            {["Easy", "Topics", "Companies", "Hint"].map((tag) => (
              <li
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 mt-2">
            Given a question about whether a coconut is a fruit or a vegetable, determine the correct answer.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Examples</h3>
          <pre className="p-3 bg-gray-200 rounded-md text-sm text-gray-700">
            Input: "Coconut" Output: "Fruit"
          </pre>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Constraints</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>1 ≤ length of input ≤ 100</li>
            <li>Input will always be a valid string</li>
          </ul>

          {["A", "B", "C", "D", "E"].map((letter, index) => (
            <details key={letter} className="group border rounded-md bg-white mt-2" open={openDetail === letter}>
              <summary className="cursor-pointer px-4 py-2 font-medium text-gray-700 hover:bg-gray-200 transition">
                {letter}
              </summary>
              <p className="px-4 py-2 text-gray-600">
                {["Apple", "Boy", "Car", "Dog", "Egg"][index]}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideCodeEditor;
