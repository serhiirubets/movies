import {BaseComponent} from '../BaseComponent';

interface Props {
  href: string,
  text: string,
  className: string,
  id: string

  onClick?(): void
}

export class ButtonLink extends BaseComponent {
  constructor(props: Props) {
    super(props, {
      eventNames: ['click'],
      subscribeTypes: ['render'],
    });
  }

  public toHTML(): string {
    const {text, href, className, id} = this.props;
    return `<a id="${id}" href="${href}" class="${className}">${text}</a>`;
  }
}
