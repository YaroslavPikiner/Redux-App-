import Routes from './routes/Router';
import { ProvideAuth } from "./hooks/use-auth";
function App() {
  return (
    <>
      <ProvideAuth>
        <Routes />
      </ProvideAuth>
    </>
  );
}

export default App;
