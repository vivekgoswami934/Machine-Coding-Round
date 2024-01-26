import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import BasicFolder from "./components/BasicFolder";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [exData, setExData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInserNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exData, folderId, item, isFolder);
    setExData(finalTree);
  };

  return (
    <div>
      {/* <BasicFolder data={exData} /> */}
      <Folder data={exData} handleInserNode={handleInserNode} />
    </div>
  );
}

export default App;
