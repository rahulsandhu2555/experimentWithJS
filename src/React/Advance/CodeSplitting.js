import React from "react";
import Page from "../../components/PageCompnents/Page";
import { H2, H3, H4 } from "../../components/PageCompnents/Typography";
import Code from "../../components/PageCompnents/Code";
import Note from "../../components/PageCompnents/Note";

function CodeSplitting() {
  return (
    <Page>
      <H2>Code-Splitting</H2>
      <p>
        Mostly apps uses bundler to make the whole file into single bundle.js,
        which loads the entire app at once.
      </p>
      <p>
        We can use Webpack, Rollup, Browserify to split the code into multiple
        bundles, which can be loaded at runtime, it is useful when using
        multiple 3rd party library, and bundle size is big.
      </p>
      <H3>Ways to Split Code</H3>
      <a href="https://webpack.js.org/guides/code-splitting/" target={"_blank"}>
        Webpack-splitting
      </a>

        {/*---------------------------------------------------------------------------------*/}
        <H4>1. using Import</H4>
      Will be included in bundle.js
      <Code>
        {`import { add } from './math';`}
        <br />
        {`console.log(add(16, 26));`}
      </Code>
      will Split the code
      <Code>
        {`import("./math").then(math => {`}
        <br />
        {`  console.log(math.add(16, 26));`}
        <br />
        {`});`}
      </Code>

        {/*---------------------------------------------------------------------------------*/}
        <H4>2. React.Lazy</H4>
      <Note>
        React.lazy and Suspense are not available in Server Side Rendering, for
        that use "Loadable Components"
      </Note>
      <Code>
        {`const OtherComponent = React.lazy(() => import('./OtherComponent'));`}
      </Code>
        <p>React.Lazy{'=>'} takes a function, that must call dynamic import {'=>'} returns a promise, which resolves
            default export of React component</p>
        <p>Lazy component should be called inside the Suspense with fallback to show while waiting...</p>
        <Code>
            {`import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary> => If there is any network error in loading the components
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);`}
        </Code>
        <Note>Fallback Props accepts any React Element</Note>
        <p>Suspense can be placed anywhere above LazyLoading Component, and multiple LazyLoad components can be wrapped
        inside one Suspense</p>

        {/*---------------------------------------------------------------------------------*/}
        <hr/>
        <H3>Route-based code splitting</H3>
        <Code>
            {`import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);`}
        </Code>

        {/*---------------------------------------------------------------------------------*/}
        <hr/>
        <H3>Named Exports</H3>
        <Note>React.Lazy currently uses default export component only</Note>
        <p>If the component is named export, create an intermediate module and reexport as default</p>
        <Code>
            {`// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;`}
        </Code>
        <Code>{`// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";`}</Code>
        <Code>{`
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));`}</Code>
    </Page>
  );
}

export default CodeSplitting;
