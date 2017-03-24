import {h, Component, cloneElement,} from 'preact';
import classnames from 'classnames';

export function Figure({
    onClick,
    src,
    caption,
    ...props
}) {
    return (
        <figure class="slds-image slds-image--card">
            <a onClick={onClick}>
                <img src={src} alt={caption}/>
            </a>
            {caption
                ? <figcaption class="slds-image__title slds-image__title--card">
                        <span class="slds-image__text slds-truncate" title="Image Title">{caption}</span>
                    </figcaption>
                : null}
        </figure>
    )
}
