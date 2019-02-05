import {SELECT_PLAYER} from '../actionTypes';
import openModal from './openModal';

/** Acción para seleccionar al jugador. */
export default function selectPlayer(player){
    return (dispatch) => {
        dispatch({
            type: SELECT_PLAYER,
            payload : player
        });
        dispatch(openModal());
    };
}