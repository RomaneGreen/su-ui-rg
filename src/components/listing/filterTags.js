import { staticData } from "../../common";

export const getFilterTags = (filters, filter_states, cities, counties) => {

    const tagNameMapping = {
        "state": "state",
        "county": "county",
        "city": "city",
        "neighbourhood": "neighbourhood",
        "Price": "price",
        "Bedrooms": "Bedrooms",
        "Bathrooms": "Bathrooms",
        "# Of Stories": "Stories",
        "# Of Units": "Units",
        "noteStatus": "note",
        "Lien Position": "Lien",
        "Total SQFT": "SQFT",
        "Lot Area SQFT (Floorplate)": "Lot SQFT",
        "Maturity Date": "Maturity",
        "Interest Rate": "Interest",
        "Year Built": "Built"
    }
    return Object.keys(filters).map((key) => {

        let propertyTypeKey, filterTagName, filterTagValue, filterTagAlias;
        filterTagName = key;
        filterTagAlias = tagNameMapping[key] ? tagNameMapping[key] + ': ' : '';

        switch (key) {
            case "Property Type":
                if (filters["Asset Type"]) {
                    if (filters["Asset Type"] === 1) {
                        propertyTypeKey = "CommercialPropertyType";
                    }
                    else {
                        propertyTypeKey = "ResidentialPropertyType";
                    }
                }
                else {
                    propertyTypeKey = "CommercialPropertyType";
                }
                filterTagValue = staticData[propertyTypeKey].find(item => { return item.id === filters[key] }).name;
                break;
            case "state":
                filterTagValue = filter_states.find(item => { return item.name === filters[key] }).name;
                break;
            case "county":
                filterTagValue = counties.find(item => { return item.name === filters[key] }).name;
                break;
            case "city":
                // const filter_states = staticData["filter_States"];
                // const states = filter_states.map(state => { return state.name });
                filterTagValue = cities.find(item => { return item.id === filters[key] }).name;
                break;

            default:
                filterTagValue = staticData[key] ? staticData[key].find(item => { return item.id === filters[key] }).name : null;
                break;
        }
        return {
            filterTagName,
            filterTagValue,
            filterTagAlias
        }

    });

}
