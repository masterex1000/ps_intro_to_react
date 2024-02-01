import States from "./state_data.json";
import Counties from "./county_data.json";

export interface StateRecord {
    name : string,
    GISJOIN : string
};

export interface CountyRecord {
    name : string,
    GISJOIN : string
}

// Quick and easy place to generate pre-process data
var StateData : StateRecord[] = States.sort((a, b) => a.name.localeCompare(b.name));

// Note: realistically this should be exposed as some sort of map to make lookups faster
var CountyData : CountyRecord[] = Counties;

export {
    StateData,
    CountyData
}