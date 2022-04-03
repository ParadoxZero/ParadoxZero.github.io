import React from 'react';

export const ViewMode = {
    Desktop: 0,
    Tablet: 1, 
    Mobile: 2
}

export class ReactiveComponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = { responsiveStage: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        //this.setState({ width: window.innerWidth, height: window.innerHeight });
        let responsiveStage = ViewMode.Desktop;
        if(window.innerWidth > 930) {
            // Desktop mode - 930+ px
            responsiveStage = ViewMode.Desktop;
        }
        else if (window.innerWidth > 700) {
            // Tablet - 700-930px
            responsiveStage = ViewMode.Tablet;
        }
        else {
            // Mobile - 0-700px;
            responsiveStage = ViewMode.Mobile;
        }

        this.setState({responsiveStage: responsiveStage});
    }
}