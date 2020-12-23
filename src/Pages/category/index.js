import React from 'react';
import EditCategory from "./EditCategory";
import AddCategory from "./AddCategory";

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            showForm:false,
            editing: false,
            category:null
        }

    }
    async  componentDidMount() {
        if (window.sessionStorage.getItem("categories") !== null) {
            const categories = JSON.parse(window.sessionStorage.getItem("categories"));
            this.setState({ categories: categories });
        } else {
           await fetch("https://foodgroup.herokuapp.com/api/menu").then(rs => rs.json()).then(rs => {
                // console.log(rs);
                window.sessionStorage.setItem("categories", JSON.stringify(rs.data));
                this.setState({ categories: rs.data });
            })
        }

    }


    reload= () => {
        fetch("https://foodgroup.herokuapp.com/api/menu").then(rs => rs.json()).then(rs => {
            // console.log(rs);
            this.setState({ categories: rs.data });
        })
    }
    render() {
        var {categories,editing,category,showForm} = this.state;
        return (
            editing && category !== null
                ? <EditCategory category={category} onBack={()=>this.setState({editing:false})}/> :
                (showForm ? <AddCategory onBack={()=>this.setState({showForm:false})}/> :


           <div>
                {/*main content start*/}
                <section id="main-content" style={{padding : 10}}>
                    <section className="wrapper">
                        <h3><i className="fa fa-angle-right"/> Category <button type="button" className="btn btn-primary pull-right"
                            onClick={()=>this.setState({showForm:true})}
                        >Add</button></h3>

                        <div className="row mb">
                            {/* page start*/}
                            <div className="content-panel">
                                <div className="adv-table">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th width="100" scope="col">#</th>
                                            <th width="300" scope="col">Name</th>
                                            <th width="100" scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            categories.map((e, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row">{++i}</th>
                                                        <td>{e.name}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-success"
                                                                    onClick={()=>this.setState({editing:true,category:e})}>
                                                                Edit</button>&nbsp;
                                                            <button type="button" className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                        })
                                        }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* page end*/}
                        </div>
                        {/* /row */}
                    </section>
                    {/* /wrapper */}
                </section>
                {/* /MAIN CONTENT */}
                {/*main content end*/}
           </div>
        )
        )
    }
}
