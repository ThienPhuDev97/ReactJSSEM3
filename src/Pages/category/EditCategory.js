import  React from 'react';

export  default class EditCategory extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category:props.category
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
        const category = this.state.category;
        console.log(category);

    }
    render() {
        const {category}= this.state;

        return(
            <section id="main-content" style={{padding : 10}}>
                <section className="wrapper">
                    <form onSubmit={this.handleSubmit }>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.handleChange} value={category.name} className="form-control" placeholder="Name.." />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="icon" onChange={this.handleChange} value={category.icon} className="form-control" placeholder="Icon.." />
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
