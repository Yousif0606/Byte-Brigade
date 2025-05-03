import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import flowbiteReact from "flowbite-react/plugin/rsbuild";

export default defineConfig({
  plugins: [pluginReact(), flowbiteReact()],
});