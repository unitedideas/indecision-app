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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                {this.props.options.length}
                <Option/>
            </div>
        )
    }
}



class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
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

