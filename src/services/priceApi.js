import axios from "axios";

const API = axios.create({ 
    baseURL: "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070",
    params: {
        "api-key": "579b464db66ec23bdd000001757d65ded0294c736cce4065702c67dd",
        "offset": 0,
        "limit": "all",
        "format": "json"
    }
});

// ✅ Fetch States
export const fetchStates = async () => {
    try {
        const response = await API.get();
        console.log("Raw API Response:", response.data);
        
        // Extract unique states from response
        const records = response.data.records || [];
        const states = [...new Set(records.map(item => item.state))]; // Unique states
        console.log("Extracted States:", states);

        return states;
    } catch (error) {
        console.error("Error fetching states:", error);
        return [];
    }
};

// ✅ Fetch Districts
export const fetchDistricts = async (state) => {
    try {
        const response = await API.get();
        const records = response.data.records || [];
        const districts = [...new Set(records.filter(item => item.state === state).map(item => item.district))];
        console.log(`Districts for ${state}:`, districts);
        
        return districts;
    } catch (error) {
        console.error(`Error fetching districts for ${state}:`, error);
        return [];
    }
};

// ✅ Fetch Markets
export const fetchMarkets = async (state, district) => {
    try {
        const response = await API.get();
        const records = response.data.records || [];
        const markets = [...new Set(records.filter(item => item.state === state && item.district === district).map(item => item.market))];
        console.log(`Markets for ${state}, ${district}:`, markets);
        
        return markets;
    } catch (error) {
        console.error(`Error fetching markets for ${state}, ${district}:`, error);
        return [];
    }
};

// ✅ Fetch Price
export const fetchPrice = async (state, district, market, commodity) => {
    try {
        const response = await API.get();
        const records = response.data.records || [];
        const priceData = records.find(item => 
            item.state === state && 
            item.district === district && 
            item.market === market && 
            item.commodity === commodity
        );

        console.log(`Price for ${commodity} in ${market}, ${district}, ${state}:`, priceData);
        return priceData ? priceData.price : "N/A";
    } catch (error) {
        console.error(`Error fetching price for ${commodity}:`, error);
        return "N/A";
    }
};