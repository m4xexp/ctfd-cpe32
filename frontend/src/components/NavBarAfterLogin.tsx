// import React, { FC } from 'react'
// const NavBarAfterLogin: FC = () => {
//     return <div>I am NavBarAfterLogin.</div>
// }
// export default NavBarAfterLogin

import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import logo from "../assets/ctf-logo.svg";
import * as Loader from "react-loader-spinner";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs /*...*/,
  faAnchor,
  faDizzy,
  faAdjust,
  faBell,
  faGhost,
  faFan,
  faCarSide,
  faJedi,
  faLaughBeam,
  faKey,
  faCheese,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
 
import "./NavBar.css";
 
class App extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        color={"#0A0527"}
        logo={logo}
        //loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        //loader={<Loader.TailSpin color="#D85B5B" height={25} width={25}/>}
        //isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              //alert("Its coffee time...");
              window.location.href='/leaderboard'
            },
          },
          // {
          //   title: "Tutorial",
          //   icon: faBookOpen,
          //   isAuth: () => {
          //     // Claim authorization logic...
          //     return false;
          //   },
          // },
          {
            title: "Tutorial",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Leadeboard",
            icon: faGlobe,
            isAuth: true,
            subItems: [
              {
                title: "Score Leaderboard",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Team Leaderboard",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
            ]
          },
          {
            title: "Challenge",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Challenge",
                icon: faAnchor,
                isAuth: true,
                // onClick: () => {
                //   // What you want to do...
                //   alert("I need another cup of coffee...");
                // },
              },
              {
                title: "Create Challenge",
                icon: faDizzy,
                isAuth: true,
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
            ],
          },
          {
            title: "Team",
            icon: faChartPie,
            isAuth: true,
            subItems: [
              {
                title: "My Team",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Create Team",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
            ]
          },
          {
            title: "Profile",
            icon: faChartPie,
            isAuth: true,
            subItems: [
              {
                title: "Profile",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Logout",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
            ]
          },
        ]}
      />
    );
  }
}

export default App;