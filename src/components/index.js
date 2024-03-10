import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";


import { DashboardAdmin, Categories, Products, Orders, Users } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import Verify from "./shop/layout/Verify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./shop/auth/ResetPassword";
import About from "./shop/contact/About";
import Rule from "./shop/rules/rules";
// import Succes from "./shop/order/Success";
import Succes from "./shop/order/Success";


/* Routing All page will be here */
const Routes = (props) => {
  
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/verify/:id/:token" component={Verify} />
        <Route
          exact
          path="/password-reset/:id/:token"
          component={ResetPassword}
        />
        <Route exact path="/success" render={(routeProps) => (
    <Succes {...routeProps} state={props.state} setState={props.setState}/>
  )} />
        <Route exact path="/about" component={About} />
        <Route exact path="/rules" component={Rule} />
     
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage }
          state={props.state}
          setState={props.setState}
         
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/users"
          component={Users}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />

        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
