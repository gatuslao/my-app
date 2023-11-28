function Header({ Text, randomnumber, receiveHeaderClick}) {

    function handleClick(event) {
        console.log("in the click handler");
        receiveHeaderClick("Some text");
    }

    function handleDelete(event) {

    }

    function handleToggleComplete(event) {

    }

    // ONLY form component
    function handleFormSubmit(event) {
        
    }

    return (
        <h1 onClick={handleClick} data-randomnum={randomnumber}>{Text}</h1>
    );
}

export default Header;