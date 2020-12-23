import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from '../components/Header';
import DashBoard from '../Pages/home/DashBoard';
import Footer from '../components/Footer'
import SideBar from "../components/SideBar";
import ListCategory from "./category";
import ListBrands from "./brand";
import ListProduct from "./product";
import ListOrder from "./order";
import ListUser from "./user";

export default class Layout extends React.Component{
    render() {
        return(
            <BrowserRouter className="page">
                <Header />
                <SideBar/>
                <Switch>
                    <Route exact path="/"><DashBoard/></Route>
                    <Route exact path="/category/index"><ListCategory/></Route>
                    <Route exact path="/brand/index"><ListBrands/></Route>
                    <Route exact path="/product/index"><ListProduct/></Route>
                    <Route exact path="/order/index"><ListOrder/></Route>
                    <Route exact path="/user/index"><ListUser/></Route>
                </Switch>
                {/*<Footer/>*/}
            </BrowserRouter>
        )
    }
}