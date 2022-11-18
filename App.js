import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import { Stack } from "./src/Stack";

const App = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}

export default App;
