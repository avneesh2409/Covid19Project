import React, { Fragment} from 'react';
import NavMenu from './NavMenu';

export default (props) => (
    <Fragment>
        <NavMenu />
        <div>
            {props.children}
        </div>
    </Fragment>
);
