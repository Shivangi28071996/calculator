import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state={
    firstParam:"",
    secondParam:"",
    operator:"",
    result:""
  };
  this.getVal=this.getVal.bind(this);
  this.getOperator=this.getOperator.bind(this);
  this.getResult=this.getResult.bind(this);
  this.clearInput=this.clearInput.bind(this);  
 };

 getVal(e){

   this.setState({result:""});
   if(this.state.operator===""){
  this.setState({firstParam:parseInt(this.state.firstParam + e.target.value, 10)});
   }
   if(this.state.operator !== ""){
    this.setState({secondParam:parseInt(this.state.secondParam + e.target.value, 10)});
   }

}

getOperator(e){
  var operator= e.target.value;

  if(this.state.secondParam===""){
this.setState({operator:operator});
  }
  else{
    this.getResult();
    this.setState({operator:operator});
  }
}

getResult(){
  var result=0;
  if(this.state.operator==="+"){
     result=this.state.firstParam + this.state.secondParam;
  }
  else if(this.state.operator==="-"){
     result=this.state.firstParam - this.state.secondParam;
  }
  else if(this.state.operator==="*"){
     result=this.state.firstParam * this.state.secondParam;
  }
  else if(this.state.operator==="/"){
     result=this.state.firstParam / this.state.secondParam;
  }
  this.setState({firstParam:result,secondParam:"",operator:""});
  this.setState({result:result});
  
}

clearInput(){
  var firstParam="";
  var secondParam="";
  var operator="";
  var result="";
  this.setState({firstParam:firstParam,secondParam:secondParam,operator:operator});
  this.setState({result:result});
}

 render(){
   return(
     <div> 
       <h1>Calculator</h1>
        <Keypad firstParam={this.state.firstParam} secondParam={this.state.secondParam} operator={this.state.operator}
        getVal={this.getVal} getOperator={this.getOperator} getResult={this.getResult} result={this.state.result}
        clearInput={this.clearInput}
        />
     </div>
   )
 }
}

class Keypad extends Component{
  constructor(){
    super();
    this.getVal=this.getVal.bind(this);
    this.getOperator=this.getOperator.bind(this);
    this.getResult=this.getResult.bind(this);
    this.clearInput=this.clearInput.bind(this);    
  }
  getVal(e){
      this.props.getVal(e);
  }

  getOperator(e){
   this.props.getOperator(e);
  }

  getResult(){
    this.props.getResult();
  }
  clearInput(){
    this.props.clearInput();
  }
  
  render() {
    var total=this.props.firstParam + this.props.operator + this.props.secondParam
    return (
      <div>
          <div id="calculator">
					<div className="result">
          {this.props.result==="" ? <input type="text" id="textBox" value={total}/>
          :
          <input type="text" id="textBox" value={this.props.result + this.props.operator}/>
           }
          
          </div>
					<button onClick={this.clearInput}>Clear</button>
				 
					<button value="7" onClick={this.getVal}>7</button>
					<button value="8" onClick={this.getVal}>8</button>
					<button value="9" onClick={this.getVal}>9</button>
					<button value="+" onClick={this.getOperator}>+</button>
				 
					<button value="4" onClick={this.getVal}>4</button>
					<button value="5" onClick={this.getVal}>5</button>
					<button value="6" onClick={this.getVal}>6</button>
					<button value="-" onClick={this.getOperator}>-</button>
				 
					<button value="1" onClick={this.getVal}>1</button>
					<button value="2" onClick={this.getVal}>2</button>
					<button value="3" onClick={this.getVal}>3</button>
					<button value="/" onClick={this.getOperator}>/</button>
				 
					<button value="0" onClick={this.getVal}>0</button>
					<button value="." onClick={this.getVal}>.</button>
					<button value="=" onClick={this.getResult}>=</button>
					<button value="*" onClick={this.getOperator}>*</button>
				  </div>
      </div>
    );
  }
}

export default App;
