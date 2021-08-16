import {BaseComponent} from '../BaseComponent';
import {Button} from '../Button/Button';
import {ButtonType, FieldType} from '../../constants/enums';
import {Field} from '../Field/Field';
import {ButtonLink} from '../ButtonLink/ButtonLink';

const buttonOptions = [
  {
    href: '#',
    className: 'login',
    id: 'login',
    text: 'Login',
    isHidden: false,
    onClick: function () {
      console.log('clicked');
    },
  },
  {
    href: '#',
    className: 'my-account-link',
    id: 'my-account-link',
    text: 'My Account',
    isHidden: false,
    onClick: function () {
      console.log('clicked');
    },
  },
  {
    href: '#',
    className: 'logout',
    id: 'logout',
    text: 'Logout',
    isHidden: false,
    onClick: function () {
      console.log('clicked');
    },
  },
  {
    href: '#',
    className: 'admin-link',
    id: 'admin-link',
    text: 'Admin',
    isHidden: false,
    onClick: function () {
      console.log('clicked');
    },
  },
];

export class Header extends BaseComponent {
  private buttonLinks!: ButtonLink[]
  private searchField!: Field;
  private findButton!: Button;


  public toHTML(): string {
    this.findButton = new Button({
      type: ButtonType.Submit,
      text: 'search',
      id: 'findButton',
    });

    this.searchField = new Field({
      type: FieldType.Search,
      placeholder: 'search movie',
      id: 'header',
    });

    // TODO: think to make it better
    this.buttonLinks = this.createElements(ButtonLink, buttonOptions);

    return `
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col">
               <a href="#" class="logo">
                  <img src="" alt="" class="logo__img ">
               </a>
            </div>
            <div class="col">
              <div class="container-fluid">
                <form action="#" method="get" class="search d-flex">
                  ${this.searchField.toHTML()}
                  ${this.findButton.toHTML()}
                </form>
              </div>
            </div>
            <div class="user-section col navbar navbar-light">
              ${this.buttonLinks.map((button) => button.toHTML())}
            </div>
          </div>
        </div>
     </div>
    `;
  };
}
