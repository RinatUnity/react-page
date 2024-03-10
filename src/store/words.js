import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data :[
        {name:"машина"},
            {name:"мотоцикл"},
            {name:"зубило"},
            {name:"ключ"},
            {name:"яблоко"},
            {name:"лемон"},
            {name:"холодильник"},
            {name:"газ"},
            {name:"свет"},
            {name:"компьютер"},
            {name:"галоша"},
            {name:"валенки"},
            {name:"огурец"},
            {name:"петрушка"},
            {name:"лук"},
            {name:"майонез"},
            {name:"ручка"},
            {name:"карандаш"},
            {name:"телевизор"},
            {name:"радио"},
            {name:"саит"},
            {name:"страница"},
            {name:"гантеля"},
            {name:"штанга"},
            {name:"вода"},
            {name:"сок"},
            {name:"сковородка"},
            {name:"чайник"},
            {name:"ботинки"},
            {name:"куртка"}
    ]
}
 const WordSlice = createSlice({
     
    name:"words",
    initialState,
    reducers:{
        addWords(state,action){
            const res = action.payload;
            const h = state.data.filter(e => e.name ===res.name);
            if(!h.length){
                state.data.push(res);
            }
        },
        deletWords(state,action){
            state.data = state.data.filter(e => e.name !== action.payload.name)
        },
        renameWords(state,action){

            const res = action.payload;
            if(res.newname.length > 0 && res.newname!==res.name){
               const a = state.data.findIndex(item => item.name===res.name);
               if(a!==-1){
                state.data[a].name = res.newname;
                 }                 
            }        
        }

    }

 })
export const {addWords} = WordSlice.actions;
export const {deletWords} = WordSlice.actions;
export const {renameWords} = WordSlice.actions;
export default WordSlice.reducer;