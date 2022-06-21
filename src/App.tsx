import {
  SvgNotification,
  SvgHelpCircularHollow,
  SvgImodel,
} from "@itwin/itwinui-icons-react";
import {
  Button,
  Header,
  HeaderLogo,
  IconButton,
  SidenavButton,
  SideNavigation,
  ThemeType,
  useTheme,
} from "@itwin/itwinui-react";
import "@itwin/itwinui-layouts-css/styles.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SynchroView from "./modules/synchro/SynchroView";
import DesignReview from "./modules/design-review/DesignReview";
import { PageLayout } from "@itwin/itwinui-layouts-react";
import DesignReviewFinished from "./modules/design-review/DesignReview-finished";
import SynchroViewFinished from "./modules/synchro/SynchroView-finished";
import IModelsListView from "./modules/imodels-list/IModelsListView";
import IModelsListViewFinished from "./modules/imodels-list/IModelsListView-finished";
import { AppIcon, DesignReviewIcon, SynchroIcon } from "./icons";
import { useState } from "react";

function ThemeButton() {
  const [theme, setTheme] = useState<ThemeType>("light");
  useTheme(theme);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button styleType="borderless" onClick={changeTheme}>
      {theme === "light" ? "🌞" : "🌙"}
    </Button>
  );
}

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<IModelsListViewFinished />} />
      <Route path="design-review" element={<DesignReviewFinished />} />
      <Route path="synchro" element={<SynchroViewFinished />} />
    </Routes>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <PageLayout>
        <PageLayout.Header>
          <Header
            appLogo={<HeaderLogo logo={<AppIcon />}>iTwinUI demo</HeaderLogo>}
            actions={[
              <ThemeButton key="theme" />,
              <IconButton key="notification" styleType="borderless">
                <SvgNotification />
              </IconButton>,
              <IconButton key="help" styleType="borderless">
                <SvgHelpCircularHollow />
              </IconButton>,
            ]}
          />
        </PageLayout.Header>
        <PageLayout.SideNavigation>
          <SideNavigation
            items={[
              <SidenavButton
                startIcon={<SvgImodel />}
                key={0}
                onClick={() => navigate("/")}
                isActive={location.pathname === "/"}
              >
                iModels list
              </SidenavButton>,
              <SidenavButton
                startIcon={<DesignReviewIcon />}
                key={1}
                onClick={() => navigate("design-review")}
                isActive={location.pathname === "/design-review"}
              >
                Design Review
              </SidenavButton>,
              <SidenavButton
                startIcon={<SynchroIcon />}
                key={2}
                onClick={() => navigate("synchro")}
                isActive={location.pathname === "/synchro"}
              >
                Synchro
              </SidenavButton>,
            ]}
            expanderPlacement="hidden"
          />
        </PageLayout.SideNavigation>
        <PageLayout.Content padded>
          <MainContent />
        </PageLayout.Content>
      </PageLayout>
    </>
  );
}

export default App;
