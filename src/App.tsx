import { Helmet } from "react-helmet";

function App() {
  const title = "Protect your doc";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>{title}</h1>
    </>
  );
}

export default App;
