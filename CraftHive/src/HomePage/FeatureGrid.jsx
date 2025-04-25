import React from "react";
import FeatureCard from "./FeatureCard";

export const FeatureGrid = () => {
  const features = [
    {
      icon: "tag",
      title: "Suggest",
      subtitle: "product pricing",
    },
    {
      icon: "file-search",
      title: "Pull a number",
      subtitle: "from your spreadsheets",
    },
    {
      icon: "file-import",
      title: "Import",
      subtitle: "spreadsheets from Google Sheets",
    },
  ];

  return (
    <section className="flex gap-8 max-md:flex-wrap max-md:justify-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
        />
      ))}
    </section>
  );
};
