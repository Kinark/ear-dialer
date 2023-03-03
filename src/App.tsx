import { Provider as JotaiProvider } from 'jotai';
import { MotionConfig } from 'framer-motion';
import { useTheme } from 'styled-components';

import Routes from '~/Routes';
import GlobalStyles from '~/components/GlobalStyles';
import ThemeProvider from '~/components/ThemeProvider';

const MotionConfigProxy = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return <MotionConfig transition={theme.animation.springs.default}>{children}</MotionConfig>;
};

function App() {
  return (
    <JotaiProvider>
      <ThemeProvider>
        <MotionConfigProxy>
          <Routes />
          <GlobalStyles />
        </MotionConfigProxy>
      </ThemeProvider>
    </JotaiProvider>
  );
}

export default App;
