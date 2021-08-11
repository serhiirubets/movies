export abstract class BaseComponent {
  protected abstract toHTML(): string;

  render(container: Element) {
    container.append(this.toHTML());
  }
}
