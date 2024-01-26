import React, { useState } from "react";

const Folder = ({ data, handleInserNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (event, isFolder) => {
    event.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
    setExpand(true);
  };

  const handleAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //logic
      handleInserNode(data.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <>
      {data.isFolder && (
        <div style={{ marginTop: 5 }}>
          <div className="folder" onClick={() => setExpand((p) => !p)}>
            <span>📁 {data.name}</span>
            <div className="buttons">
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
          <div
            style={{
              display: expand ? "block" : "none",
              paddingLeft: 25,
            }}
          >
            {showInput.visible && (
              <div className="inputContainer">
                <span> {showInput.isFolder ? "📁" : "📃"} </span>
                <input
                  className="inputContainer__input"
                  onKeyDown={handleAddFolder}
                  autoFocus
                  type="text"
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )}
            {data.items.map((el) => {
              return <Folder data={el} handleInserNode={handleInserNode} />;
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

export default Folder;
