document.addEventListener("DOMContentLoaded", function () {




    'use strict';
    let e = React.createElement;
    class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
        return 'You liked this.';}

        return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
        );}}

    let domContainers = document.querySelectorAll('.like_button_container');

    domContainers.forEach(domContainer => {
    let root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));});
});
