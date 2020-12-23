import React from 'react';

export default class ListUser extends React.Component {
    render() {
        return (
            <>
                {/*main content start*/}
                <section id="main-content" style={{padding : 10}}>
                    <section className="wrapper">
                        <h3><i className="fa fa-angle-right"/> User <button type="button" className="btn btn-primary pull-right">Add</button></h3>
                        <div className="row mb">
                            {/* page start*/}
                            <div className="content-panel">
                                <div className="adv-table">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
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
            </>
        )
    }
}