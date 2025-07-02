import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { StrictMode } from 'react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root') || document.createElement('div');
rootTag.id = 'root';
document.body.appendChild(rootTag);

const { element, getStyleElement } = AppRegistry.getApplication(appName);

const root = createRoot(rootTag);
root.render(
  <StrictMode>
    {element}
    {getStyleElement()}
  </StrictMode>
);
