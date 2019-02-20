function Person() {
    return (
        <div class="person">
            <h1>Sam</h1>
            <p>Age: 23</p>
        </div>
    );
}

ReactDOM.render(<Person />, 
    document.querySelector('#p1')
    );