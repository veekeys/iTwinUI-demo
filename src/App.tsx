import {
  SvgNotification,
  SvgHelpCircularHollow,
  SvgFlag,
  SvgFolderOpened,
  SvgHome,
} from "@itwin/itwinui-icons-react";
import {
  Header,
  HeaderLogo,
  IconButton,
  SidenavButton,
  SideNavigation,
} from "@itwin/itwinui-react";
import "@itwin/itwinui-layouts-css/styles.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SynchroView from "./modules/synchro/SynchroView";
import DesignReview from "./modules/design-review/DesignReview";
import { PageLayout } from "@itwin/itwinui-layouts-react";
import DesignReviewFinished from "./modules/design-review/DesignReview-finished";

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<div>Tiles view</div>} />
      <Route path="design-review" element={<DesignReview />} />
      <Route path="synchro" element={<SynchroView />} />
    </Routes>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header
        appLogo={
          <HeaderLogo
            logo={
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1" />
              </svg>
            }
          >
            iTwinUI demo
          </HeaderLogo>
        }
        actions={[
          <IconButton key="notification" styleType="borderless">
            <SvgNotification />
          </IconButton>,
          <IconButton key="help" styleType="borderless">
            <SvgHelpCircularHollow />
          </IconButton>,
        ]}
      />
      <SideNavigation
        items={[
          <SidenavButton
            startIcon={<SvgHome />}
            key={0}
            onClick={() => navigate("/")}
            isActive={location.pathname === "/"}
          >
            iModels list
          </SidenavButton>,
          <SidenavButton
            startIcon={<SvgFlag />}
            key={1}
            onClick={() => navigate("design-review")}
            isActive={location.pathname === "/design-review"}
          >
            Design Review
          </SidenavButton>,
          <SidenavButton
            startIcon={<SvgFolderOpened />}
            key={2}
            onClick={() => navigate("synchro")}
            isActive={location.pathname === "/synchro"}
          >
            Synchro
          </SidenavButton>,
        ]}
      />
      <MainContent />
    </>
  );
}

export default App;
