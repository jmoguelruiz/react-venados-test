import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import GameList from './GameList';
import {Loading} from '../../../common/components';

const MatchList = ({ items, showLoading }) => {

    if(showLoading){
        return (
            <Loading />
        );
    }

    if(items.length == 0){
        return (
            <div className={`row ${styles.noResult}`}>
                <div className="col text-center">
                    No se encontraron resultados.
                </div>
            </div>
        );
    }

    return (
        <div className={`row ${styles.container}`}>
            {
                items.map(({ month, games }, index) => {
                    return (
                        <div key={`match-list-${index}`} className="col-12">
                            <div className={`row ${styles.monthBar}`}>{month}</div>
                            <GameList games={games} />
                        </div>
                    );
                })
            }
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#257700"
    }),
    monthBar: css({
        backgroundColor: "#7f7f7f",
        color: "#fff",
        padding: "5px 15px 5px",
        fontSize: 14
    }),
    noResult: css({
        marginTop: 15
    })
}

MatchList.propTypes = {
    /** Elementos de la lista */
    items : PropTypes.array,

    /** Mostrar loading. */
    showLoading : PropTypes.true
};

export default MatchList;