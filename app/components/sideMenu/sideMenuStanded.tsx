"use client";

import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
// import { SearchBar } from "../searchBar";

import Image from "next/image";
import { SearchBar } from "../searchBar/searchBar";

export interface UltraUniversity {
  name: string;
  code: string;
  parentUniversityName: string;
  description: string;
  url: string;
  icon: string;
}

export const SideMenuStanded = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function ultraSearchUniversities() {
    return [
      {
        name: "This is the Name",
        code: "String",
        parentUniversityName: "String",
        description: "String",
        url: "https://cdn.qocial.net/listing-motherteresains17190-avatar.jpg",
        icon: "String",
      },
      {
        name: "String",
        code: "String",
        parentUniversityName: "String",
        description: "String",
        url: "https://cdn.qocial.net/listing-motherteresains17190-avatar.jpg",
        icon: "String",
      },
    ] as UltraUniversity[];
  }

  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex flex-col items-center w-60 h-full overflow-hidden rounded">
      <div
        className="relative mt-2 lg:w-56 cursor-pointer h-14 w-"
        onClick={() => openModal()}
      >
        <SearchBar
          isDesabled={true}
          removeIcon={true}
          width={60}
          emitClickEvent={(e: any) => console.log(e, "------------")}
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 max-h-96"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div
                    className="relative mt-1 lg:w-56"
                    onClick={() => openModal()}
                  >
                    <SearchBar
                      removeIcon={true}
                      width={96}
                      emitClickEvent={(e: any) =>
                        console.log(e, "------------")
                      }
                    />
                  </div>
                  <Combobox>
                    {ultraSearchUniversities().length > 0 && (
                      <Combobox.Options
                        static
                        className="max-h-96 scroll-py-3 overflow-y-auto pt-2"
                      >
                        {ultraSearchUniversities().map((item) => (
                          <Combobox.Option
                            key={item.icon.toString()}
                            value={item}
                            className={({ active }) =>
                              classNames(
                                "flex cursor-default select-none rounded-xl p-3",
                                active && "bg-gray-100"
                              )
                            }
                          >
                            {({ active }) => (
                              <>
                                <div
                                  className={classNames(
                                    "flex h-10 w-10 flex-none items-center justify-center rounded-lg "
                                  )}
                                >
                                  <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-full"
                                      src={item.url}
                                      alt={""}
                                    />
                                  </div>
                                </div>
                                <div className="ml-4 flex-auto">
                                  <p
                                    className={classNames(
                                      "text-sm font-medium",
                                      active ? "text-gray-900" : "text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </p>
                                  <p
                                    className={classNames(
                                      "text-sm",
                                      active ? "text-gray-700" : "text-gray-500"
                                    )}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    )}
                  </Combobox>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Dasboard</span>
          </a>
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Search</span>
          </a>
          <a
            className="flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Insights</span>
          </a>
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Docs</span>
          </a>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Products</span>
          </a>
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Settings</span>
          </a>
          <a
            className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Messages</span>
            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
          </a>
        </div>
      </div>
      <a
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
        href="#"
      >
        <svg
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Account</span>
      </a>
    </div>
  );
};
