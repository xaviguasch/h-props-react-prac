class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to='Ringo'
          from='Paul'
          num={3}
          data={[1, 2, 3, 4, 5]}
          bangs={4}
          img={
            'https://images.unsplash.com/photo-1556034910-766bb954e414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          }
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
