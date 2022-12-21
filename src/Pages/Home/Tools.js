import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://mighty-temple-71110.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-primary my-12">
        Our Products
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-12">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
