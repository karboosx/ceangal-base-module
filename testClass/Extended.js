import Module from '../src/Module'

class Extended extends Module{


    constructor(config){
        super(config);

        this.vars_description = {
            test:'testing'
        };

    }

    render() {
        return '{}';
    }

}

export default Extended;