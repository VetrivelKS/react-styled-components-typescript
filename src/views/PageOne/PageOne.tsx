import * as React from "react";
// import "./App.css";

import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props:any) => props.theme === 'kaala' ? "black" : "white"};
  color: ${(props:any) => props.theme === 'kaala' ? "red" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button1 = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: yellow;
`;

const Button2 = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: yellow;
  ${(props:any) =>
    {
    /* props.theme==='kaala' && css`*/
    /*  css` causes issue in typescript */
    /* Property 'css' does not exist on type 'ThemedBaseStyledInterface<any>'. */
    /* couldn't find fix online */
    /* hence directly returned string literal and it work fine :) ;) */
      if(props.theme==='kaala') {
        return `
          padding:10px;
          margin: 20px;
        `
      }
      else {
        return `
          padding:30px;
          margin: 40px;
          border-radius: 50px;
          text-decoration: underline;
        `
      }

    }
    }
`;

interface IState {
  withoutInit: string;
}
class PageOne extends React.Component<any,IState>{
  constructor(props: any) {
    super(props)
    // @see https://stackoverflow.com/a/54434138
    // super(props) isn't mandatory
    this.handleClick = this.handleClick.bind(this)
    // binding `this` to event handlers,
    // or else `this` will undefined in handler when called as callback
    this.state = {'withoutInit': 'clicked'}
  }
  handleClick(e: React.MouseEvent) {
    console.log('handleClick',this)
    this.setState({'withoutInit': 'clicked'})
  }
  componentDidMount() {
    this.setState({'withoutInit': 'init'})
    // setState works even without initializing it in constructor
  }
  render() {
    return (
      <div className="page-one">
        <h1> Page One </h1>
        {this.state.withoutInit}
        <Button onClick={this.handleClick} theme={'kaala'}>click me </Button>
        <Button onClick={this.handleClick} >click me </Button>
        <Button1 onClick={this.handleClick} >click me </Button1>
        <Button2 onClick={this.handleClick} theme={'kaala'} >click me </Button2>
        <Button2 onClick={this.handleClick} >click me </Button2>


      </div>
    );
  }
}

export { PageOne }
export default PageOne