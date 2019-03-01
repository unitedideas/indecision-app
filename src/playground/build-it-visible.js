const appRoot = document.getElementById('app')


let buttonShow = false;
const detailsText = <p>These are the details</p>;

const showHideButton = () => {
    buttonShow = !buttonShow;
    render();
};


const render = () => {
    const template = (

        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showHideButton}>{buttonShow ? 'hide' : 'show'}</button>
            {buttonShow && (
                <div>
                    {detailsText}
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();