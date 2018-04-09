import React, { Component } from 'react';
import { increment, decrement } from './ducks/reducer';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{this.props.currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => console.log(this.props.increment(1))}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => this.props.increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => this.props.decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => this.props.decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

// mapStateToProps() will allow the component to declare which state variables it needs returned from store as props after they have been updated. This make it possible to access your reducer state objects from within your React components.
// This function pattern is used in any component that needs to update state located in the Redux store
function mapStateToProps(state) {
  console.log('redux store state', state);
  return {
    currentValue: state.currentValue
  };
}

// connect() is used to attach a component to the Redux store.
// calls connect, connect passes the state of the App as an arguement then returns a function. The returned function will then pass the App component as an arguement.
// let decoratoratedComponent = connect(state of component)
// export default decoratoratedComponent(App);

export default connect(mapStateToProps, { increment, decrement })(App);
