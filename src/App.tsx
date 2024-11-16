import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const title = t("Protect your doc");

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
