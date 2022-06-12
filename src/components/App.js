import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };


    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID KSy6eM4iRbWqvgXnHQYZ3mPBrRhK5NH-CFdlsmEDNYs'
                }
            });

        this.setState({ images: response.data.result });
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} images
            </div>
        );
    }
};

export default App;