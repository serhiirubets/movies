import {Events} from '../helpers/Events';
import {capitalize} from '../helpers';

const events = new Events();

interface Options {
  eventNames?: string[],
  subscribeTypes?: string[],
}

export abstract class BaseComponent {
  public abstract toHTML(): string;
  public events: Events = events;

  protected props: any; // TODO: Generics
  private options: Options | undefined;
  private element!: HTMLElement | null;

  constructor(props?: any, options?: Options) {
    this.props = props;
    this.options = options;

    this.options?.subscribeTypes?.forEach((type) => {
      this.events.subscribe(type, () => {
        this.setupListeners();
      });
    });
  }


  public render(container: Element) {
    container.innerHTML = this.toHTML();
  }

  public setupListeners() {
    this.element = document.querySelector(`#${this.props.id}`);

    this.options?.eventNames?.forEach((eventName: string) => {
      this.element?.addEventListener(eventName, (e) => {
        e.preventDefault();

        const callback = `on${capitalize(eventName)}`;
        if (this.props[callback]) {
          this.props[callback]();
        }
      });
    });
  }

  public createElements(Element: any, options: any[]) {
    return options
      .filter((option) => option.isHidden === false)
      .map((option) => new Element(option));
  }
}

