import { Suspense } from "react";
import "./App.css";
import { ThemeSettingsProvider } from "./shared/contexts/ThemeSettings";
import { AppProvider } from "./shared/contexts/AppProvider";
import { LayoutPage } from "./ui/layouts/LayoutPage";
import { Router } from "./router";
import { FullScreenOverlay } from "./shared/components/FullScreenOverlay";
import { LoadingScreen } from "./shared/components";

function App() {
  return (
    <ThemeSettingsProvider
      defaultSettings={{
        themeMode: "light",
      }}
    >
      <AppProvider>
        <LayoutPage>
          <Suspense
            fallback={
              <FullScreenOverlay>
                <LoadingScreen />
              </FullScreenOverlay>
            }
          >
            <Router />
          </Suspense>
        </LayoutPage>
      </AppProvider>
    </ThemeSettingsProvider>
  );
}

export default App;
