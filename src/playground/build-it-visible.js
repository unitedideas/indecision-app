// const appRoot = document.getElementById('app')
//
//
// let buttonShow = false;
// const detailsText = <p>These are the details</p>;
//
// const showHideButton = () => {
//     buttonShow = !buttonShow;
//     render();
// };
//
//
// const render = () => {
//     const template = (
//
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showHideButton}>{buttonShow ? 'hide' : 'show'}</button>
//             {buttonShow && (
//                 <div>
//                     {detailsText}
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// render();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };

    }

    handleToggleVisibility() {

        this.setState((pervState) => {
            return {
                visibility: !pervState.visibility

            }
        })
    }

    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button
                    onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>showing something</p>
                    </div>
                )}
            </div>
        );
    }

}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));