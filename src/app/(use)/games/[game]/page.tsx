import { games } from '@/dictionary/games';
import Title from '@/ui-kit/Title';
import React from 'react';

type gameParamType = {
    params :{
        game : string;
    }
}

const game = ({params :{game}} : gameParamType) => {
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop: "20px"}}>
            <Title text={game}/>
        </div>
    );
};

export default game;