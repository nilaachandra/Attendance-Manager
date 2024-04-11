import { createSlice } from '@reduxjs/toolkit'
import supabase from '../Supabase/supabaseClient'

const initialState = {
    batches: [],
    loading: false,
    error: null,
}

const batchSlice = createSlice({
    name: 'batches',
    initialState,
    reducers: {
        addBatchStart(state){
            state.loading = true;
            state.error = null
        },
        addBatchSucces(state,action) {
            state.loading = false;
            state.error = null;
            state.batches.push(action.payload)
        },
        addBatchFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { addBatchStart, addBatchSucces, addBatchFailure} = batchSlice.actions

export const addBatch = (batchData) => async (dispatch) => {
    try {
        dispatch(addBatchStart())
        const {data, error } = await supabase.from('batches').insert(batchData).select();
        if(error) {
            throw error
        }
        dispatch(addBatchSucces(data))
        console.log('Batch Added,', data)
    } catch (error) {
        dispatch(addBatchFailure(error.message))
        console.error('Batch could not be added', error.message)
    }
}
export default batchSlice.reducer