import {
  SvgNotification,
  SvgHelpCircularHollow,
  SvgImodel,
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
import SynchroViewFinished from "./modules/synchro/SynchroView-finished";
import IModelsListView from "./modules/imodels-list/IModelsListView";
import IModelsListViewFinished from "./modules/imodels-list/IModelsListView-finished";

function DesignReviewIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <path
        transform="translate(0, 16)"
        d="M7.576 27.758v-3.572h-2.38V-.685H32.18v.597c0 .428-1.826 2.423-6.418 7.012-7.316 7.31-7.16 7.22-9.094 5.322l-1.113-1.092-1.075.894c-.592.49-1.078.955-1.08 1.03-.003.076 1.157 1.295 2.577 2.71l2.583 2.574 8.727-8.73C33.59 3.328 36.18.902 36.611.902h.597v23.284l-10.385.002-10.385.003-3.766 3.57c-2.785 2.64-3.939 3.569-4.43 3.569h-.667zM38.532 7.517v-9.525H12.338v-5.82h32.015v24.87h-5.82z"
      ></path>
    </svg>
  );
}

function SynchroIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <defs>
        <linearGradient
          x1="0.60704"
          y1="0.51102"
          x2="15.44043"
          y2="15.53706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#00253d" />
          <stop offset="0.34112" stop-color="#001e37" />
          <stop offset="0.83005" stop-color="#000b26" />
          <stop offset="1" stop-color="#00031e" />
        </linearGradient>
      </defs>
      <rect width="16" height="16" rx="1.74603" />
      <path d="M13.67968,10.67367a3.203,3.203,0,0,0-3.2-3.19871h-4.072a.64841.64841,0,1,0,0,1.29681h4.072a1.90435,1.90435,0,0,1,1.90249,1.9019,1.84189,1.84189,0,0,1-1.47179,1.82717l-.59153.07627-.01706.00033-.032.006L2.48549,13.5869l2.71248.40342,5.98-.95031L6.45776,14.17768l2.3429.34846,2.48825-.71883c.08832-.02447.17521-.05238.26022-.08431l.0052-.00168.00011-.00043a3.11422,3.11422,0,0,0,1.03987-.6532A3.21366,3.21366,0,0,0,13.67968,10.67367Z" />
      <path d="M6.35358,6.23619H11.6054V4.9386h-.00916l.0089-2.61986L11.35922,2.21V4.9386h-.66469l.008-3.0191-.246-.1088V4.9386H9.70868V1.50885L7.5642,2.32848,7.51606,4.9386h-.676l.00411-.8881-.22833-.10467V4.9386H6.35358a3.21848,3.21848,0,0,0-.34956.01946L6.01037,3.6563,5.782,3.55163V4.99074a3.172,3.172,0,0,0-.69706.21075V3.27605l-1.9314.73821v4.125a3.203,3.203,0,0,0,3.2,3.19871h4.072a.64841.64841,0,1,0,0-1.29681h-4.072a1.90248,1.90248,0,1,1,0-3.805Z" />
      <path
        style={{ fill: "#fff", fillRule: "evenodd" }}
        d="M13.55192,10.5417a3.203,3.203,0,0,0-3.2-3.19871h-4.072a.64841.64841,0,1,0,0,1.29681h4.072a1.90434,1.90434,0,0,1,1.90248,1.9019,1.8419,1.8419,0,0,1-1.47178,1.82717l-.59153.07626-.01706.00034-.032.006L2.35773,13.45493l2.71248.40342,5.98-.95031L6.33,14.04571l2.3429.34845,2.48825-.71883q.13246-.03669.26022-.0843l.0052-.00168.00011-.00043a3.11447,3.11447,0,0,0,1.03987-.6532A3.21366,3.21366,0,0,0,13.55192,10.5417Z"
      />
      <path
        style={{ fill: "#fff", fillRule: "evenodd" }}
        d="M6.22582,6.10421h5.25181V4.80662h-.00915l.00889-2.61986L11.23145,2.078V4.80662h-.66468l.008-3.01909-.246-.1088V4.80662H9.58091V1.37688l-2.14447.81963L7.3883,4.80662h-.676l.0041-.88809-.22832-.10467v.99276H6.22582a3.21848,3.21848,0,0,0-.34956.01947l.00635-1.30177-.22833-.10466V4.85877a3.17235,3.17235,0,0,0-.69706.21074V3.14408l-1.93141.73821v4.125a3.203,3.203,0,0,0,3.2,3.19871h4.072a.64841.64841,0,1,0,0-1.29681h-4.072a1.90249,1.90249,0,1,1,0-3.805Z"
      />
    </svg>
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
      />
      <MainContent />
    </>
  );
}

export default App;
