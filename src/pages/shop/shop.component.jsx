import React from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js';
import './shop.style.scss';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}
export default ShopPage;