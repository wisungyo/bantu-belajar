import React, { Component } from 'react';
import './PenggalanganDanaBerlangsung.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { viewOnGoingProgram } from "../../actions/programActions"
import CardDanaBerlangsung from './CardDanaBerlangsung';

class PenggalanganDanaBerlangsung extends Component {

    componentWillMount() {
        this.props.viewOnGoingProgram();
    }


    render() {
        // console.log(this.props.programs.programs);

        return (
            <div className="Background">
                <div className="kesatuan-card">
                    <div className="d-flex bd-highlight">
                        <div className="BD-Header">PENGGALANGAN DANA BERLANGSUNG</div>
                        <div className="BD-Header-Right">Lihat lebih banyak lagi</div>
                    </div>
                    <div className="between">
                        {this.props.programs.programs.map((data, index) =>  
                        (index < 4) ?
                               <CardDanaBerlangsung
                                gambar={data.gambar.gambar_1._meta.secure_url}
                                kategori={data.kategori}
                                wilayah={data.lokasi}
                                judul={data.judul}
                                namaOrganisasi={data.penggalang['nama']}
                                nilaiProgress={(data.dana_terkumpul / data.dana_target * 100)}
                                deadline={Math.round(Math.abs((new Date(data.tgl_target) - new Date()) / (24 * 60 * 60 * 1000)))+ " hari lagi"}
                                nominal={Number((data.dana_terkumpul).toFixed(2)).toLocaleString('de-DE')}
                                />
                            : ""
                        )}
                    </div>
                </div>
            </div>

        )
    }
}


PenggalanganDanaBerlangsung.propTypes = {
    viewOnGoingProgram: PropTypes.func.isRequired,
    programs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    programs: state.programs
})

export default connect(
    mapStateToProps,
    { viewOnGoingProgram }
)(PenggalanganDanaBerlangsung);

    