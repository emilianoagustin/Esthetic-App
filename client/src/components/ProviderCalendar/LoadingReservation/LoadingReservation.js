import React from 'react';
import { connect } from 'react-redux';
import './LoadingReservation.scss';
import loadingGiff from '../../../giff/loading.gif'

function LoadingReservation({ status, handleClickModal, key }) {

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div>
                    {
                        status.loading ? (
                            <img className='giff' src={loadingGiff}></img>
                        ) : (
                            <div>
                                <h4>{status.message}</h4>
                                <button
                                    className='modal-button right'
                                    onClick={(e) => { handleClickModal(key) }}
                                >ACEPTAR</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        status: state.reservation_status
    }
}

export default connect(mapStateToProps)(LoadingReservation);