import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const generateArray = () => {
    const arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 20);
    setArray(arr);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleBubbleSort = async () => {
    setIsSorting(true);
    const animations = bubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, action] = animations[i];
      await new Promise((res) => setTimeout(res, 20));
      const bars = document.getElementsByClassName('bar');
      if (action === 'swap') {
        const newArray = [...array];
        [newArray[barOneIdx], newArray[barTwoIdx]] = [newArray[barTwoIdx], newArray[barOneIdx]];
        setArray(newArray);
      }
    }
    setIsSorting(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Sorting Visualizer</h1>
      <div className="flex gap-4 mb-4">
        <button onClick={generateArray} disabled={isSorting} className="bg-blue-500 text-white px-4 py-2 rounded">Generate New Array</button>
        <button onClick={handleBubbleSort} disabled={isSorting} className="bg-green-500 text-white px-4 py-2 rounded">Bubble Sort</button>
      </div>
      <div className="flex items-end gap-1 h-80 border-t w-full justify-center">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bar bg-purple-500"
            style={{ height: `${value}px`, width: '10px' }}
          ></div>
        ))}
      </div>
    </div>
  );
}
