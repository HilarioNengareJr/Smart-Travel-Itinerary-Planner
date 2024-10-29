import React from 'react';
import { GoogleMap, useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ['places'];

const AutocompleteInput: React.FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <Autocomplete>
            <input
                type="text"
                placeholder="Enter a place"
                className="w-full p-4 text-lg"
            />
        </Autocomplete>
    );
};

export default AutocompleteInput;
