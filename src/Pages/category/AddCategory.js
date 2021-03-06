import  React from 'react';

export  default class AddCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: {
                Name: "",
                Icon:""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const category = this.state.category;
        const { name, value } = event.target;
        category[name] = value;
        this.setState({ category: category });
    }
    handleSubmit(e) {
        e.preventDefault();

    }
    render() {
        const category = this.state.category;
        return(
            <section id="main-content" style={{padding : 10}}>
                <section className="wrapper">
                    <form onSubmit={this.handleSubmit }>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.handleChange} value={category.Name} className="form-control" placeholder="Name.." />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="icon" onChange={this.handleChange} value={category.Icon} className="form-control" placeholder="Icon.." />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" onClick={() => { this.props.onBack();} } className="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}