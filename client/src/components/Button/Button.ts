import {BaseComponent} from '../BaseComponent';
import {CommonProps} from '../../interfaces';

interface Props extends CommonProps {
  type: string,
  text: string,

  onClick?(): void
}

export class Button extends BaseComponent {
  constructor(props: Props) {
    super(props, {
      eventNames: ['click'],
    });
  }

  public toHTML(): string {
    const {text, type} = this.props;
    return `<button type="${type}" class="button btn btn-outline-success">${text}</button>`;
  }
}
