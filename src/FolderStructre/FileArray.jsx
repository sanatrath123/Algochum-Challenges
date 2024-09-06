
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

export const files = {
    name: 'root',
    isFolder: true,
    children: [
      {
        name: 'src',
        isFolder: true,
        children: [
          {
            name: 'App.js',
            isFolder: false,
            icon:<FaJs/>
          },
          {
            name: 'Folder.js',
            isFolder: false,
            icon:<FaJs/>
          },
          {
            name: 'data.js',
            isFolder: false,
            icon:<FaJs/>
          },
          {
            name: 'Index.js',
            isFolder: false,
            icon:<FaJs/>
          },
          {
            name: 'styles.css',
            isFolder: false,
            icon:<FaCss3/>
          },
        ],
    },
    {
      name: 'public',
      isFolder: true,
      children: [
        {
          name: 'index.html',
          isFolder: false,
          icon: <FaHtml5/>,
        },
        {
          name: 'styles.css',
          isFolder: false,
          icon: <FaCss3/>,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};
