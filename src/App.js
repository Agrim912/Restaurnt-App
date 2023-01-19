import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FoodItem from './components/FoodItem';
import menu from './sample'
import { useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom"; 
  function App() {
    // const [menus, setMenus] = useState();
    // {console.log(menus)}

    // const updatedData=(category)=>{
    //   const filteredData=menu.filter((element)=>{
    //     return element.category===category;
    //   })
    //   setMenus(filteredData);
    // }
  return (
    <>

      {/* {menu.filter((element)=>{
        console.log(element.category)
      })} */}

      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/"> <FoodItem sample={menu} category="all"/> </Route>
        {/* <Route exact path="/breakfast"> <FoodItem sample={menu} category="breakfast"/> </Route> */}
        <Route exact path="/breakfast"> <FoodItem sample={menu.filter((element)=>element.category==="breakfast")} category="breakfast"/> </Route>
        {/* <Route exact path="/breakfast"> <FoodItem sample={()=>updatedData("breakfast")} category="breakfast"/> </Route> */}
        {/* <Route exact path="/breakfast"> <FoodItem sample={menu} category="breakfast"/> </Route> */}
        <Route exact path="/lunch"> <FoodItem sample={menu.filter((element)=>element.category==="lunch")} category="lunch"/> </Route>
        <Route exact path="/dinner"> <FoodItem sample={menu.filter((element)=>element.category==="dinner")} category="dinner"/> </Route>
        {/* <Route exact path="/all"> <FoodItem sample={menu} category="all"/> </Route> */}
      </Switch>
    </BrowserRouter>
      {/* <FoodItem sample={sample} key={sample.id}/> */}
    </>
  );
}

export default App;
// import {
//     BrowserRouter,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//   } from "react-router-dom"; 
{/* <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter> */}
    // <Route exact path="/"> <FoodItem sample={()=>particularMenu("all")} category="all"/> </Route> (ignore)
