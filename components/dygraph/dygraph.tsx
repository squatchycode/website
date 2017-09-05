import * as React from 'react';
import Dygraph from 'dygraphs'; // Todo: including Dygraph package, What if just a .js file out on the web?

export interface DygraphProps {

}

export class DyGraph extends React.Component<DygraphProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount()
    {
         // Attach the DyGraph to the Div
         new Dygraph(
            
                // containing div
                // todo: seems like there would be a better way to just get the top element associated with this component
                document.getElementById("graphdiv"),
                // React.findDOMNode('root'),
            
                // CSV or path to a CSV file.
                "Date,Temperature\n" +
                "2008-05-07,75\n" +
                "2008-05-08,70\n" +
                "2008-05-09,80\n"
            
                );
                
    }

    onDivLoad()
    {

    }

    render() {
        return (
            <div id='graphdiv'>This is more text from  from Dygraphs</div>
        );
    };
};
