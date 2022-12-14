import classes from "./Navbar.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "flowbite";
import { Navbar, Dropdown, Avatar } from "flowbite-react/lib/esm/components";
import { RiDoorOpenFill } from "react-icons/ri";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const NavigationBar = () => {
  return (
    <div className="flex justify-center ">
      <Navbar
        className="w-5/6 rounded-xl animate__animated animate__fadeInDown"
        fluid={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 pl-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">
            Galaxy Solar India
          </span>
        </Navbar.Brand>
        <Dropdown 
          label="Dropdown button" 
          dismissOnClick={false}
          >
          <Dropdown.Item>Dashboard</Dropdown.Item>
        </Dropdown>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Products</Navbar.Link>
          <Navbar.Link href="/navbars">Sites</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
    // <nav class=" animate__animated animate__fadeInDown z-10 px-2 mx-20 rounded-full text-white bg-teal-400 white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div class=" py-3 flex flex-row flex-nowrap items-center justify-around gap-2 mx-auto">
    //     <div className="basis-1/4">
    //       <a href="#" class="flex items-center gap-4">
    //         <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           class="h-6 mr-3 sm:h-10 animate__animated animate__zoomIn logo"
    //           alt="Flowbite Logo"
    //         />
    //         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-bold">
    //           Galaxy Solar India
    //         </span>
    //       </a>
    //     </div>
    //     <div className="basis-7/12 ">
    //       <button
    //         data-collapse-toggle="navbar-dropdown-1"
    //         type="button"
    //         class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-dropdown"
    //         aria-expanded="false"
    //       >
    //         <span class="sr-only">Open main menu</span>
    //         <svg
    //           class="w-6 h-6"
    //           aria-hidden="true"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //       <div
    //         class="hidden w-full md:block md:w-auto md:flex md:flex-row md:justify-center rounded-full"
    //         id="navbar-dropdown-1"
    //       >
    //         <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <a
    //               href="#"
    //               class="block py-2 pl-3 pr-4 text-white bg-slate-700 rounded md:bg-transparent md:text-slate-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
    //               aria-current="page"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <button
    //               id="dropdownNavbarLink"
    //               data-dropdown-toggle="dropdownNavbar"
    //               class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"

    //             >
    //               Dropdown{" "}
    //               <svg
    //                 class="w-5 h-5 ml-1"
    //                 aria-hidden="true"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fill-rule="evenodd"
    //                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                   clip-rule="evenodd"
    //                 ></path>
    //               </svg>
    //             </button>
    //             {/* {<!-- Dropdown menu -->} */}
    //             <div
    //               id="dropdownNavbar"
    //               class={`z-20 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
    //             >
    //               <ul
    //                 class="py-1 text-sm text-gray-700 dark:text-gray-400"
    //                 aria-labelledby="dropdownLargeButton"

    //               >
    //                 <li>
    //                   <a
    //                     href="#"
    //                     class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                   >
    //                     Dashboard
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                   >
    //                     Settings
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                   >
    //                     Earnings
    //                   </a>
    //                 </li>
    //               </ul>
    //               <div class="py-1">
    //                 <a
    //                   href="#"
    //                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
    //                 >
    //                   Sign out
    //                 </a>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <AnchorLink href='#site_sec'>Sites</AnchorLink>
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <AnchorLink href='#prod_sec'>Products</AnchorLink>
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <AnchorLink href="#contact_sec">Contact</AnchorLink>
    //             </a>
    //           </li>
    //           <div>
    //             <ul class="flex flex-col md:flex-row md:space-x-8">
    //               <li className="flex flex-row  gap-2">
    //                 <div className="">
    //                   <RiDoorOpenFill
    //                     alt="door-icon"
    //                     color="#4DB6AC"
    //                     fill="#4DB6AC"
    //                     size="25px"
    //                   />
    //                 </div>
    //                 <a
    //                   href="#"
    //                   class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //                 >
    //                   Login
    //                 </a>
    //               </li>
    //               <li className="flex flex-row  gap-2">
    //                 <div className="">
    //                   <HiMagnifyingGlassCircle
    //                     alt="door-icon"
    //                     color="#4DB6AC"
    //                     fill="#4DB6AC"
    //                     size="25px"
    //                   />
    //                 </div>
    //                 <a
    //                   href="#"
    //                   class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //                 >
    //                   SignUp
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavigationBar;
