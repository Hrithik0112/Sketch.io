import { ReduxProvider } from "@/Provider";
import Body from "@/components/Canvas";
import Menu from "@/components/Menu";
import ToolBar from "@/components/ToolBar";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Menu />
      <ToolBar />
      <Body />
    </Provider>
  );
}
