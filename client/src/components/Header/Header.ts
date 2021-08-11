export class Header {
    private toHTML() {
        return 'I am Header'
    }
    
    render(container: HTMLElement) {
        container.append(this.toHTML())
    }
}