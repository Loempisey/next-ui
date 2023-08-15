import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "Upcoming",
      label: "Upcoming Meeting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "Recurring",
      label: "Recurring Meeting",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "Previous",
      label: "Previous Meeting",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div className="flex w-full flex-col my-8">
      <Tabs aria-label="Dynamic tabs" items={tabs} fullWidth={true}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card shadow="none" className="border-2 border-grey-600 my-4 h-24">
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
