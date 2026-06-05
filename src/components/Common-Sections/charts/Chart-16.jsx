import  { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { Link } from "react-router";

function ChartUI16({ showTitle = true }) {
    useEffect(() => {
  initializeCollapseCards();
}, []);

  const treeRef = useRef(null);

  useEffect(() => {
    const data = {
      id: "ms",

      data: {
        imageURL: "https://i.pravatar.cc/300?img=68",
        name: "CEO Margret Swanson",
      },

      options: {
        nodeBGColor: "#cdb4db",
        nodeBGColorHover: "#cdb4db",
      },

      children: [
        {
          id: "mh",

          data: {
            imageURL: "https://i.pravatar.cc/300?img=69",
            name: "GM Mark Hudson",
          },

          options: {
            nodeBGColor: "#ffafcc",
            nodeBGColorHover: "#ffafcc",
          },

          children: [
            {
              id: "kb",

              data: {
                imageURL: "https://i.pravatar.cc/300?img=65",
                name: "Karyn Borbas",
              },

              options: {
                nodeBGColor: "#f8ad9d",
                nodeBGColorHover: "#f8ad9d",
              },
            },

            {
              id: "cr",

              data: {
                imageURL: "https://i.pravatar.cc/300?img=60",
                name: "Chris Rup",
              },

              options: {
                nodeBGColor: "#c9cba3",
                nodeBGColorHover: "#c9cba3",
              },
            },
          ],
        },

        {
          id: "cs",

          data: {
            imageURL: "https://i.pravatar.cc/300?img=59",
            name: "Manager Chris Lysek",
          },

          options: {
            nodeBGColor: "#00afb9",
            nodeBGColorHover: "#00afb9",
          },

          children: [
            {
              id: "Noah_Chandler",

              data: {
                imageURL: "https://i.pravatar.cc/300?img=57",
                name: "Noah Chandler",
              },

              options: {
                nodeBGColor: "#84a59d",
                nodeBGColorHover: "#84a59d",
              },
            },

            {
              id: "Felix_Wagner",

              data: {
                imageURL: "https://i.pravatar.cc/300?img=52",
                name: "Felix Wagner",
              },

              options: {
                nodeBGColor: "#0081a7",
                nodeBGColorHover: "#0081a7",
              },
            },
          ],
        },
      ],
    };

    const options = {
      contentKey: 'data',
    width: '100%',
    height:'100%',
    nodeWidth: 120,
    nodeHeight: 80,
    fontColor: '#fff', 
    childrenSpacing: 20,
    siblingSpacing: 50,
    direction: 'top', 

      nodeTemplate: (content) => `<div style='display: flex;flex-direction: column;gap: 0px;justify-content: center;align-items: center;height: 100%;'>
      <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
      <div style="font-size: 10px">${content.name}</div>
     </div>`,

      enableToolbar: true,
    };

    const tree = new ApexTree(treeRef.current, options);

    tree.render(data);

    return () => {
      tree.destroy();
    };
  }, []);

  return (
    <div className="card collapse-card  border-0 shadow-sm rounded-3">
      
      {showTitle &&<h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
        Authorities / Department

         <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
      </h2>
      }
      <div className={`${showTitle ?"collapse":""} show  p-2`}>
        <div ref={treeRef} height={"400px"}></div>
      </div>
    </div>
  );
}

export default ChartUI16;