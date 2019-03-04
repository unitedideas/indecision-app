class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing 1', 'thing 2', 'thing 4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOptions/>
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }

}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}


// Add Remove all Button
// Setup handleRemove -> alert some message
// setup onClick to fire the method


class Options extends React.Component {
    handleRemoveAll() {
        alert('Removes all')
    }

    render() {
        return (
            <div>
                {
                    <button onClick={this.handleRemoveAll}>Remove all</button>
                }
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                option: {this.props.optionText}
            </div>

        )
    }
}


class AddOptions extends React.Component {
    render() {
        return (
            <div>
                Add Option Component Here
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

