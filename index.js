import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';


function getGameStatus(squares){
let wincombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]  
for(let i=0;i<wincombo.length;i++){
    let wincomb=wincombo[i];
    let s1=wincomb[0];
    let s2=wincomb[1];
    let s3=wincomb[2];
    if(squares[s1]!=null && squares[s1]== squares[s2]&& squares[s2]==squares[s3]) return squares[s1];
}
return null;
}

class Board extends React.Component {
   handleBoxClick(i){
       this.props.handlerforBoxClick(i);
   }
    renderSquar(i){
       return(
       <button onClick={()=> this.handleBoxClick(i)}>{this.props.boxes[i]==null?"":this.props.boxes[i]}</button>
  )
   }
    render() {
        return (
            <div className='board'>
                <div className='title'>
                    Tic Tac Toe
                </div>
                <div className='content'>
                    <div className="ttt">
                        <div className='row'>
                            {this.renderSquar(0)}
                            {this.renderSquar(1)}
                            {this.renderSquar(2)}
                        </div>
                        <div className='row'>
                        {this.renderSquar(3)}
                         {this.renderSquar(4)}
                         {this.renderSquar(5)}
                        </div>
                        <div className='row'>
                             {this.renderSquar(6)}
                             {this.renderSquar(7)}
                             {this.renderSquar(8)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Display extends React.Component {
   moveHistory(i){
       this.props.handleforHistory(i);
   }
    render() {
        let gametitle;
        if(this.props.gameStatus==null){
            gametitle="next move for "+(this.props.stepNumber%2==0?"X":"0")
        }
        else{
            if(this.props.gameStatus=="draw"){
            gametitle=this.props.gameStatus+"wins";
            
        }else{
            gametitle=this.props.gameStatus+"wins";
        }
    }
        let buttons=[];
        for(let i=0;i<=this.props.stepNumber;i++){
            let button;
            if(i==0){
                button=(<button onClick={()=>this.moveHistory(i)}>go to start</button>);
            }else{
                button=(<button onClick={()=>this.moveHistory(i)}>go to step#{i}</button>);
            }
            buttons.push(button);
        }
        return (
            <div className='display'>
                <div className='title'>
                    {gametitle}
                </div>
                <div className='content'>
                    <div className='history'>
                        {buttons}

                    </div>
                </div>
            </div>
        );
    }
}

class TTT extends React.Component {
 constructor(props){
     super(props);
     this.state={
         history:[
             [null,null,null,null,null,null,null,null,null],
         ],
         stepNumber:0,
         gameStatus:null
     }
 }
 handleSquareClick(i){
     let  oldHistroy=this.state.history.slice();
     let lastsquares=oldHistroy[oldHistroy.length-1].slice();
     if(lastsquares[i]!=null || this.state.gameStatus != null) return;
     
     lastsquares[i]=(this.state.stepNumber%2==0? 'X':'0');
     oldHistroy.push(lastsquares);

    let newGameStatus=getGameStatus(lastsquares)
    if(this.state.stepNumber == 8 && newGameStatus == null){
        newGameStatus = "draw";
    }
this.setState({
    history:oldHistroy,
    stepNumber:this.state.stepNumber+1,
    gameStatus:newGameStatus
});
 }
moveToStep(i){
    let  oldhistroy=this.state.history.slice(0,i+1);
    let stage=oldhistroy[oldhistroy.length-1];
    let newGameStatus=getGameStatus(stage)
    this.setState({
        history:oldhistroy,
        stepNumber:i,
        gameStatus:newGameStatus

    })
}
    render() {
        let squares=this.state.history[this.state.history.length-1];
        return (
            <>
                <Board handlerforBoxClick={(i)=> this.handleSquareClick(i)} boxes={squares}/>
                <Display stepNumber={this.state.stepNumber} gameStatus={this.state.gameStatus} handleforHistory={(i)=>this.moveToStep(i)}/>
            </>
        );
    }
}

ReactDOM.render(<TTT />, document.getElementById("root"))