import React, {PropTypes} from 'react';

class App extends React.Component {    
    render() {
        return (
            <div className="container-fluid">                
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Менеджер задач</a>
                        </div>
                    </div>
                </nav>                
                <div style={{paddingTop: 70+'px'}}>                
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;