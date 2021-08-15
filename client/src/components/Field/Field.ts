import {BaseComponent} from '../BaseComponent';
import {CommonProps} from '../../interfaces';

interface Props extends CommonProps {
  type: string,
  placeholder: string,

  onChange?(): void
}

export class Field extends BaseComponent {
  constructor(props: Props) {
    super(props);
  }

  public toHTML(): string {
    const {placeholder, type} = this.props;
    return `<input type="${type}" class="field" placeholder="${placeholder}">`;
  }
}
