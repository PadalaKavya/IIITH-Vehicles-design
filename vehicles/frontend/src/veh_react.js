import React, { useEffect, useState } from 'react';

function x()
{
    const [backendData, setbackendData] = useState([{}])

    useEffect(() =>{
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setbackendData(data)
            }
        )
    }, [])

return (
    <div>

    </div>
)
}
export default x

/*export default class x extends Component {
    constructor(){
        super();
        this.state = {
            user:[]
        };
    this.componentDidMount = () => 
    {
        fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users}));
    }
    }
    render(){
        return (
            <div>
                <button>submit</button>
                <h1>hii! I am kavya:</h use1>
                <ul>
                 {this.state.users.map(user => 
                    <li key={user.id}>{user.username}</li>
                    )}
                </ul>

            </div>
        );
    }
}*/