import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import CounterTab from "./tabs/CounterTab";
import TasksTab from "./tabs/TasksTab";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "./contexts/contexts";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Section>
      <Container>
        <div className="themeColor">
          <p>Current theme: {theme}</p>
          <ThemeSwitcher />
        </div>
        <Tabs>
          <TabList>
            <Tab>Counter</Tab>
            <Tab>Tasks</Tab>
          </TabList>
          <TabPanel>
            <CounterTab />
          </TabPanel>
          <TabPanel>
            <TasksTab />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
}

export default App;
