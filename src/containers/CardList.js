import React from 'react';
import Card from '../component/Card'

const CardList = ({robots}) => {
    const cardItemList = robots.map((user) => {
        return (<Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
        ></Card>);
    });
    return (<div>
        {cardItemList}
    </div>);
}

export default CardList;