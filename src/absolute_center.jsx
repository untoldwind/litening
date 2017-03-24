import {h, Component, cloneElement} from 'preact';
import classnames from 'classnames';

export function AbsoluteCenter({
    className,
    children,
    style,
    ...props,
}) {
    const ctClassNames = classnames(className, 'slds-align--absolute-center');
    const ctStyle = style || 'height: 100%;';
    return (
        <div className={ctClassNames} style={ctStyle} { ...props }>
            {children}
        </div>
    );
}
