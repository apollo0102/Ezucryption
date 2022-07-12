import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  panelName: string;
}

export function TabPanel(props: ITabPanelProps) {
  const { children, value, index, panelName, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${panelName}-tabpanel-${index}`}
      aria-labelledby={`${panelName}-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export function tabProps(index: number, panelName: string) {
  return {
    id: `${panelName}-tab-${index}`,
    "aria-controls": `${panelName}-tabpanel-${index}`,
  };
}

export { Tabs, Tab };

// export function Demo({
//   alias,
//   value,
//   onChange,
// }: {
//   alias: string;
//   value: number;
//   onChange: () => void;
// }) {
//   return (
//     <Tabs
//       textColor="primary"
//       indicatorColor="primary"
//       variant="fullWidth"
//       value={value}
//       onChange={onChange}
//       aria-label="basic tabs example"
//     >
//       <Tab label="CURATORS REQUEST" {...tabProps(0)} />
//       <Tab label="CURATORS REQUEST" {...tabProps(1)} />
//       <Tab label="PAYMENT SPLIT SUMMARY" {...tabProps(2)} />
//     </Tabs>
//   );
// }
