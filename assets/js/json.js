const racDemoAppJson = {
  isRunning: true,
  btnLabel: "運転する",
  buttons: [
    {
      id: "cooling",
      label: "冷房",
      icon: "icons/cooling.svg",
      color: "#00AEEF",
    },
    {
      id: "dehumidify",
      label: "除湿",
      icon: "icons/dehumidify.svg",
      color: "#00AEEF",
    },
    {
      id: "heating",
      label: "暖房",
      icon: "icons/heating.svg",
      color: "#00AEEF",
    },
    {
      id: "fan",
      label: "送風",
      icon: "icons/fan.svg",
      color: "#00AEEF",
    },
    {
      id: "ai_auto",
      label: "AI自動",
      icon: "icons/ai_auto.svg",
      color: "#00AEEF",
    },
    {
      id: "ai_manual",
      label: "AI手動",
      icon: "icons/ai_manual.svg",
      color: "#00AEEF",
    },
  ],
};

sessionStorage.setItem("racDemoAppJson", JSON.stringify(racDemoAppJson));
