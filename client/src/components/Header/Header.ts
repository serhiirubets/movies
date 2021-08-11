import {BaseComponent} from "../BaseComponent";

export class Header extends BaseComponent {
  protected toHTML(): string {
    return "I am a header";
  }
}
