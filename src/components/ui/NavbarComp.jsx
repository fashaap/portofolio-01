import Logo_svg from "../../assets/logo.svg";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Project", href: "/project", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavbarComp = () => {
  return (
    <Disclosure as="nav" className="backdrop-blur-[2px] bg-neutral-900 ">
      {({ open }) => (
        <>
          <div className="mx-auto px-4  max-w-7xl  sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      className="h-8 w-auto"
                      src={Logo_svg}
                      alt="Your Company"
                    />
                  </NavLink>
                </div>
                <div className="   inset-y-0 left-0 flex items-center justify-end sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center  p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className=" -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral-900  text-white"
                            : "text-gray-300 hover:bg-gray-600 hover:text-white",
                          " px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href}>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block  px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
