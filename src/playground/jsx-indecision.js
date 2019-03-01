console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life decision\'s in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate()
    }
};

const resetOptions = () => {
    app.options = [];
    renderTemplate();
};

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options ' : 'No Options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={resetOptions}>Reset the options</button>
            {
                numbers.map((number) => <p key={number}>number: {number}</p>)
            }
            <ol>
                {/* map over app.options getting back of LIs (set the key and text) */}
                {app.options.map((option) => <li key={option}>item: {option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

renderTemplate();
