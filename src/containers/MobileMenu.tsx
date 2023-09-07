"use client";

import type { MobileMenuProps } from "@/types";
import { classNames } from "@utils/utils";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const MobileMenu = ({ navigation }: MobileMenuProps) => {
  const pathname = usePathname();
  return (
    <Menu>
      <Menu.Button className="pr-2">
        <span className="sr-only">Open mobile menu</span>
        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="fixed inset-0 w-full">
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="fixed w-3/4 md:w-5/12 inset-y-0 right-0 overflow-y-auto bg-theone-color0">
            <Menu.Item>
              {({ close }) => (
                <div className="flex flex-row-reverse py-4 px-2">
                  <button type="button" className="text-white" onClick={close}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              )}
            </Menu.Item>
            <div className="divide-y divide-gray-900 border-t border-b border-gray-900">
              {navigation.map((menu, menuIndex) => {
                return (
                  <Menu.Item key={menuIndex} disabled>
                    {({ active: menuActive, close: menuClose }) => (
                      <Disclosure
                        as="div"
                        defaultOpen={menu.child?.some(
                          (item) => item.href === pathname
                        )}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className="w-full flex items-center justify-between
                                py-2 pl-4 pr-3 text-base text-white leading-7"
                            >
                              {menu.name}
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="bg-theone-color2 divide-y divide-gray-900">
                              {menu.child?.map((item, childMenuIndex) => (
                                <Disclosure.Button
                                  key={childMenuIndex}
                                  as={Fragment}
                                >
                                  <div className="flex">
                                    <Link
                                      href={item.href}
                                      onClick={menuClose}
                                      className={classNames(
                                        "py-2 pl-7 text-sm leading-7 text-white w-full",
                                        item.href === pathname
                                          ? "bg-theone-color5"
                                          : ""
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
