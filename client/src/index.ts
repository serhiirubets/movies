import {Header} from "./components/Header/Header";

const header = new Header();

const appContainer = document.querySelector('#app') as HTMLElement;

header.render(appContainer)