import React, { useEffect } from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions/userAction";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));

    if (data?.id) {
      dispatch(getUserById(parseInt(data.id)));
    }
  }, []);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        Brand
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            // <SidebarSubmenu route={route} key={route.name} />
            <></>
          ) : (
            <li className="relative px-4 py-2" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full px-3 py-3 -mb-5 text-sm font-semibold transition-colors duration-150 rounded-md hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100 bg-primary-100 dark:bg-primary-600"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-primary-600"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {/* <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  );
}

export default SidebarContent;
