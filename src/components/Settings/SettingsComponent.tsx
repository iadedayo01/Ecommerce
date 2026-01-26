// import React from 'react'
import type { ReactElement } from "react";
import Toggle from "../../Shared/Toggle";

interface settingsInfoProps {
  header: string;
  info: string;
  id: number;
  function?: ReactElement;
}

const SettingsComponent = () => {
  const settingsInfo: settingsInfoProps[] = [
    {
      id: 1,
      header: "Appearance",
      info: "Customize how your theme looks on your device",
    },
    { id: 2, header: "Language", info: "Select your language" },
    {
      id: 3,
      header: "Two-factor Authentication",
      info: "Keep your account secure by enabling 2FA via email",
      function: <Toggle />,
    },
    {
      id: 4,
      header: "Push Notifications",
      info: "Receive push notification",
      function: <Toggle />,
    },
    {
      id: 5,
      header: "Desktop Notification",
      info: "Receive push notification in desktop",
      function: <Toggle />,
    },
    {
      id: 6,
      header: "Email Notifications",
      info: "Receive email notification",
      function: <Toggle />,
    },
  ];

  return (
    <div className="flex flex-col">
      {settingsInfo.map((settings) => (
        <div className="flex flex-col">
        {settings.function}
        <h1>{settings.header}</h1>
        </div>
      ))}
    </div>
  );
};

export default SettingsComponent;
