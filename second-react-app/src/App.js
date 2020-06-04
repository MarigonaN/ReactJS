import React, {Component} from 'react';
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import bookList from "./data/horror.json";
import SingleBook from "./components/SingleBook";
import NavBar from "./components/NavBar"

class App extends Component {

    render() {
        const singleBook = bookList[Math.floor(Math.random() * bookList.length)]
        console.log(singleBook)
        return (
            <>
                <NavBar title="Pair Programming"/>
                <WarningSign text="This is a Warning Sign"/>
                <MyBadge text={" MyBadge "} variant={"info"}/>
                <SingleBook book = {singleBook}/>
            </>
        );
    }
}

export default App;