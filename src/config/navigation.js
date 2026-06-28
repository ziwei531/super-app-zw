import HomePage from "../pages/HomePage/HomePage"
import TestPage from "../pages/TestPage/TestPage"
import DevUtilsPage from "../pages/DevUtilsPage/DevUtilsPage"
import GitFlowHelperPage from "../pages/DevUtilsPage/GitFlowHelperPage/GitFlowHelperPage"
import { resolveNavigation } from "../services/navigation"

const raw = [
  { label: "Home"           , component: HomePage                               },
  { label: "Test Page"      , component: TestPage         , hide: true          },
  { label: "Dev Utils"      , component: DevUtilsPage     , subnav: true        },
  { label: "Git Flow Helper", component: GitFlowHelperPage, parent: "Dev Utils" },
]

export default resolveNavigation(raw)
