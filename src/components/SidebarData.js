// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Home Page",
        path: "/",
        // icon: <FaIcons.FaPhone />,
    },
    {
        title: "Menu",
        path: "/menu",
        // icon: <FaIcons.FaPhone />,
    },
    {
        title: "Favorites",
        path: "/favorites",
        // icon: <FaIcons.FaEnvelopeOpenText />,
    },
    {
        title: "Random Meal",
        path: "/random-meal",
        // icon: <IoIcons.IoMdHelpCircle />,
    },
    {
        title: "About Me",
        path: "/about-me",
        // icon: <AiIcons.AiFillHome />,
    },
];
