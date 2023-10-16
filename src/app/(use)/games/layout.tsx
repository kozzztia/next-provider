import { games } from '@/dictionary/games';
import Link from 'next/link';
import React from 'react';

const layout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        {
          games.map(item => <Link key={item.id} href={`/games/${item.slug}`}>{item.name}</Link>)
        }

        </div>
        {children}
        </>
    );
};

export default layout;