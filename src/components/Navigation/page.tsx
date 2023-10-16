'use client'
import {path} from '@/dictionary/path';
import Link from 'next/link';
import Title from "@/ui-kit/Title";
import style from "./style.module.css";
import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '@/Provider/ThemeProvider';


type NavigationPropsType = {
    className? : string;
}

const Navigation = ({className} : NavigationPropsType) => {
  const context= useContext(ThemeContext)
  return (
    <ul className={`${className!} ${style.nav}`}>
      <button onClick={context?.toggle}>
        theme
      </button>
        {
            path.map(item => 
              <li key={item.id}>
            <Link 
                href={item.path}> 
                <Title text={item.name}/>
            </Link>
            </li>
            )
        }
    </ul>
  )
}

export default Navigation