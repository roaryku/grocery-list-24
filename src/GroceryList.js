import { Component } from "react";
import check from './bag.png'
import Swal from "sweetalert2";

export class GroceryList extends Component{
    state = {
       userInput: "",
       groceryList: [] // pustoi massiv stobi otsejivati i sobirati cto polizovateli propisit v input. 
                          // otsledim cac budet meniatsa sostayanie
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }
 
    addItem(input){
        if(input === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter an item!",
            });
        }
        else{
        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput: ''})
      }
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = []
        this.setState({groceryList: listArray})
    }

   CrossedWord(event) {
     const li = event.target;
     li.classList.toggle('crossed')
   }

   onFormSubmit(e){
    e.preventDefault();
   }
    render () {
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="Header">
                <input className="InputStyle" type="text" placeholder="you need to buy..."
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
             </div>
             <div className="Header">
                <button className="btn" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                   <li onClick={this.CrossedWord} key={index}>
                    <img src={check} width="30px" alt="icon"/>
                    {item}
                </li>
            ))}
        </ul>

            <div className="Header">
                <button className="cta" onClick={() => this.deleteItem ()}>Delete</button>
            </div>
            </form>
         </div>
        )
    }
      
}