import React, { useEffect, useRef } from "react";
import ApexTree from "apextree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { Link } from "react-router";

function ChartUI17({ showTitle = true }) {
  useEffect(() => {
  initializeCollapseCards();
}, []);
  
  const treeRef = useRef(null);

  useEffect(() => {
    const data = {
      id: "Species",
      name: "Species",

      children: [
        {
          id: "2",
          name: "Plants",
          category: "Species",

          children: [
            {
              id: "3",
              name: "Mosses",
              category: "Plants",
            },

            {
              id: "4",
              name: "Ferns",
              category: "Plants",
            },
          ],
        },

        {
          id: "8",
          name: "Fungi",
        },

        {
          id: "9",
          name: "Lichens",
        },

        {
          id: "10",
          name: "Animals",

          children: [
            {
              id: "11",
              name: "Invertebrates",
              category: "Animals",

              children: [
                {
                  id: "12",
                  name: "Insects",
                  category: "Invertebrates",
                },
              ],
            },

            {
              id: "16",
              name: "Vertebrates",
              category: "Animals",

              children: [
                {
                  id: "17",
                  name: "Fish",
                  category: "Vertebrates",
                },

                {
                  id: "19",
                  name: "Reptiles",
                  category: "Vertebrates",
                },
              ],
            },
          ],
        },
      ],
    };

    const options = {
      contentKey: "name",

      width: "100%",

      nodeWidth: 150,
      nodeHeight: 50,

      childrenSpacing: 150,
      siblingSpacing: 30,

      direction: "top",

      fontSize: "20px",
      fontFamily: "sans-serif",
      fontWeight: "600",
      fontColor: "#a06dcc",
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
        Work Flow / Department Distributions

        <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
      </h2>
    }
      <div className={`${showTitle ?"collapse":""} show  p-2`}>
        <div ref={treeRef} height={350}></div>
      </div>
    </div>
  );
}

export default ChartUI17;