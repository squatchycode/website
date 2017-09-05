import * as React from 'react';

export interface DygraphProps {

}

export class DyGraph extends React.Component<DygraphProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>This is from the  Dygraphs in compoenents</div>
        );
    };
};
