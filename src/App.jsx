import Header from "./components/Layout/Header";
import { Outlet } from "react-router-dom";
import { useEffect,useRef } from "react";
import SideBar from "./components/Layout/SideBar";
import { useSlimScroll } from "./assets/SlimScrollFunction";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App({user}) {
   useSlimScroll();
  // <Outlet />


  {/* <!-- sidebar starts here -->  */}
      const sidebarRef = useRef(null);
      const containerRef = useRef(null);
        useEffect(() => {
          const sidebar = sidebarRef.current;
          if (!sidebar) return;

          const sibling = containerRef.current;

          const menuToggles = sidebar.querySelectorAll(".menu-toggle");

          const handleToggleClick = (e) => {
            e.preventDefault();

            const toggleButton = e.currentTarget;
            const subMenu = toggleButton.nextElementSibling;

            if (!subMenu) return;

            if (subMenu.classList.contains("active")) {
              // Close this sub-menu and all nested sub-menus inside it
              subMenu.classList.remove("active");
              subMenu.style.display = "none";
              toggleButton.classList.remove("rotate");

              subMenu.querySelectorAll(".sub-menu").forEach((nested) => {
                nested.classList.remove("active");
                nested.style.display = "none";
              });
              subMenu.querySelectorAll(".menu-toggle").forEach((btn) => {
                btn.classList.remove("rotate");
              });
            } else {
              // Close only sibling sub-menus (same level), not parent menus
              const parentUl = toggleButton.closest("ul");
              if (parentUl) {
                parentUl.querySelectorAll(":scope > li > .menu-toggle").forEach((siblingToggle) => {
                  if (siblingToggle !== toggleButton) {
                    const siblingMenu = siblingToggle.nextElementSibling;
                    if (siblingMenu && siblingMenu.classList.contains("active")) {
                      siblingMenu.classList.remove("active");
                      siblingMenu.style.display = "none";
                      siblingToggle.classList.remove("rotate");
                    }
                  }
                });
              }

              subMenu.classList.add("active");
              subMenu.style.display = "block";
              toggleButton.classList.add("rotate");
            }
          };

          // attach click
          menuToggles.forEach((btn) =>
            btn.addEventListener("click", handleToggleClick)
          );

          // hover events
          const handleMouseOver = () => {
            if (sidebar.classList.contains("collapsed")) {
              sidebar.classList.remove("collapsed");
              sibling?.classList.remove("collapsed-sidebar");
            }
          };

          const handleMouseOut = () => {
            if (!sidebar.classList.contains("collapsed")) {
              sidebar.classList.add("collapsed");
              sibling?.classList.add("collapsed-sidebar");
            }
          };

          const handleMouseLeave = () => {
            if (sidebar.classList.contains("collapsed")) {
              sidebar.querySelectorAll(".sub-menu").forEach((menu) => {
                menu.classList.remove("active");
                menu.style.display = "none";
              });

              sidebar.querySelectorAll(".menu-toggle").forEach((btn) =>
                btn.classList.remove("rotate")
              );
            }
          };

          sidebar.addEventListener("mouseover", handleMouseOver);
          sidebar.addEventListener("mouseout", handleMouseOut);
          sidebar.addEventListener("mouseleave", handleMouseLeave);

          // Global collapse handlers to add/remove h-100 class on parent .collapse-card
          const handleShow = (e) => {
            const card = e.target.closest(".collapse-card");
            if (card) {
              card.classList.add("h-100");
            }
          };

          const handleHide = (e) => {
            const card = e.target.closest(".collapse-card");
            if (card) {
              card.classList.remove("h-100");
            }
          };

          // Globally prevent scroll/route jump on collapse links with to="#" or href="#"
          const handlePreventJump = (e) => {
            const toggle = e.target.closest("[data-bs-toggle='collapse']");
            if (toggle) {
              const toVal = toggle.getAttribute("to") || toggle.getAttribute("href");
              if (toVal === "#") {
                e.preventDefault();
              }
            }
          };

          document.addEventListener("show.bs.collapse", handleShow);
          document.addEventListener("hide.bs.collapse", handleHide);
          document.addEventListener("click", handlePreventJump);

          // cleanup (VERY IMPORTANT)
          return () => {
            menuToggles.forEach((btn) =>
              btn.removeEventListener("click", handleToggleClick)
            );

            sidebar.removeEventListener("mouseover", handleMouseOver);
            sidebar.removeEventListener("mouseout", handleMouseOut);
            sidebar.removeEventListener("mouseleave", handleMouseLeave);

            document.removeEventListener("show.bs.collapse", handleShow);
            document.removeEventListener("hide.bs.collapse", handleHide);
            document.removeEventListener("click", handlePreventJump);
          };
        }, []);

        // want to render a login page without any sidebar and header
       
  {/* <!-- sidebar ends here -->  */}
 return (
  <>
    {user ? (
      <>
        <div  className="sidebar collapsed" id="sidebarmain"  ref={sidebarRef} >
          <SideBar />
        </div>

        <div  className="main-container collapsed-sidebar px-2" ref={containerRef} >
          <Header />
          <Outlet />
        </div>
      </>
    ) : (
      <div className="login-container">
        <Outlet />
      </div>
    )}
  </>
);
}

export default App;