import React, { Component } from 'react';
import marked from 'marked';

class Converter extends Component{

    constructor(props){
        super(props);
        this.state={
            text:'**Mark My words**',
        };
        this.updateText = this.updateText.bind(this);
        this.getPreview = this.getPreview.bind(this);

    }

    updateText(event){
        this.setState(
            {
                text: event.target.value,
            }
        );
    }
   
    getPreview(){
        return marked(this.state.text);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="markdown col">
                        <textarea id="input-markdown"  rows="30" cols="60" onChange={this.updateText} value={this.state.text}>
                        </textarea>
                    </div>
                    <div className="preview col">
                        <div dangerouslySetInnerHTML={{__html: this.getPreview()}}>
                        </div>
                    </div>
                </div>
            </div>

            );
    }
}

export default Converter;
