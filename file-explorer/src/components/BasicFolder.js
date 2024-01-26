import React, { useState } from "react";

const BasicFolder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      {data.isFolder && (
        <div style={{ marginTop: 5 }}>
          <div className="folder" onClick={() => setExpand((p) => !p)}>
            <span>📁 {data.name}</span>
          </div>
          <div
            style={{
              display: expand ? "block" : "none",
              marginLeft: 25,
            }}
          >
            {data.items.map((el) => {
              return <BasicFolder data={el} />;
            })}
          </div>
        </div>
      )}
      {!data.isFolder && (
        <span className="file" style={{ marginTop: 5 }}>
          📃 {data.name}
        </span>
      )}
    </>
  );
};

export default BasicFolder;
