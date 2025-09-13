import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import CounterTab from "./tabs/CounterTab";
import TasksTab from "./tabs/TasksTab";

function App() {
  return (
    <Section>
      <Container>
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
