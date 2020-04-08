import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
//next does auto code splitting
class IndexPage extends Component {
  static async getInitialProps(context) {
    //static so can be called before component being init, and async
    // since async automatically returns a promise, dont need to await (this hook returns a promise)
    // u can take out async keyword and return something like Promise.resolve({appName: 'Super App'}) instead
    console.log(context);
    return { appName: 'Best App' };
  }
  render() {
    return (
      <div>
        {/* below appName is from getInitialProp */}
        <h1> {this.props.appName} </h1>
        <h1> Main page</h1>
        <p>
          <Link href="/auth">
            <a>Go to Auth</a>
          </Link>{' '}
          {/* route option 1 abovebehind scenes next.js Link will add href to a tag inside */}
        </p>
        <button onClick={() => Router.push('/auth')}>Go To Auth</button>
        {/* route option 2 imprort next/router and use button... can use handler func as well*/}
        <style jsx>
          {`
            div {
              border: 1px solid #eee;
              box-shadow: 0 2p 3px #ccc;
              padding: 10px;
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}

//still work with components in our next.js file
//code splitting also incldues components used within the page, so here u dont load user, but in auth/index.js u do
//cant use css modules
//next uses a 3rd party packages called styled-jsx    <style jsx>{``} <style>
//<style jsx>
// {`
// div {
//   border: 1px solid #eee;
//   box-shadow: 0 2p 3px #ccc;
//   padding: 10px;
//   text-align: center;
// }
// `}
// <style>

//create _error.js page for custom error handling https://nextjs.org/docs/advanced-features/custom-error-page
//very important feature of nextJS - the lifecycle hook getInitialProps(context) { thats also avaialble for functional components (unlike other lifecycle hooks)
//executes on server (it will show up in bash terminal on dev) every refresh or typing url in domain.
//Only executed on the child (and shows up on browser console) if you naviagte to there (clicking a link e.g.), but still works the same in terms of prerendering props
// can use it to initialize props before component loads, like by fetching data. important for rendering componet server side
// u cant do this react above in react only
// context object includes following prop: pathname, query, asPath, req, res (req res important for express), jsonPageRes, and err
//

//https://nextjs.org/docs/api-reference/data-fetching/getInitialProps     class vs function component usage
//functinal style:
// const authIndexPage = (props) => (  notice u pass maxAge as prop thats set below
//     <div>
//       <h1> Auth page</h1>
//       <User name="max" age={props.maxAge} />
//     </div>
//   );
//authIndexPage.getInitialProps = async context => ({ maxAge: 10 });

export default IndexPage;
