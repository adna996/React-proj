import React from "react";

var pl=0;
var p=0;
var m=0;

function addPlastic(){
    pl+=1;
    document.getElementById("plasticItemText").innerHTML = "PLASTIC ITEMS " + pl;
}
function addPaper(){
    p+=1;
    document.getElementById("paperItemText").innerHTML = "PAPER ITEMS " + p;
}
function addMetal(){
    m+=1;
    document.getElementById("metalItemText").innerHTML = "METAL ITEMS " + m;
}
function getAllItems(){
    alert("Hi! Thank you for using our app. You saved " + pl +" plastic items, "+p+" paper items" + m + " and metal items.\n" +
        "Remember -> Reuse, Reduce, Recycle :) ");
}
const Recycle = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <h1 className="welcome-title-home">Please start with recycling!</h1>
            <div className="recycle">
                <div id="plasticRecyle">
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                    <div><p id="plasticItemText"></p></div>
                    <div className="desc"><p>Plastic</p></div>
                </div>
                <div id="paperRecyle">
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                    <div><p id="paperItemText"></p></div>
                    <div><p className="desc">Paper</p></div>
                </div>
                <div id="metalRecyle">
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                    <div><p id="metalItemText"></p></div>
                    <di><p className="desc">Metal</p></di>
                </div>
                <div>
                    <div className="loginContainer">
                        <div>
                            <p className="plastic"> Plastic </p>
                            <button id="plasticbtn" onClick={addPlastic}>Add plastic item</button>
                        </div>
                        <div>
                            <p className="paper"> Paper </p>
                            <button id="paperbtn" onClick={addPaper}>Add paper item</button>
                        </div>
                        <div>
                            <p className="metal">Metal</p>
                            <button id="metalbtn" onClick={addMetal}>Add metal item</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button id="finishBtn" onClick={getAllItems}>FINISH</button>
            </div><br/>
        </section>

    )
}

export default Recycle;
