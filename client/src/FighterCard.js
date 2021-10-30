import React, {useEffect, useState} from "react";
import "./FighterCard.css";
//nice lil npm package I found lol
import TinderCard from "react-tinder-card";
import FIGHTR from './images/FIGHTR.png'
import { SwipeableDrawer } from "@mui/material";

function FighterCard() {
    //state - each person has a name and url to their image
    const [people, setPeople] = useState([
        {name: "Jeffery Bezos", imgUrl: "https://i.insider.com/5ffdc94fc8408b0019bd412a?width=1136&format=jpeg", description: "Minimum 16 hour work days on minimum wage before you can fight me",record:"Record: 1-12-0"},
        {name: "Elon Musk", imgUrl: "https://i.kym-cdn.com/entries/icons/original/000/027/100/_103330503_musk3.jpg", description: "Still the richest lol",record:"Record: 17-0-0"},
        {name: "Joe Biden", imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/17/10/joe-biden.jpg?width=1200", description: "They call me sleepy Joe cause ill put you to sleep",record:"Record: 1-0-0"},
        {name: "Donald Trump", imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/07/10/donald-trump-fight-biden.jpg?width=1200&auto=webp&quality=75", description: "Giving out free fades since 2016",record:"Record: 1-0-1"},
        {name: "Bryan", imgUrl: "https://img.theepochtimes.com/assets/uploads/2014/05/bryan_silva.jpg", description: "I will get my lawyer", record: "Record: 0-13-25"},
        {name: "Darrel", imgUrl: "https://pbs.twimg.com/media/Dq3xAULV4AEmP9t.jpg", description: "You hitting on ma daughter?",record:"Record: 15-7-1"},
        {name: "NBA Young Boy", imgUrl: "https://i1.sndcdn.com/artworks-000643218106-lew2fc-t500x500.jpg", description: "I feel like Im Gucci Mane in 2006",record:"Record: 65-1-0"},
        {name: "Future", imgUrl: "https://townsquare.media/site/812/files/2021/02/future1.jpg?w=980&q=75", description: "Don't get too comfortable",record:"Record: 13-5-5"},
        {name: "Jayloen", imgUrl: "https://i.pinimg.com/474x/16/1b/16/161b1619528634b4c2356de4776a0838.jpg", description: "Who tryna catch a fade?",record:"Record: 3-6-1"},
        {name: "Zuck", imgUrl: "https://deadline.com/wp-content/uploads/2021/01/MEGA226537_002-e1611780322875.jpg", description: "If you win ill get you an internship at META",record:"Record: 5-1-1"},
        {name: "Mike Scott", imgUrl:  "https://www.cs.utexas.edu/~scottm/images/mikeScottProfessionalSmall.jpg", description: "Giving out fades for free A's  - Office hours 7 AM - 3 PM",record:"Record: 21-0-0"} 
    ]);


    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);

    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }
    return <div className = "fighterCards">
            <div className = "fighterCards_cardContainer">
                {people.map((character => {
                    return( 
                     <TinderCard
                     className = "swipe"
                     key = {character.name}
                     preventSwipe = {['up', 'down']}
                     onSwipe = {(dir) => swiped(dir, character.name)}
                     onCardLeftScreen = {() => outOfFrame(character.name)}>
                    
                    <div className="card"
                         style ={{backgroundImage : "url(" + character.imgUrl + ")" }}
                    >
                        <h3>{character.name}</h3>
                        <h2>{character.record}</h2>
                        <h4>{character.description}</h4>
                    </div>                 
                    </TinderCard>
                    )
                }))}
            </div>
    </div>
}
//prevent swipe doesnt let us swipe up and down
//onSwipe fires off a function called swiped
//if card leaves screen - fire off outOfFrame function
export default FighterCard;